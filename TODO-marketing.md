# À faire — marketing et publicités

Objectif de la phase actuelle : **savoir en 2 à 3 semaines si des parents
paient 49 € pour ce livre**, avec 300 à 500 € de publicité. Ce fichier liste ce
qu'il reste à faire, dans l'ordre. Les idées de messages s'appuient sur
`competitor.md`.

Qui fait quoi : **[vous]** ne peut être fait que par vous (comptes, argent,
visage, relations) ; **[Claude]** peut être fait par un agent à partir de ce
dépôt ; **[ensemble]** demande une info ou une validation de votre part.

Fichier interne, non publié sur chapitreun.com.

---

## 0. Avant de dépenser le premier euro

Guide pas à pas avec toutes les valeurs à copier-coller (page Facebook,
Instagram, portefeuille et compte pub, pixel, Stripe live, GA4, connecteurs) :
https://claude.ai/artifact/1STVTdFqyyzqPpNnaPKoyi. Images de profil et de
couverture : `landing-page/assets/social/`.

Connecteur **Meta Ads** (officiel, `https://mcp.facebook.com/ads`) branché le
1er octobre 2026 : un agent peut créer campagnes, ensembles et pubs (créés en
pause), téléverser les visuels, lire les statistiques. Il ne peut ni créer de
compte pub ou de pixel, ni gérer la page ou publier sur Instagram (pour ça :
connecteur Metricool).

- [ ] **[vous] Lien Stripe live à 49 €** (avec la redirection vers
      `merci.html`), puis **[Claude]** le brancher dans `script.js`. Sans lui,
      les pubs mesurent de l'intérêt, pas un achat.
- [ ] **[ensemble] Fixer la règle de décision avant de lancer**, par écrit ici :
  - Critère principal : part des visiteurs qui paient 49 €.
  - Proposition : sur ≥ 500 visites venues des pubs,
    **≥ 2 % de paiements → on construit** ; **0,5 à 2 % → on retravaille le
    message et on relance un tour** ; **< 0,5 % → on arrête ou on change
    d'offre**.
  - Critère secondaire : inscriptions « Juste être prévenu » (intérêt sans
    paiement).
- [ ] **[vous] Marquer les événements clés dans GA4** (Admin → Événements →
      « Marquer comme événement clé ») : `purchase`, `preorder_start`,
      `waitlist_signup`. Ils arrivent déjà dans GA4.
- [ ] **[vous] Créer le Pixel Meta** (Gestionnaire d'événements) et m'envoyer
      son identifiant, puis **[Claude]** l'installer dans `analytics.js` avec
      les mêmes événements (`Lead` pour l'inscription, `InitiateCheckout` pour
      la précommande, `Purchase` sur `merci.html`). Sans pixel, Meta ne peut pas
      optimiser sur les achats. Même choix que pour GA4 : pas de bandeau de
      consentement (risque déjà noté dans `landing-page/TODO.md`).
- [ ] **[ensemble] Convention d'UTM** pour chaque lien de pub, déjà lue par
      la page (`source`, `campaign`) :
      `?utm_source=meta&utm_medium=paid&utm_campaign=test1&utm_content=<nom-de-la-pub>`.
      Groupes Facebook : `utm_source=facebook-groupe&utm_medium=organic`.
- [ ] **[vous] Droits à l'image des photos.** Les photos actuelles sont CC0 :
      droit d'auteur libre, **mais pas d'accord des personnes photographiées**
      (voir `landing-page/assets/photos/CREDITS.md`). Pour de la publicité
      payante : banque d'images avec autorisation de modèle (Adobe Stock,
      Getty), ou photos de bébés de proches avec accord écrit des parents.
      S'applique aux pubs **et** à la page vers laquelle elles pointent.
- [ ] **[vous] Compte publicitaire Meta** au nom d'ANCHOR (même entité que
      Stripe), moyen de paiement ajouté, page Facebook + compte Instagram
      « Chapitre un » créés (les pubs Meta en ont besoin).

## 1. Les publicités à créer (Meta : Instagram + Facebook)

Format : 9:16 (Reels / Stories) en priorité, 4:5 (fil d'actualité) ensuite.
Chaque pub dit clairement **« précommande »** et **« app en préparation »** :
on ne vend pas un produit fini (obligation légale, et cohérent avec la page).

Tester **4 à 6 pubs** au premier tour, une idée par pub :

- [ ] **A. « 4 000 photos. 0 album. »** — image fixe, le constat en grand,
      puis « Le livre de sa première année se fait tout seul. » **[Claude]**
      peut produire l'image (même méthode que `og.jpg`).
- [ ] **B. Démo iPhone (vidéo 10–15 s)** — prénom tapé, photo du visage
      choisie, notification « Le livre de Léa est prêt ». **[Claude]** peut
      l'enregistrer depuis l'animation de la page (capture image par image +
      ffmpeg, disponible dans l'environnement).
- [ ] **C. La date** — « Ses 1 an arrivent en mars. Son livre sera prêt fin
      février. » La promesse que personne ne fait (livraison datée).
- [ ] **D. Les 40 minutes du soir** — le registre culpabilité → soulagement
      (le meilleur levier relevé chez Popsa). Texte long, une photo douce.
- [ ] **E. Vie privée** — « Vos photos ne quittent pas votre iPhone. » Pour
      les parents méfiants envers le cloud.
- [ ] **F. [vous] Vidéo fondateur (20–30 s, face caméra, au téléphone)** —
      « L'app n'existe pas encore. Si 500 parents la veulent, je la construis.
      Sinon, je vous rembourse. » L'honnêteté est notre seul atout face aux
      avis que les concurrents ont et que nous n'avons pas.
- [ ] **[Claude] Textes** : pour chaque pub, 3 textes principaux, 3 titres,
      1 description, en français, au ton de la page. Relus et validés par
      **[vous]**.
- [ ] **[vous] Relecture finale de chaque pub** : aucune affirmation de la
      liste « Ce qu'on ne peut pas (encore) affirmer » de `competitor.md`
      (pas d'avis, pas de chiffres de vente, pas de « N°1 »).

## 2. Ciblage et budget (premier tour)

- [ ] **[vous] Campagne « Ventes »** (objectif conversion `Purchase` si le
      pixel remonte assez d'achats, sinon `InitiateCheckout`).
- [ ] **Ciblage** : France, 25–40 ans, **appareils iOS uniquement** (l'app sera
      iPhone uniquement), ciblage large + centres d'intérêt parentalité ; laisser
      les créations faire le tri plutôt que d'empiler les critères.
- [ ] **Budget** : semaine 1, ≈ 15–20 €/jour répartis sur les 4–6 pubs ;
      semaine 2, couper tout ce qui a un taux de clic < 0,8 % après ~1 000
      impressions et mettre le budget sur les 2 meilleures.
- [ ] **Durée** : 14 jours maximum, puis application de la règle de décision
      (section 0).
- [ ] **Titre de la page** : le test A/B existe déjà (`?t=a` « se fait tout
      seul » / `?t=b` « en 5 minutes »). Laisser tourner, comparer dans GA4 par
      `variant`.

## 3. Canaux gratuits, en parallèle

- [ ] **[vous] Votre entourage** : message personnel à 20–30 parents de bébés
      de moins d'un an. Premières réservations, premiers retours.
- [ ] **[vous] Groupes Facebook de parents** (naissance par mois « Bébés de
      mars 2026 », groupes de mamans par ville) — lire le règlement, demander à
      l'admin, poster en racontant le projet plutôt qu'en vendant.
- [ ] **[vous] Post LinkedIn** sur la démarche (tester une idée avant de la
      construire, avec de l'argent réel). Un agent peut le rédiger avec la
      compétence « linkedin-guillim ».
- [ ] **[vous] 3 à 5 micro-influenceuses parentalité** (5 000–30 000
      abonnés) : proposer une place fondateur offerte ou une rémunération
      pour une story. Mention « partenariat » obligatoire.
- [ ] **Plus tard** : sages-femmes et cours de préparation à la naissance,
      sites de listes de naissance (angle cadeau), exemplaire grands-parents.

## 4. Après la réservation

- [ ] **[ensemble] Outil d'e-mail** (Brevo, gratuit jusqu'à 300 e-mails/jour)
      alimenté par l'export Formspree. Formspree reçoit les inscriptions mais
      n'envoie rien.
- [ ] **[Claude] E-mail de bienvenue** (précommande et liste d'attente) +
      **e-mail mensuel d'avancement** : la page promet « on vous tient
      informé » et « les fondateurs sont prévenus en premier ».
- [ ] **[vous] Appeler les 5 premiers acheteurs et 5 inscrits sans paiement** :
      pourquoi ils ont payé, ce qui a failli les arrêter, ce qu'ils imaginent
      recevoir. C'est l'information la plus précieuse du test.
- [ ] **[Claude] Parrainage sur `merci.html`** (plus tard) : « Un ami attend un
      bébé ? Partagez sa place fondateur. »

## 5. Suivi chaque semaine

- [ ] **[vous] Relevé hebdomadaire** (un tableau suffit) : dépense, impressions,
      taux de clic par pub, visites, `preorder_start`, `purchase`, coût par
      achat, inscriptions liste d'attente.
- [ ] **[Claude] Compteur fondateur réel** dès les premiers achats (remplacer
      le compteur simulé de `script.js`).
- [ ] **[ensemble] Décision à J+14**, notée ici avec les chiffres.

---

## Journal des décisions

_(à remplir : date, chiffres, décision)_
