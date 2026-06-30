// public/images 配下のディレクトリごとに画像ファイル一覧を集めて
// lib/imageManifest.json に書き出すスクリプト。
// data.ts の images にディレクトリパス（例: "/images/portfolio/foo/"）を
// 書くだけで、そのフォルダ内の全画像を表示できるようにするための仕組み。
// dev / build の前に自動実行される（package.json の predev / prebuild）。

import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const publicDir = join(projectRoot, "public");
const imagesRoot = join(publicDir, "images");
const outFile = join(projectRoot, "lib", "imageManifest.json");

const IMAGE_EXT = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".svg",
  ".avif",
]);

// ファイル名を数字込みで自然順ソート（_2, _3 ... _10 が正しく並ぶ）
const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

// 画像の web パス（先頭 / 付き）に変換
function toWebPath(absPath) {
  return "/" + relative(publicDir, absPath).split(/[\\/]/).join("/");
}

const manifest = {};

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const abs = join(dir, entry);
    if (statSync(abs).isDirectory()) {
      walk(abs);
    } else if (IMAGE_EXT.has(entry.slice(entry.lastIndexOf(".")).toLowerCase())) {
      files.push(abs);
    }
  }

  if (files.length > 0) {
    files.sort((a, b) => collator.compare(a, b));
    // キーは末尾スラッシュ付きのディレクトリ web パス
    const key = toWebPath(dir) + "/";
    manifest[key] = files.map(toWebPath);
  }
}

walk(imagesRoot);

writeFileSync(outFile, JSON.stringify(manifest, null, 2) + "\n");

const dirCount = Object.keys(manifest).length;
console.log(`image manifest: ${dirCount} directories -> ${relative(projectRoot, outFile)}`);
