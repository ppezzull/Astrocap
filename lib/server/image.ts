import fs from "fs";
import path from "path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), ".next", "static", "optimized");

export async function ensureOptimized(src: string, width = 520, fmt = "webp") {
  // sanitize input
  const cleanSrc = src.replace(/^\/+/, "").replace(/\.\./g, "");
  const publicPath = path.join(process.cwd(), "public", cleanSrc);
  if (!fs.existsSync(publicPath)) throw new Error("source image not found: " + publicPath);

  // ensure output dir
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const baseName = path.basename(cleanSrc, path.extname(cleanSrc));
  const outName = `${baseName}-${width}.${fmt}`;
  const outPath = path.join(outDir, outName);

  if (!fs.existsSync(outPath)) {
    const transformer = sharp(publicPath).resize({ width, withoutEnlargement: true });
    if (fmt === "avif") {
      await transformer.avif({ quality: 80 }).toFile(outPath);
    } else if (fmt === "png") {
      await transformer.png({ quality: 90 }).toFile(outPath);
    } else {
      await transformer.webp({ quality: 80 }).toFile(outPath);
    }
  }

  // Publicly served from /_next/static/optimized
  return `/_next/static/optimized/${outName}`;
}
