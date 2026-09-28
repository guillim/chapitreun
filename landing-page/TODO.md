# À faire — Chapitre un

Ce qui reste entre vos mains, maintenant que l'inscription, le paiement test,
les pages légales, le visuel social et le nom sont branchés.

## Bloquant avant d'encaisser réellement (Stripe en mode live)

- [ ] **Google Analytics 4 — identifiant manquant.** Créer une propriété sur
      [analytics.google.com](https://analytics.google.com) pour `chapitreun.com`,
      ajouter un flux de données Web, copier l'ID de mesure (`G-XXXXXXXXXX`) et
      le coller dans `GA_MEASUREMENT_ID` en haut de `analytics.js`. Tant que ce
      n'est pas fait, le script se charge mais n'envoie aucune donnée.
- [ ] **Médiateur de la consommation.** S'inscrire auprès d'un médiateur agréé
      (ex. CM2C, Médicys) — obligatoire pour tout vendeur B2C en France dès que
      de l'argent réel est encaissé. Compléter l'Article 7 de
      `cgv-prevente.html` avec son nom, son adresse et son site.
- [ ] **Basculer Stripe en mode live.** Une fois les deux points ci-dessus
      traités, créer le lien de paiement équivalent en mode live dans Stripe et
      remplacer `STRIPE_CHECKOUT_URL` dans `script.js` (actuellement un lien
      `buy.stripe.com/test_...`).

## À vérifier, sans urgence technique

- [ ] **Adresse e-mail `bonjour@chapitreun.com`.** Confirmer qu'elle reçoit
      bien du courrier (redirection DNS chez le registrar, ou alias Google
      Workspace) — sinon les clics sur « Nous écrire » partent dans le vide.
- [ ] **Hébergeur dans les mentions légales.** `mentions-legales.html` indique
      GitHub, Inc. comme hébergeur (standard pour GitHub Pages) — à confirmer.
- [ ] **Comparaison de prix.** La page affiche « à partir de 38 € les 20 pages »
      pour la concurrence, relevé en septembre 2026. À revérifier avant mise en
      ligne définitive : c'est une affirmation comparative, elle doit rester
      exacte.
- [ ] **Photos définitives.** Les photos actuelles sont des visuels de
      démonstration sous licence libre (voir `assets/photos/CREDITS.md`) — à
      remplacer par de vraies photos du livre / du produit quand disponibles.

## Pas bloquant, à faire quand vous voulez

- [ ] **Compteur fondateur réel.** Le compteur est simulé : il part de 121 le
      28 septembre 2026 et augmente d'une place par jour (`FOUNDER_START_DATE`
      / `FOUNDER_START_COUNT` dans `script.js`). À remplacer par le vrai nombre
      de précommandes (Stripe ou export Formspree) dès qu'une source fiable
      existe.
- [ ] **Suivre les inscriptions Formspree.** Le plan gratuit est limité à 50
      soumissions/mois — surveiller le volume et passer à un plan payant si
      besoin.
- [ ] **Bandeau de consentement cookies.** Choix assumé : Google Analytics est
      installé sans bandeau de consentement, ce qui n'est pas conforme aux
      règles de la CNIL. À reconsidérer si vous changez d'avis sur ce risque.

## Déjà fait

- [x] Formulaire d'inscription branché sur Formspree
- [x] Lien de paiement Stripe branché (mode test)
- [x] Adresse e-mail du pied de page remplacée
- [x] Trois pages légales publiées et liées
- [x] Compteur fondateur (simulé, +1/jour)
- [x] `og.jpg` au bon format pour le partage social
- [x] Nom du projet tranché : Chapitre un
- [x] `noindex` retiré — le site est indexable
- [x] Google Analytics 4 installé (identifiant à renseigner, voir plus haut)
