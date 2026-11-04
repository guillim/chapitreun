# Archive — Chapitre un

`chapitreun.html` : la landing page figée en un seul fichier autonome
(CSS, JS, polices et photos intégrés en base64, ≈ 1,8 Mo), à héberger
n'importe où, par exemple sur guillim.github.io. Aucune requête externe.

Ce qui a été coupé :

- GA4, pixel Meta, test A/B du titre, suivi des clics ;
- Formspree et Stripe : « Précommander » et « Juste être prévenu »
  ouvrent une fenêtre « Pas disponible pour le moment, contactez-nous » ;
- mentions légales, CGV, confidentialité et les liens
  `bonjour@chapitreun.com` ouvrent la même fenêtre ;
- le compteur fondateur est figé au 11 octobre 2026 (366 places sur 500).

Le bouton « Nous contacter » de la fenêtre pointe vers
https://guillim.github.io/ (à changer dans `build_archive.py`, bloc `POPUP`).

Regénérer depuis la racine du dépôt :

    python3 archive/build_archive.py landing-page archive/chapitreun.html
