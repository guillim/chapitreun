# Instructions pour Claude

- Ce dépôt sert de base au **site personnel d'hypnothérapie du fondateur**.
  Il a d'abord hébergé Chapitre un (livre photo des 1 an, projet arrêté en
  octobre 2026, archivé sur https://guillim.github.io/baby-photobook/) ; tout
  ce qui lui était propre a été retiré, il reste dans l'historique git.
- `landing-page/` : site statique publié par GitHub Pages à chaque push sur
  `main` (`.github/workflows/pages.yml`). Voir `landing-page/README.md` :
  fichiers, branchement de Formspree, Stripe, GA4 et pixel Meta (tous vides
  pour l'instant), événements mesurés. Les textes à écrire sont entre
  `[crochets]`.
- `etude-marche.md` (non publié) : étude de marché « hypnose arrêt tabac »
  (concurrents, prix, IFHE, cadre légal et formulations à éviter,
  vocabulaire, peurs des fumeurs, SEO, brief de design). À lire avant
  d'écrire les textes de la page ; respecter le tableau « Formulations
  sûres / à éviter ».
- `PLAYBOOK.md` : étapes, règle de décision, pièges rencontrés (Meta, GA4,
  Stripe, performance) et façon de travailler avec le fondateur. À lire avant
  de brancher la mesure, le paiement ou de lancer des pubs ; y ajouter les
  nouveaux pièges.
- **Pas besoin d'approbation pour merger sur `main`.** Pour ce projet, merger
  sur `main` est l'étape finale normale de toute fonctionnalité ou correction
  demandée — pousser la branche, ouvrir la PR, la merger, sans attendre de
  confirmation supplémentaire à cette étape précise. Le site se déploie au
  merge : vérifier en ligne ensuite.
