# À faire — Chapitre un

Ce qui reste entre vos mains, maintenant que l'inscription, le paiement test,
les pages légales, le visuel social et le nom sont branchés.

## Prochaine étape : encaisser réellement (Stripe en mode live)

- [ ] **Basculer Stripe en mode live.** Créer le lien de paiement en mode live
      à **49 €** (prix total du livre, plus d'acompte) et remplacer `STRIPE_CHECKOUT_URL` dans `script.js` (actuellement un lien
      `buy.stripe.com/test_...`).
- [ ] **Redirection Stripe sur le lien live.** Déjà faite sur le lien test ;
      la reproduire sur le lien live (*After payment* →
      `https://chapitreun.com/merci.html`).

## À vérifier, sans urgence technique

- [ ] **Adresse e-mail `bonjour@chapitreun.com`.** Confirmer qu'elle reçoit
      bien du courrier (redirection DNS chez le registrar, ou alias Google
      Workspace) — sinon les clics sur « Nous écrire » partent dans le vide.
- [ ] **Hébergeur dans les mentions légales.** `mentions-legales.html` indique
      GitHub, Inc. comme hébergeur (standard pour GitHub Pages) — à confirmer.
- [ ] **Prix barré 69 €.** Il doit correspondre au prix réellement pratiqué
      après le lancement — sinon c'est un prix de référence trompeur au sens du
      Code de la consommation.
- [ ] **Nouveau lien Stripe test** (`test_aFadRadkQ9Nx6qj0gT77O04`, branché le
      30 septembre 2026). Vérifier qu'il affiche bien 49 € et que sa
      redirection *After payment* pointe vers `https://chapitreun.com/merci.html`
      — la redirection se règle lien par lien, elle ne suit pas l'ancien lien.
- [ ] **Comparaison de prix.** La page affiche « à partir de 38 € les 20 pages »
      pour la concurrence, relevé en septembre 2026. À revérifier avant mise en
      ligne définitive : c'est une affirmation comparative, elle doit rester
      exacte.
- [ ] **Deux promesses ajoutées à tenir.** La FAQ dit désormais qu'un livre
      abîmé est réimprimé et renvoyé, et la feuille de route que les fondateurs
      sont prévenus en premier à la sortie de l'app. Les retirer si vous ne
      voulez pas vous y engager.
- [ ] **Photo du fondateur.** Le mot signé (section « Où en est le projet »)
      convertirait mieux avec un vrai visage : une photo de vous, même prise au
      téléphone, à côté de la signature.
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
- [ ] **Médiateur de la consommation.** Choix assumé : démarrage sans médiateur,
      alors que c'est obligatoire pour la vente B2C (art. L.612-1 du Code de la
      consommation, amende jusqu'à 15 000 € pour une société). Solution la moins
      chère : [CM2C](https://www.cm2c.net/inscription-professionnel.php), 48 € pour
      3 ans sous 10 salariés, puis 36 € par médiation traitée. Une fois inscrit,
      ajouter ses coordonnées à l'Article 7 de `cgv-prevente.html`.
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
- [x] Google Analytics 4 installé et actif (`G-ZWDVH9Q1F3`)
- [x] Politique de confidentialité à jour (cookies GA4, Google comme destinataire)
- [x] `robots.txt` + `sitemap.xml` pour l'indexation
- [x] Page `merci.html` de retour après paiement (conversion GA4), redirection Stripe test configurée
- [x] Page revue face aux concurrents : prix sous le héros, sans abonnement, tableau à 7 lignes, feuille de route + mot signé avant le formulaire, date du livre calculée, 3 questions ajoutées
