import { serve } from "bun";
import { statSync, readFileSync, existsSync } from "fs";
import { join, extname } from "path";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
};

const server = Bun.serve({
  port: 8080,
  fetch(req) {
    const url = new URL(req.url);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === "/") pathname = "/index.html";

    let filePath = join(process.cwd(), pathname);
    if (!existsSync(filePath) && existsSync(filePath + ".html")) {
      filePath = filePath + ".html";
    }

    if (existsSync(filePath) && !statSync(filePath).isDirectory()) {
      const ext = extname(filePath).toLowerCase();
      const contentType = MIME[ext] || "application/octet-stream";
      return new Response(readFileSync(filePath), {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "no-cache",
        },
      });
    }

    // Fallback to index.html for root or 404
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Pure HTML website running at http://localhost:${server.port}/`);
