import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

/**
 * `pdfjs-dist/build/pdf.mjs` ships a nested `var __webpack_exports__` bundle.
 * Next dev (webpack + eval-source-maps) wraps modules in eval(); that name then
 * shadows webpack's own `__webpack_exports__` and throws:
 * `Object.defineProperty called on non-object` (see mozilla/pdf.js#20478).
 * The minified entry does not contain that pattern, so alias the package root import.
 */
function resolvePdfjsMinEntry() {
  try {
    const pkgJson = require.resolve("pdfjs-dist/package.json", {
      paths: [
        path.join(__dirname, "node_modules/react-pdf/node_modules"),
        path.join(__dirname, "node_modules"),
      ],
    });
    return path.join(path.dirname(pkgJson), "build", "pdf.min.mjs");
  } catch {
    return null;
  }
}

const pdfjsMinEntry = resolvePdfjsMinEntry();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Parent folder may have its own package-lock.json; without this, Next can trace
  // the wrong workspace root and production/deploy bundles may break (500 / missing files).
  outputFileTracingRoot: path.join(__dirname),

  // Smaller, more stable client chunks (helps avoid "__webpack_modules__[id] is not a function"
  // after HMR / stale cache when using barrel packages).
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "framer-motion"],
  },

  webpack: (config) => {
    if (pdfjsMinEntry) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "pdfjs-dist$": pdfjsMinEntry,
      };
    }
    return config;
  },
};

export default nextConfig;
