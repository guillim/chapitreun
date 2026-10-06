#!/usr/bin/env python3
"""Écrit les gabarits HTML de la série 2 « La date » (4 posts 4:5, 2 reels 9:16)
sur le design de la pub C. Lancer : python3 build.py && node render.cjs"""
from pathlib import Path

HERE = Path(__file__).parent
MARK = ('<div class="mark"><svg viewBox="0 0 24 24" aria-hidden="true">'
        '<path d="M4 5.2c2.9-1.1 5.3-1.1 7.7.4v13c-2.4-1.5-4.8-1.5-7.7-.4V5.2Z"/>'
        '<path d="M20 5.2c-2.9-1.1-5.3-1.1-7.7.4v13c2.4-1.5 4.8-1.5 7.7-.4V5.2Z"/></svg>'
        '<span>Chapitre&nbsp;un</span></div>')
NOTE = '<span class="note">App iPhone en préparation · <strong>remboursable</strong></span>'
HEAD = '<!doctype html><html lang="fr"><head><meta charset="utf-8"><link rel="stylesheet" href="style.css"></head>'

# ── Posts 1080 × 1350 ───────────────────────────────────────────
POSTS = {
    # nom : (photo, position verticale du cadrage, titre)
    '04-date-bleu':   ('src-bleu.jpg',   '16%', 'Ses 1 an arrivent.<br><em>Son livre sera prêt<br>3 semaines avant.</em>'),
    '05-date-gateau': ('src-gateau.jpg', '45%', 'Le jour de ses 1 an,<br><em>le livre est déjà<br>sur la table.</em>'),
    '06-date-chaise': ('src-chaise.jpg', '27%', 'Douze mois,<br>douze chapitres.<br><em>Prêt avant la bougie.</em>'),
    '07-date-pois':   ('src-pois.jpg',   '25%', 'Rien à trier.<br><em>Son livre arrive<br>avant ses 1 an.</em>'),
}
for name, (photo, pos, title) in POSTS.items():
    html = f'''{HEAD}
<body><div class="slide">
<div class="photo" style="height:800px"><img src="{photo}" style="object-position:50% {pos}" alt=""></div>
<span class="pill" style="top:64px">Précommande · 49 €</span>
<img class="card" src="livre-carte.png" style="left:760px;top:600px;width:330px" alt="">
<h1 class="h" style="top:852px">{title}</h1>
<div class="foot" style="bottom:56px">{MARK}{NOTE}</div>
</div></body></html>
'''
    (HERE / f'{name}.html').write_text(html)

# ── Reels 1080 × 1920, 7 s ──────────────────────────────────────
REELS = {
    'r1-date-tulle': ('src-tulle.jpg', '14%', 86, [
        ('span', 'Ses 1 an arrivent.'), ('em', 'Son livre sera prêt'), ('em', '3 semaines avant.')]),
    'r2-date-lit': ('src-lit.jpg', '30%', 80, [
        ('span', 'Son prénom. Sa date.'), ('span', 'Une photo de lui.'),
        ('em', 'Le livre sera prêt'), ('em', '3 semaines avant ses 1 an.')]),
}
for name, (photo, pos, size, lines) in REELS.items():
    t0 = 0.9
    spans = []
    for tag, text in lines:
        spans.append(f'<{tag} class="l" data-t0="{t0:.1f}" data-dur="0.55">{text}</{tag}>')
        t0 += 0.7
    t_card = t0 + 0.1
    html = f'''{HEAD}
<body><div class="reel">
<style>.l{{display:block}} .h em{{display:block}}</style>
<div class="photo" style="height:1000px"><img src="{photo}" data-zoom="7" style="object-position:50% {pos};transform-origin:50% 35%" alt=""></div>
<span class="pill" style="top:300px" data-t0="0.3" data-dur="0.5">Précommande · 49 €</span>
<img class="card" src="livre-carte.png" style="left:760px;top:800px;width:330px" data-t0="{t_card:.1f}" data-dur="0.7" data-anim="right" alt="">
<h1 class="h" style="top:1050px;font-size:{size}px">{''.join(spans)}</h1>
<div class="foot" style="top:{1050 + round(size * 1.04 * len(lines)) + 70}px" data-t0="{t_card + 0.6:.1f}" data-dur="0.6" data-anim="fade">{MARK}{NOTE}</div>
</div><script src="anim.js"></script></body></html>
'''
    (HERE / f'{name}.html').write_text(html)
print('ok', len(POSTS), 'posts,', len(REELS), 'reels')
