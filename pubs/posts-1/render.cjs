// Rend chaque fichier HTML de ce dossier en JPG 1080 × 1350 dans
// landing-page/assets/social/posts/. Usage : node render.cjs
// (Playwright installé globalement dans l'environnement Claude Code ; sinon : npm i playwright)
const { readdirSync } = require('node:fs');
const { join } = require('node:path');
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }

const out = join(__dirname, '..', '..', 'landing-page', 'assets', 'social', 'posts');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  for (const f of readdirSync(__dirname).filter(f => f.endsWith('.html')).sort()) {
    await page.goto('file://' + join(__dirname, f));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(150);
    const name = f.replace(/\.html$/, '.jpg');
    await page.screenshot({ path: join(out, name), type: 'jpeg', quality: 88 });
    console.log('→', name);
  }
  await browser.close();
})();
