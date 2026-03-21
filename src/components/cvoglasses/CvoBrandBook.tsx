"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
  type MouseEvent,
  type RefObject,
} from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

/** Loaded PDF handle from `<Document onLoadSuccess />` (avoids importing nested `pdfjs-dist` types). */
type LoadedPdf = Parameters<NonNullable<ComponentProps<typeof Document>["onLoadSuccess"]>>[0];

const PDF_URL = "/documents/cvo-brand-book.pdf";

/** Fallback height/width until PDF reports real page aspect (common print ~1.294–1.414). */
const FALLBACK_PAGE_ASPECT = 1.35;

const bookViewportClass =
  "min-h-[360px] h-[min(62vh,520px)] sm:min-h-[420px] sm:h-[min(72vh,680px)] lg:min-h-[500px] lg:h-[min(82vh,900px)] xl:min-h-[540px] xl:h-[min(88vh,1040px)]";

/** Rectangular loupe: CSS px dimensions, zoom factor for sampled region. */
const LOUPE_W = 260;
const LOUPE_H = 160;
const LOUPE_ZOOM = 2.75;
const LOUPE_RADIUS = 6;

/** Match edge button width — don’t show loupe over turn-page strips. */
function edgeExclusionPx(_shellWidth: number): number {
  return 36;
}

function useDebouncedBookViewport(shellRef: RefObject<HTMLDivElement | null>, delayMs: number) {
  const [size, setSize] = useState({ width: 960, height: 560 });

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;
    let timeoutId: ReturnType<typeof setTimeout>;

    const apply = () => {
      const w = el.clientWidth || 960;
      const h = el.clientHeight || 560;
      setSize((prev) =>
        Math.abs(prev.width - w) < 8 && Math.abs(prev.height - h) < 8 ? prev : { width: w, height: h }
      );
    };

    const schedule = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(apply, delayMs);
    };

    apply();
    const ro = new ResizeObserver(schedule);
    ro.observe(el);
    return () => {
      clearTimeout(timeoutId);
      ro.disconnect();
    };
  }, [shellRef, delayMs]);

  return size;
}

function fitPageWidthForSpread(
  bookWidth: number,
  bookHeight: number,
  pageAspect: number,
  paddingPx: number
): number {
  const innerW = Math.max(0, bookWidth - paddingPx);
  const innerH = Math.max(0, bookHeight - paddingPx);
  const halfW = innerW / 2;
  const byWidth = halfW;
  const byHeight = innerH / pageAspect;
  return Math.max(120, Math.floor(Math.min(byWidth, byHeight)));
}

function fitPageWidthSingle(
  bookWidth: number,
  bookHeight: number,
  pageAspect: number,
  paddingPx: number
): number {
  const innerW = Math.max(0, bookWidth - paddingPx);
  const innerH = Math.max(0, bookHeight - paddingPx);
  const byWidth = innerW;
  const byHeight = innerH / pageAspect;
  return Math.max(120, Math.floor(Math.min(byWidth, byHeight)));
}

type BookSpreadLayout =
  | { kind: "single"; page: number }
  | { kind: "pair"; left: number; right: number };

function buildBookSpreads(numPages: number): BookSpreadLayout[] {
  if (numPages <= 0) return [];
  if (numPages === 1) return [{ kind: "single", page: 1 }];

  const out: BookSpreadLayout[] = [{ kind: "single", page: 1 }];
  let p = 2;
  while (p <= numPages - 1) {
    if (p + 1 <= numPages - 1) {
      out.push({ kind: "pair", left: p, right: p + 1 });
      p += 2;
    } else {
      out.push({ kind: "single", page: p });
      p += 1;
    }
  }
  out.push({ kind: "single", page: numPages });
  return out;
}

export default function CvoBrandBook() {
  const bookShellRef = useRef<HTMLDivElement>(null);
  const bookViewport = useDebouncedBookViewport(bookShellRef, 150);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [spread, setSpread] = useState(0);
  const [docAspect, setDocAspect] = useState<number | null>(null);
  const [spreadAspect, setSpreadAspect] = useState<number | null>(null);
  const [bookHover, setBookHover] = useState(false);
  const [loupePos, setLoupePos] = useState<{ x: number; y: number } | null>(null);
  const [loupeHasImage, setLoupeHasImage] = useState(false);

  const singleCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const leftCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const rightCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const loupeCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const loupeRafRef = useRef<number | null>(null);
  const pendingLoupeRef = useRef<{ x: number; y: number } | null>(null);

  const layoutRef = useRef<BookSpreadLayout | null>(null);

  const spreads = useMemo(
    () => (numPages !== null && numPages > 0 ? buildBookSpreads(numPages) : []),
    [numPages]
  );
  const spreadCount = spreads.length;
  const layout = spreads[spread] ?? null;
  layoutRef.current = layout;

  const effectiveAspect = spreadAspect ?? docAspect ?? FALLBACK_PAGE_ASPECT;
  const pageWidth = useMemo(() => {
    const { width: w, height: h } = bookViewport;
    if (!layout) {
      return fitPageWidthForSpread(w, h, effectiveAspect, 12);
    }
    if (layout.kind === "pair") {
      return fitPageWidthForSpread(w, h, effectiveAspect, 12);
    }
    return fitPageWidthSingle(w, h, effectiveAspect, 12);
  }, [bookViewport, effectiveAspect, layout]);

  useEffect(() => {
    setSpreadAspect(null);
  }, [spread]);

  const goPrev = useCallback(() => setSpread((s) => Math.max(0, s - 1)), []);
  const goNext = useCallback(() => {
    setSpread((s) => Math.max(0, Math.min(spreadCount - 1, s + 1)));
  }, [spreadCount]);

  useEffect(() => {
    if (spreadCount <= 0) return;
    setSpread((s) => Math.min(s, spreadCount - 1));
  }, [spreadCount]);

  useEffect(() => {
    const shouldIgnoreKeyTarget = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      const tag = target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
      if (target.isContentEditable) return true;
      if (target.closest('[role="textbox"]')) return true;
      return false;
    };

    const onKey = (e: KeyboardEvent) => {
      if (shouldIgnoreKeyTarget(e.target)) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const onDocumentLoadSuccess = useCallback(async (pdf: LoadedPdf) => {
    setNumPages(pdf.numPages);
    setLoadError(null);
    setSpread(0);
    setDocAspect(null);
    try {
      const p = await pdf.getPage(1);
      const v = p.getViewport({ scale: 1 });
      setDocAspect(v.height / v.width);
    } catch {
      setDocAspect(null);
    }
  }, []);

  const onDocumentLoadError = useCallback((err: Error) => {
    setLoadError(err.message || "Failed to load PDF");
    setNumPages(null);
    setDocAspect(null);
  }, []);

  const handlePageLoadSuccess = useCallback(
    (page: { originalWidth: number; originalHeight: number }) => {
      if (page.originalWidth <= 0) return;
      const a = page.originalHeight / page.originalWidth;
      setSpreadAspect((prev) => (prev == null ? a : Math.max(prev, a)));
    },
    []
  );

  /** Render PDF canvases at higher DPR so the loupe samples sharp pixels. */
  const pdfCanvasDpr = Math.max(
    typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
    LOUPE_ZOOM + 0.5
  );

  const pageCommon = useMemo(
    () => ({
      width: pageWidth,
      devicePixelRatio: pdfCanvasDpr,
      className: "!bg-white max-w-full" as const,
      canvasBackground: "white" as const,
      renderTextLayer: false as const,
      renderAnnotationLayer: false as const,
      onLoadSuccess: handlePageLoadSuccess,
      loading: (
        <div
          className="bg-white mx-auto"
          style={{
            width: pageWidth,
            height: Math.round(pageWidth * effectiveAspect),
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          aria-hidden
        />
      ),
    }),
    [pageWidth, pdfCanvasDpr, effectiveAspect, handlePageLoadSuccess]
  );

  const spreadTransition = {
    duration: 0.65,
    ease: [0.4, 0, 0.2, 1] as const,
  };

  const showBookChrome = numPages !== null && !loadError && spreadCount > 0;
  const showLoupeChrome = bookHover && showBookChrome && loupePos !== null;

  const clearLoupeCanvas = useCallback(() => {
    const c = loupeCanvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, c.width, c.height);
    setLoupeHasImage(false);
  }, []);

  const drawPdfLoupe = useCallback(
    (clientX: number, clientY: number) => {
      const shell = bookShellRef.current;
      const loupeCanvas = loupeCanvasRef.current;
      if (!shell || !loupeCanvas) {
        setLoupeHasImage(false);
        return;
      }

      const shellRect = shell.getBoundingClientRect();
      const edge = edgeExclusionPx(shellRect.width);
      if (
        clientX < shellRect.left + edge ||
        clientX > shellRect.right - edge ||
        clientY < shellRect.top ||
        clientY > shellRect.bottom
      ) {
        clearLoupeCanvas();
        return;
      }

      const lay = layoutRef.current;
      let source: HTMLCanvasElement | null = null;
      let rect: DOMRect | null = null;

      if (lay?.kind === "single") {
        source = singleCanvasRef.current;
        if (source) rect = source.getBoundingClientRect();
      } else if (lay?.kind === "pair") {
        const lc = leftCanvasRef.current;
        const rc = rightCanvasRef.current;
        if (lc && rc) {
          const lr = lc.getBoundingClientRect();
          const rr = rc.getBoundingClientRect();
          const mid = lr.left + lr.width;
          if (clientX < mid) {
            source = lc;
            rect = lr;
          } else {
            source = rc;
            rect = rr;
          }
        } else if (lc) {
          source = lc;
          rect = lc.getBoundingClientRect();
        } else if (rc) {
          source = rc;
          rect = rc.getBoundingClientRect();
        }
      }

      if (!source || !rect || source.width < 2 || source.height < 2) {
        clearLoupeCanvas();
        return;
      }

      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        clearLoupeCanvas();
        return;
      }

      const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 3) : 1;
      const wPx = Math.floor(LOUPE_W * dpr);
      const hPx = Math.floor(LOUPE_H * dpr);
      if (loupeCanvas.width !== wPx || loupeCanvas.height !== hPx) {
        loupeCanvas.width = wPx;
        loupeCanvas.height = hPx;
      }
      loupeCanvas.style.width = `${LOUPE_W}px`;
      loupeCanvas.style.height = `${LOUPE_H}px`;

      const ctx = loupeCanvas.getContext("2d");
      if (!ctx) return;

      const scaleX = source.width / rect.width;
      const scaleY = source.height / rect.height;
      const dx = clientX - rect.left;
      const dy = clientY - rect.top;
      const ix = dx * scaleX;
      const iy = dy * scaleY;

      const sw = (LOUPE_W / LOUPE_ZOOM) * scaleX;
      const sh = (LOUPE_H / LOUPE_ZOOM) * scaleY;
      let sx = ix - sw / 2;
      let sy = iy - sh / 2;
      sx = Math.max(0, Math.min(sx, source.width - sw));
      sy = Math.max(0, Math.min(sy, source.height - sh));

      const r = LOUPE_RADIUS * dpr;
      ctx.clearRect(0, 0, wPx, hPx);
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(0, 0, wPx, hPx, r);
      ctx.clip();
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(source, sx, sy, sw, sh, 0, 0, wPx, hPx);
      ctx.restore();

      ctx.beginPath();
      ctx.roundRect(0.5 * dpr, 0.5 * dpr, wPx - dpr, hPx - dpr, r);
      ctx.strokeStyle = "rgba(0,0,0,0.22)";
      ctx.lineWidth = 1.5 * dpr;
      ctx.stroke();

      setLoupeHasImage(true);
    },
    [clearLoupeCanvas]
  );

  const scheduleLoupeDraw = useCallback(
    (clientX: number, clientY: number) => {
      pendingLoupeRef.current = { x: clientX, y: clientY };
      if (loupeRafRef.current != null) return;
      loupeRafRef.current = requestAnimationFrame(() => {
        loupeRafRef.current = null;
        const p = pendingLoupeRef.current;
        if (p) drawPdfLoupe(p.x, p.y);
      });
    },
    [drawPdfLoupe]
  );

  useEffect(() => {
    return () => {
      if (loupeRafRef.current != null) cancelAnimationFrame(loupeRafRef.current);
    };
  }, []);

  const onBookShellMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      setLoupePos({ x: e.clientX, y: e.clientY });
      scheduleLoupeDraw(e.clientX, e.clientY);
    },
    [scheduleLoupeDraw]
  );

  const onBookShellLeave = useCallback(() => {
    setBookHover(false);
    setLoupePos(null);
    setLoupeHasImage(false);
    pendingLoupeRef.current = null;
    clearLoupeCanvas();
    // Show the global custom cursor again
    const el = document.getElementById("invert-cursor");
    if (el) el.style.display = "";
  }, [clearLoupeCanvas]);

  return (
    <div className="w-full min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-[12px] mb-[16px]">
        <p className="text-[13px] text-black/50 uppercase tracking-wide text-center flex-1">
          Brand &amp; process book
        </p>
        <p className="text-[14px] text-black/60 tabular-nums shrink-0">
          {loadError ? (
            <span className="text-red-600">Could not load PDF</span>
          ) : numPages === null ? (
            <>Loading…</>
          ) : spreadCount < 1 ? (
            <span className="text-black/50">No pages</span>
          ) : (
            <>
              Spread {spread + 1} / {spreadCount}
            </>
          )}
        </p>
      </div>

      <div className="relative py-[8px] md:py-[12px] lg:py-[16px] px-0">
        {loadError && (
          <p className="text-[14px] text-red-600 mb-[12px]">{loadError}</p>
        )}

        <div className="w-full min-w-0">
          <div
            ref={bookShellRef}
            className={`relative w-full overflow-hidden rounded-[4px] border border-black/15 bg-white ${bookViewportClass} ${bookHover && showBookChrome ? "cursor-none" : ""}`}
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)" }}
            onMouseEnter={(e) => {
              if (!showBookChrome) return;
              setBookHover(true);
              setLoupePos({ x: e.clientX, y: e.clientY });
              scheduleLoupeDraw(e.clientX, e.clientY);
              // Hide the global custom cursor
              const el = document.getElementById("invert-cursor");
              if (el) el.style.display = "none";
            }}
            onMouseLeave={onBookShellLeave}
            onMouseMove={showBookChrome ? onBookShellMouseMove : undefined}
          >
            <Document
              file={PDF_URL}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="absolute inset-0 flex items-center justify-center text-[14px] text-black/50 p-[24px] text-center">
                  Loading PDF…
                </div>
              }
              className="absolute inset-0 flex h-full min-h-0 w-full flex-col"
            >
              <div className="relative mx-auto flex h-full min-h-0 w-full max-w-none flex-1">
                <div className="absolute inset-0 min-h-0">
                  <AnimatePresence initial={false} mode="sync">
                    <motion.div
                      key={spread}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={spreadTransition}
                      className="absolute inset-0 flex min-h-0 flex-col bg-white md:flex-row"
                    >
                      {numPages === null && !loadError ? (
                        <div className="flex h-full w-full items-center justify-center text-[14px] text-black/40">
                          …
                        </div>
                      ) : layout?.kind === "single" ? (
                        <div className="flex h-full min-h-0 w-full items-center justify-center overflow-hidden bg-white p-8">
                          <div className="relative inline-block" style={{ boxShadow: "0 6px 28px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)" }}>
                            <Page
                              pageNumber={layout.page}
                              {...pageCommon}
                              canvasRef={singleCanvasRef}
                            />
                            {/* Edge lighting overlay — scoped to the page only */}
                            <div
                              className="pointer-events-none absolute inset-0 z-10"
                              style={{
                                background: spread === 0
                                  ? "linear-gradient(to left, rgba(255,255,255,0.12) 0%, transparent 8%, transparent 88%, rgba(0,0,0,0.07) 100%)"
                                  : "linear-gradient(to right, rgba(255,255,255,0.12) 0%, transparent 8%, transparent 88%, rgba(0,0,0,0.07) 100%)",
                              }}
                              aria-hidden
                            />
                          </div>
                        </div>
                      ) : layout?.kind === "pair" ? (
                        <>
                          <div className="relative z-0 flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden bg-white p-1">
                            <Page
                              pageNumber={layout.left}
                              {...pageCommon}
                              canvasRef={leftCanvasRef}
                            />
                            {/* Left page: subtle highlight on left edge, darken toward spine */}
                            <div
                              className="pointer-events-none absolute inset-0 z-[1]"
                              style={{
                                background:
                                  "linear-gradient(to right, rgba(255,255,255,0.08) 0%, transparent 10%, transparent 85%, rgba(0,0,0,0.04) 100%)",
                              }}
                              aria-hidden
                            />
                          </div>
                          <div className="relative z-0 flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden bg-white p-1">
                            <Page
                              pageNumber={layout.right}
                              {...pageCommon}
                              canvasRef={rightCanvasRef}
                            />
                            {/* Right page: darken near spine, highlight on right edge */}
                            <div
                              className="pointer-events-none absolute inset-0 z-[1]"
                              style={{
                                background:
                                  "linear-gradient(to left, rgba(255,255,255,0.08) 0%, transparent 10%, transparent 85%, rgba(0,0,0,0.04) 100%)",
                              }}
                              aria-hidden
                            />
                          </div>
                          {/* Center spine shadow */}
                          <div
                            className="pointer-events-none absolute inset-y-0 left-1/2 z-10 -translate-x-1/2"
                            style={{
                              width: 40,
                              background: "linear-gradient(to right, transparent, rgba(0,0,0,0.06) 35%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.06) 65%, transparent)",
                            }}
                            aria-hidden
                          />
                        </>
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-[14px] text-black/40">
                          …
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Document>

            {showBookChrome ? (
              <>
                {/* Left half click area — full height, left 50% */}
                <button
                  type="button"
                  tabIndex={-1}
                  aria-label="Previous spread"
                  title="Previous"
                  disabled={spread === 0}
                  onClick={(e) => {
                    e.preventDefault();
                    if (spread > 0) goPrev();
                  }}
                  className="absolute inset-y-0 left-0 z-30 flex w-1/2 items-center justify-start pl-[6px] border-0 bg-transparent p-0 disabled:pointer-events-none [&_svg]:opacity-[0.42] hover:[&_svg]:opacity-100"
                >
                  {spread > 0 ? (
                    <CaretLeft
                      weight="bold"
                      className="pointer-events-none text-black drop-shadow-[0_0_1px_rgba(255,255,255,0.95)] transition-opacity duration-150"
                      size={26}
                      aria-hidden
                    />
                  ) : null}
                </button>
                {/* Right half click area — full height, right 50% */}
                <button
                  type="button"
                  tabIndex={-1}
                  aria-label="Next spread"
                  title="Next"
                  disabled={spread >= spreadCount - 1}
                  onClick={(e) => {
                    e.preventDefault();
                    if (spread < spreadCount - 1) goNext();
                  }}
                  className="absolute inset-y-0 right-0 z-30 flex w-1/2 items-center justify-end pr-[6px] border-0 bg-transparent p-0 disabled:pointer-events-none [&_svg]:opacity-[0.42] hover:[&_svg]:opacity-100"
                >
                  {spread < spreadCount - 1 ? (
                    <CaretRight
                      weight="bold"
                      className="pointer-events-none text-black drop-shadow-[0_0_1px_rgba(255,255,255,0.95)] transition-opacity duration-150"
                      size={26}
                      aria-hidden
                    />
                  ) : null}
                </button>
              </>
            ) : null}
          </div>

          {showLoupeChrome ? (
            <div
              className={`pointer-events-none fixed z-[90] rounded-[${LOUPE_RADIUS}px] bg-neutral-100 shadow-xl transition-opacity duration-100 ${
                loupeHasImage ? "opacity-100" : "opacity-0"
              }`}
              style={{
                left: (loupePos?.x ?? 0) - LOUPE_W / 2,
                top: (loupePos?.y ?? 0) - LOUPE_H / 2,
                width: LOUPE_W,
                height: LOUPE_H,
                borderRadius: LOUPE_RADIUS,
              }}
              aria-hidden
            >
              <canvas ref={loupeCanvasRef} className="block" style={{ borderRadius: LOUPE_RADIUS }} />
            </div>
          ) : null}
        </div>

        <div className="mt-[20px] w-full flex justify-center">
          <div className="flex items-center justify-center gap-[16px]">
            <button
              type="button"
              onClick={goPrev}
              disabled={spread === 0 || numPages === null}
              className="w-[152px] sm:w-[168px] h-[44px] shrink-0 inline-flex items-center justify-center rounded-[8px] text-[14px] font-medium bg-black text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/85 transition-colors"
            >
              ← Previous
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={numPages === null || spread >= spreadCount - 1}
              className="w-[152px] sm:w-[168px] h-[44px] shrink-0 inline-flex items-center justify-center rounded-[8px] text-[14px] font-medium bg-black text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/85 transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
