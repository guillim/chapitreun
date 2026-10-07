#!/usr/bin/env python3
"""Écrit les gabarits HTML de la série 3 (7 octobre 2026), inspirée des posts
les plus aimés des pages Instagram concurrentes : une question qui fait
répondre (Artifact Uprising), une phrase vraie de parent qui défile (Once
Upon, Chatbooks), l'année en chiffres (Cheerz). Même design que la pub C.
Lancer : python3 build.py && node render.cjs"""
from pathlib import Path

HERE = Path(__file__).parent
MARK = ('<div class="mark"><svg viewBox="0 0 24 24" aria-hidden="true">'
        '<path d="M4 5.2c2.9-1.1 5.3-1.1 7.7.4v13c-2.4-1.5-4.8-1.5-7.7-.4V5.2Z"/>'
        '<path d="M20 5.2c-2.9-1.1-5.3-1.1-7.7.4v13c2.4-1.5 4.8-1.5 7.7-.4V5.2Z"/></svg>'
        '<span>Chapitre&nbsp;un</span></div>')
NOTE = '<span class="note">App iPhone en préparation · <strong>remboursable</strong></span>'
HEAD = '<!doctype html><html lang="fr"><head><meta charset="utf-8"><link rel="stylesheet" href="style.css"></head>'

# ── Post 1080 × 1350 : la question ─────────────────────────────
html = f'''{HEAD}
<body><div class="slide">
<div class="photo" style="height:760px"><img src="src-telephone.jpg" style="object-position:50% 42%" alt=""></div>
<span class="pill" style="top:64px">Précommande · 49 €</span>
<img class="card" src="livre-carte.png" style="left:760px;top:560px;width:330px" alt="">
<h1 class="h" style="top:812px">Combien de photos de lui<br><em>dans votre iPhone ?</em></h1>
<p style="position:absolute;left:80px;right:80px;top:1030px;font-size:34px;line-height:1.35;color:var(--muted)">Dites-le en commentaire. Nous, on en garde <strong style="color:var(--ink);font-weight:600">214&nbsp;sur&nbsp;4&nbsp;000</strong> dans le livre de sa première année, un chapitre par mois.</p>
<div class="foot" style="bottom:56px">{MARK}{NOTE}</div>
</div></body></html>
'''
(HERE / '08-question-telephone.html').write_text(html)

# ── Reels 1080 × 1920 ───────────────────────────────────────────
def reel(name, photo, pos, size, lines, dur, cover, photo_h=1000, top=1050):
    """lines : (balise, texte, t0, t1 ou None). Les lignes avec t1 sont
    remplacées par la suivante (même emplacement) ; sans t1, elles restent."""
    spans, last_end = [], None
    for tag, text, t0, t1 in lines:
        extra = f' data-t1="{t1}"' if t1 is not None else ''
        pos_css = 'position:absolute;left:0;right:0;top:0' if t1 is not None or tag == 'swap-last' else ''
        tag = 'em' if tag.startswith('em') else 'span'
        spans.append(f'<{tag} class="l" style="{pos_css}" data-t0="{t0}" data-dur="0.55"{extra}>{text}</{tag}>')
        last_end = t0
    t_card = last_end + 0.6
    html = f'''{HEAD}
<body data-dur="{dur}" data-cover="{cover}"><div class="reel">
<style>.l{{display:block}} .h{{position:absolute}}</style>
<div class="photo" style="height:{photo_h}px"><img src="{photo}" data-zoom="{dur}" style="object-position:50% {pos};transform-origin:50% 35%" alt=""></div>
<span class="pill" style="top:300px" data-t0="0.3" data-dur="0.5">Précommande · 49 €</span>
<img class="card" src="livre-carte.png" style="left:760px;top:{photo_h - 200}px;width:330px" data-t0="{t_card:.1f}" data-dur="0.7" data-anim="right" alt="">
<h1 class="h" style="top:{top}px;font-size:{size}px">{''.join(spans)}</h1>
<div class="foot" style="top:1430px" data-t0="{t_card + 0.6:.1f}" data-dur="0.6" data-anim="fade">{MARK}{NOTE}</div>
</div><script src="anim.js"></script></body></html>
'''
    (HERE / f'{name}.html').write_text(html)

# r3 : les phrases se remplacent, la dernière reste (Once Upon : « you think you'll remember it all »)
reel('r3-souvenir-herbe', 'src-herbe.jpg', '20%', 80, [
    ('swap', 'Vous pensez que vous vous souviendrez de tout.', 0.5, 2.8),
    ('swap', 'Son premier rire.<br>Le jour où il a tenu assis.', 2.9, 5.2),
    ('em-swap', 'Dans un an,<br>ça se mélange.', 5.3, 7.3),
    ('em-last', 'Le livre, lui,<br>se souvient.<br>Un chapitre par mois.', 7.4, None),
], dur=11, cover=8.6)

# r4 : l'année en chiffres, les lignes s'empilent (Cheerz : « 42 glaces, 193 ploufs… »)
reel('r4-chiffres-sieste', 'src-sieste.jpg', '55%', 86, [
    ('span', '4 000 photos.', 0.9, None),
    ('span', '365 nuits, courtes.', 1.6, None),
    ('span', '1 première dent.', 2.3, None),
    ('em', '12 chapitres. 1 livre.', 3.0, None),
], dur=7.5, cover=4.4)
print('ok')
