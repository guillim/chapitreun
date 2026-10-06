// Rend la série 2 : les posts (0*.html) en JPG 1080 × 1350 dans
// landing-page/assets/social/posts/, les reels (r*.html) en MP4 1080 × 1920,
// 30 i/s, 7 s, H.264 + piste audio silencieuse, dans landing-page/assets/social/reels/
// (plus une image de couverture JPG). Usage : node render.cjs [nom…]
// ffmpeg : $FFMPEG, sinon celui du paquet Python imageio-ffmpeg (libx264), sinon celui de Playwright.
const { readdirSync, mkdirSync, rmSync, existsSync } = require('node:fs');
const { join } = require('node:path');
const { execFileSync } = require('node:child_process');
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }

const SOCIAL = join(__dirname, '..', '..', 'landing-page', 'assets', 'social');
const POSTS = join(SOCIAL, 'posts'), REELS = join(SOCIAL, 'reels');
const FPS = 30, DUR = 7, COVER_AT = 4.2;
const FFMPEG = [process.env.FFMPEG,
  '/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2',
  '/opt/pw-browsers/ffmpeg-1011/ffmpeg-linux'].find(p => p && existsSync(p));
const only = process.argv.slice(2);

(async () => {
  mkdirSync(POSTS, { recursive: true }); mkdirSync(REELS, { recursive: true });
  const browser = await chromium.launch();
  const files = readdirSync(__dirname).filter(f => /^(0\d|r\d).*\.html$/.test(f)).sort()
    .filter(f => !only.length || only.some(o => f.startsWith(o)));
  for (const f of files) {
    const name = f.replace(/\.html$/, '');
    const reel = f.startsWith('r');
    const page = await browser.newPage({ viewport: { width: 1080, height: reel ? 1920 : 1350 }, deviceScaleFactor: 1 });
    await page.goto('file://' + join(__dirname, f));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(150);
    if (!reel) {
      await page.screenshot({ path: join(POSTS, name + '.jpg'), type: 'jpeg', quality: 88 });
      console.log('→', name + '.jpg');
    } else {
      const frames = join(__dirname, '.frames-' + name);
      rmSync(frames, { recursive: true, force: true }); mkdirSync(frames);
      for (let i = 0; i < FPS * DUR; i++) {
        await page.evaluate(t => window.seek(t), i / FPS);
        await page.screenshot({ path: join(frames, String(i).padStart(4, '0') + '.jpg'), type: 'jpeg', quality: 92 });
      }
      await page.evaluate(t => window.seek(t), COVER_AT);
      await page.screenshot({ path: join(REELS, name + '-cover.jpg'), type: 'jpeg', quality: 88 });
      execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', join(frames, '%04d.jpg'),
        '-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo', '-shortest',
        '-c:v', 'libx264', '-preset', 'slow', '-crf', '19', '-pix_fmt', 'yuv420p', '-r', String(FPS),
        '-c:a', 'aac', '-b:a', '64k', '-movflags', '+faststart', join(REELS, name + '.mp4')]);
      rmSync(frames, { recursive: true, force: true });
      console.log('→', name + '.mp4 (+ cover)');
    }
    await page.close();
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
