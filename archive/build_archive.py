"""Build a single self-contained archive of the Chapitre un landing page.

Usage: python3 build_archive.py <landing-page dir> <output html>
- inlines styles.css, fonts and photos (base64 data URIs)
- drops analytics (GA4, Meta pixel), Formspree, Stripe, A/B test
- legal pages, e-mail links and the booking form open a "not available" popup
"""
import base64, re, sys
from pathlib import Path

src, out = Path(sys.argv[1]), Path(sys.argv[2])
html = (src / "index.html").read_text()
css = (src / "styles.css").read_text()
js = (src / "script.js").read_text()

MIME = {".webp": "image/webp", ".jpg": "image/jpeg", ".woff2": "font/woff2"}
def data_uri(rel):
    p = src / rel
    return f"data:{MIME[p.suffix]};base64," + base64.b64encode(p.read_bytes()).decode()

def sub(text, old, new, count=1):
    n = text.count(old)
    assert n == count, f"expected {count} x {old[:60]!r}, found {n}"
    return text.replace(old, new)

# ── head: no analytics, no tracking, no canonical/preloads to the old domain ──
html = sub(html, '<script src="analytics.js?v=8" defer></script>\n', '')
html = re.sub(r'<meta name="facebook-domain-verification"[^>]*>\n', '', html)
html = re.sub(r'<meta (property|name)="(og|twitter):[^>]*>\n', '', html)
html = re.sub(r'<link rel="(canonical|preload)"[^>]*>\n', '', html)
html = sub(html, '<title>Chapitre un — ', '<title>Chapitre un (archive) — ')
html = sub(html, '<link rel="stylesheet" href="styles.css?v=5">', '<style>\n__CSS__\n</style>')
html = sub(html, '<script src="script.js?v=8" defer></script>', '<script>\n__JS__\n</script>')

# ── responsive variants: keep only the full-size image (one copy inlined) ──
html = re.sub(r'\s+srcset="[^"]*"\s+sizes="[^"]*"', '', html)
html = re.sub(r' sizes="[^"]*"', '', html)

# ── links to services / secondary pages → popup ──
for page in ("mentions-legales.html", "cgv-prevente.html", "confidentialite.html"):
    html = sub(html, f'href="{page}"', 'href="#" data-unavailable')
html = sub(html, 'href="mailto:bonjour@chapitreun.com"', 'href="#" data-unavailable', count=2)
html = sub(html, '>bonjour@chapitreun.com</a>', '>nous écrire</a>')
html = html.replace(' data-track="preorder_submit"', '').replace(' data-track="waitlist_submit"', '')
html = re.sub(r' data-track="[^"]*"', '', html)

# ── the popup itself ──
POPUP = '''
<dialog class="na" id="unavailable" aria-labelledby="na-t">
  <form method="dialog">
    <p class="eyebrow eyebrow--c">Chapitre un</p>
    <h2 class="na__t" id="na-t">Pas disponible pour le moment.</h2>
    <p class="na__p">Ce service n'est plus accessible. Pour toute question, contactez-nous.</p>
    <p class="na__en" lang="en">Not available for now, please contact us.</p>
    <a class="btn btn--primary" href="https://guillim.github.io/">Nous contacter</a>
    <button class="btn btn--link" value="close">Fermer</button>
  </form>
</dialog>
'''
html = sub(html, '\n<script>\n__JS__', POPUP + '\n<script>\n__JS__')

css += '''
/* ── archive : fenêtre « pas disponible » ── */
.na{ border:none; border-radius:18px; padding:32px 28px 22px; max-width:min(420px, calc(100vw - 32px));
  background:var(--paper); color:var(--ink); box-shadow:0 24px 60px rgba(43,36,32,.28); text-align:center; }
.na::backdrop{ background:rgba(43,36,32,.45); backdrop-filter:blur(3px); }
.na__t{ font-family:var(--serif); font-weight:400; font-size:1.6rem; line-height:1.15; margin:10px 0 12px; }
.na__p{ margin:0 0 6px; color:var(--ink-2); }
.na__en{ margin:0 0 22px; color:var(--ink-2); font-size:.88rem; font-style:italic; }
.na .btn{ display:flex; width:100%; justify-content:center; }
.na .btn--link{ margin-top:6px; }
'''

# ── JS: strip tracking, A/B test, network calls; forms open the popup ──
def cut(text, start, end):
    i = text.index(start); j = text.index(end, i)
    return text[:i] + text[j:]

js = sub(js, '''    ENDPOINT: 'https://formspree.io/f/xaenawvb', // POST JSON de l'inscription
    STRIPE_CHECKOUT_URL: 'https://buy.stripe.com/eVqfZi5So9Nx8yrd3F77O03', // lien Stripe Checkout des 49 € (live, branché le 2 octobre 2026)
    HEADLINE_B: 'Le livre de sa première année<br><em>en 5 minutes.</em>',
''', '')
js = sub(js, '''  const track = (event, props = {}) => {
    const payload = { event, variant: state.variant, ...props };
    (window.dataLayer = window.dataLayer || []).push(payload);
    dispatchEvent(new CustomEvent('track', { detail: payload }));
    if (params.has('debug')) console.log('[track]', payload);
  };''', '''  const track = () => {};          // archive : aucun suivi

  /* ── Archive : services coupés → fenêtre « pas disponible » ── */
  const dlg = document.getElementById('unavailable');
  const unavailable = e => {
    if (e) e.preventDefault();
    if (dlg && dlg.showModal) dlg.showModal();
    else alert("Pas disponible pour le moment, contactez-nous.\\nNot available for now, please contact us.");
  };
  $$('[data-unavailable]').forEach(a => a.addEventListener('click', unavailable));
  if (dlg) dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });''')
js = cut(js, '  /* ── Test A/B du titre', '  track(\'page_view\'')
js = cut(js, "  track('page_view'", '  /* ── Apparitions au défilement')
js = cut(js, '  /* ── Suivi du défilement par section', '  /* ── Compteur « 4 000 photos »')
js = cut(js, '  /* ── Clics suivis', '  /* ── Tarif fondateur')
# compteur fondateur figé au jour de l'arrêt du test (11 octobre 2026)
js = sub(js, "const days  = Math.floor((Date.now() - start) / 86400000);",
             "const days  = Math.floor((Date.UTC(2026, 9, 11) - start) / 86400000); // figé à l'arrêt du test")
# formulaire : plus d'envoi, plus de Stripe → fenêtre
i = js.index('    // un seul envoi à la fois')
j = js.index("    form.addEventListener('submit'")
js = js[:i] + js[j:]
js = sub(js, "    form.addEventListener('submit', e => { e.preventDefault(); submit('preorder'); });\n"
             "    wl.addEventListener('click', () => submit('waitlist'));",
             "    form.addEventListener('submit', unavailable);\n"
             "    wl.addEventListener('click', unavailable);")
# finish() and validate() are no longer used: drop them
js = cut(js, '    const setErr = ', '    form.addEventListener')
for leftover in ("formspree", "stripe", "STRIPE", "ENDPOINT", "__cuFlush", "dataLayer"):
    assert leftover not in js, leftover

# ── inline every asset ──
css = re.sub(r'url\("(assets/[^"]+)"\)', lambda m: f'url("{data_uri(m.group(1))}")', css)
html = re.sub(r'(src|srcset)="(assets/[^"]+)"', lambda m: f'{m.group(1)}="{data_uri(m.group(2))}"', html)

html = html.replace('__CSS__', css).replace('__JS__', js)
assert 'assets/' not in html.replace('data:', ''), re.findall(r'.{40}assets/.{40}', html)[:3]
assert 'chapitreun.com' not in html, re.findall(r'.{40}chapitreun\.com.{40}', html)[:3]
out.write_text(html)
print(f"{out}: {out.stat().st_size/1e6:.2f} MB")
