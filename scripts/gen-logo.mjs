// 把原始 logo.png 缩放/优化，生成网页所需的多种尺寸资源。
// 用法：npm run gen-logo
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { mkdirSync } from 'node:fs';

const BLOG_ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const SRC = path.resolve(BLOG_ROOT, '..', 'logo.png'); // 原始 logo 在博客目录的上一级

const ASSETS = path.resolve(BLOG_ROOT, 'src', 'assets');
const PUBLIC = path.resolve(BLOG_ROOT, 'public');
mkdirSync(ASSETS, { recursive: true });
mkdirSync(PUBLIC, { recursive: true });

const logo = sharp(SRC).rotate(); // 自动矫正 EXIF 方向

// 1) 页头 logo：最长边 512px，透明 PNG
await logo
  .clone()
  .resize(512, 512, { fit: 'inside', withoutEnlargement: true })
  .png({ palette: true, quality: 90 })
  .toFile(path.join(ASSETS, 'logo.png'));

// 2) favicon 48px（兼顾 32/16 场景）
await logo
  .clone()
  .resize(48, 48, { fit: 'contain' })
  .png()
  .toFile(path.join(PUBLIC, 'favicon.png'));

// 3) apple-touch-icon 180px
await logo
  .clone()
  .resize(180, 180, { fit: 'contain' })
  .png()
  .toFile(path.join(PUBLIC, 'apple-touch-icon.png'));

// 4) 分享用 OG 图：1200x630 深色底 + 居中 logo
const ogLogo = await logo
  .clone()
  .resize(undefined, 420, { fit: 'inside' })
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 11, g: 11, b: 14, alpha: 1 },
  },
})
  .composite([{ input: ogLogo, gravity: 'center' }])
  .png()
  .toFile(path.join(PUBLIC, 'og.png'));

console.log('✅ logo 资源已生成：');
console.log('  - src/assets/logo.png (512px 页头)');
console.log('  - public/favicon.png (48px)');
console.log('  - public/apple-touch-icon.png (180px)');
console.log('  - public/og.png (1200x630 分享图)');
