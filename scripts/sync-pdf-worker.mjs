/**
 * Copy pdf.worker.min.mjs from the resolved pdfjs-dist version into /public
 * so it always matches the library (important when using npm overrides).
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
/** Resolve from project root so nested `react-pdf/node_modules/pdfjs-dist` is found. */
const requireFromRoot = createRequire(join(root, "package.json"));

let pdfPkgRoot;
try {
  pdfPkgRoot = dirname(
    requireFromRoot.resolve("pdfjs-dist/package.json", {
      paths: [
        join(root, "node_modules/react-pdf/node_modules"),
        join(root, "node_modules"),
      ],
    })
  );
} catch {
  console.warn("sync-pdf-worker: pdfjs-dist not installed, skip");
  process.exit(0);
}

const src = join(pdfPkgRoot, "build", "pdf.worker.min.mjs");
const dest = join(root, "public", "pdf.worker.min.mjs");

if (!existsSync(src)) {
  console.warn("sync-pdf-worker: worker not found at", src);
  process.exit(0);
}

mkdirSync(join(root, "public"), { recursive: true });
copyFileSync(src, dest);
const version = JSON.parse(readFileSync(join(pdfPkgRoot, "package.json"), "utf8")).version;
console.log("sync-pdf-worker: public/pdf.worker.min.mjs <- pdfjs-dist@" + version);
