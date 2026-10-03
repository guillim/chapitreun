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

## Où on en est (3 octobre 2026, 11 h)

> ### 🟡 Les pubs sont prêtes, en pause : à relire puis activer [vous]
>
> Campagne **« Test 1 · Précommande livre 1 an · oct. 2026 »**
> (`120249512384540314`), en pause, 20 €/jour, optimisée sur
> `InitiateCheckout`. Un ensemble « France · 25-40 · iPhone · large »
> (`120249512388300314`) avec 3 pubs : A (son livre photo, sans rien
> faire), C (la date), D (le soir), en 4:5. La pub E (vie privée) a été
> supprimée le 3 octobre.
> Visuels, vidéo et textes : `pubs/tour-1/` ; canevas modifiable :
> https://claude.ai/artifact/Ku993NrFX88eBuqkq9ww26
>
> À faire de votre côté, dans le Gestionnaire de publicités :
> 1. **Ajouter la pub B (vidéo démo)** : le connecteur ne peut pas encore
>    téléverser de vidéo sur ce compte. Fichier `pubs/tour-1/B-demo-9x16.mp4`,
>    texte et lien dans `pubs/tour-1/TEXTES.md`.
> 2. Facultatif : sur chaque pub, « Personnaliser le visuel par placement »
>    → version 9:16 pour Stories et Reels (fichiers `*-9x16.jpg`).
> 3. Facultatif : ajouter les textes 2 et 3 de chaque pub (« Ajouter des
>    options de texte »).
> 4. Relire, puis **activer la campagne**.

### ✅ En place et vérifié

- **Buffer** (plan gratuit, compte guigloo@msn.com, organisation « My
  organization » `6ac091ec8a70c328f489b3cf`) relié à Claude par le connecteur
  MCP : canaux page Facebook « Chapitre un » (`6ac09441ea19ca0bde5ffd72`) et
  Instagram @chapitre.un.an (`6ac092d5ea19ca0bde5ff547`). Limite gratuite :
  10 posts programmés à la fois.
- **Page Facebook « Chapitre un »** créée (ID `1295497923654612`), visible
  dans le connecteur Meta Ads.
- **Pixel Meta `1461301452516353`** (« data de chapitreun », portefeuille
  Chapitre Un, relié au compte pub `1428097829271108`) sur le site depuis le
  2 octobre au soir, sur toutes les pages : `PageView`, `Lead`,
  `InitiateCheckout`, `Purchase` (49 €). L'ancien pixel `1107649151757818`,
  resté hors du portefeuille, n'a servi qu'aux premiers tests.
- **Compte pub « Chapitre un »** `1428097829271108` (portefeuille Chapitre Un
  `1081391137835959`) : actif, EUR, moyen de paiement ajouté, visible par le
  connecteur Meta Ads.
- **Google Analytics 4** (`G-ZWDVH9Q1F3`) actif sur le site, événements
  `purchase`, `preorder_start` et `waitlist_signup` envoyés.
- **Page Confidentialité** à jour : Google, Meta, cookies `_ga` et `_fbp`.
- **Photo de profil et couverture** en ligne dans `landing-page/assets/social/`.
- **Guide pas à pas** avec toutes les valeurs à copier-coller :
  https://claude.ai/artifact/1STVTdFqyyzqPpNnaPKoyi
- **Connecteur Meta Ads** branché dans Claude.
- **Événements clés GA4** : `purchase`, `preorder_start`, `waitlist_signup`.
- **Domaine chapitreun.com vérifié** dans Meta (2 octobre).
- **Instagram @chapitre.un.an** (`17841426362913894`) relié au compte pub.
- **`bonjour@chapitreun.com`** reçoit bien les e-mails.
- **Règle de décision** adoptée (section 0 et journal).
- **Le nouveau pixel reçoit les visites** : premiers `PageView` le 2 octobre
  vers 22 h (lu via le connecteur).
- **Lien Stripe live** `https://buy.stripe.com/eVqfZi5So9Nx8yrd3F77O03`
  branché dans `script.js` le 2 octobre (reste à le tester, point 1).

### ⏳ Ce que Claude fera une fois la campagne active

Relevé des chiffres chaque semaine (section 5), coupe des pubs à moins de
0,8 % de clics après ~1 000 impressions, bilan à J+14 avec la règle de
décision.

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
connecteur Buffer, en place depuis le 3 octobre 2026).

- [x] **Lien Stripe live à 49 €** branché dans `script.js` le 2 octobre 2026.
- [x] **Lien live testé le 3 octobre 2026** : vraie précommande puis
      remboursement ; redirection vers `merci.html`, `Purchase` chez Meta et
      `purchase` 49 € dans GA4 vérifiés. Le test a révélé qu'un double clic
      comptait plusieurs `preorder_start` : corrigé (PR #33).
- [x] **Règle de décision fixée le 2 octobre 2026** (avant toute dépense).
      On décide après **500 visites venues des pubs ou 14 jours**, au premier
      des deux termes :

      | Résultat | Décision |
      |---|---|
      | ≥ 2 % des visiteurs paient 49 €, ou coût par achat ≤ 25 € | On construit l'app |
      | 0,5 à 2 %, ou 25 à 60 € par achat | On retravaille le message ou le prix, un tour de plus |
      | < 0,5 % et moins de 5 % d'inscrits à la liste d'attente | On arrête ou on change d'offre |

      Repères : précommande payante d'un produit qui n'existe pas encore,
      trafic froid → 0,5–2 % habituel, ≥ 3 % excellent ; liste d'attente
      gratuite → 5–15 %. Coût par achat = prix du clic ÷ taux de conversion.
      Marge estimée ≈ 25 € par livre (49 € moins impression et port, à
      confirmer avec un devis d'imprimeur). Visites comptées avec les « clics
      sur le lien » de Meta (GA4 ne voit pas ceux qui repartent en moins de
      8 s sans interaction).
- [x] **Événements clés GA4** créés le 2 octobre 2026 : `purchase`,
      `preorder_start`, `waitlist_signup` (« Create with code », sans valeur
      par défaut).
- [x] **Pixel Meta** `1461301452516353` (« data de chapitreun », remplace le
      premier pixel `1107649151757818` resté hors du portefeuille)
      installé le 2 octobre 2026 dans `analytics.js` : `PageView` partout,
      `Lead` à l'inscription, `InitiateCheckout` à la précommande, `Purchase`
      sur `merci.html` (49 EUR). Pas de bandeau de consentement, même choix que
      pour GA4 ; la page Confidentialité le mentionne.
- [x] **Balise de vérification du domaine** posée dans `index.html`.
- [x] **Domaine vérifié** dans Meta (2 octobre 2026).
- [x] **[ensemble] Convention d'UTM** (appliquée aux pubs du tour 1) pour chaque lien de pub, déjà lue par
      la page (`source`, `campaign`) :
      `?utm_source=meta&utm_medium=paid&utm_campaign=test1&utm_content=<nom-de-la-pub>`.
      Groupes Facebook : `utm_source=facebook-groupe&utm_medium=organic`.
- [x] **Droits à l'image des photos — tranché le 3 octobre 2026** : photos de
      pub prises sur **Pexels et Unsplash** (gratuites, usage commercial
      autorisé, rien à payer). Risque assumé par le fondateur : ces banques
      ne garantissent pas l'accord des personnes photographiées. Écartés :
      banque payante sans licence (contrefaçon, retrait par Meta), essai
      Adobe Stock (jugé moins simple). Noter chaque photo utilisée (URL,
      auteur) dans `landing-page/assets/photos/CREDITS.md`.
- [x] **Page Facebook « Chapitre un »** créée (vérifié le 2 octobre 2026).
- [x] **Compte publicitaire Meta « Chapitre un »** (`1428097829271108`), moyen de
      paiement ajouté, Instagram @chapitre.un.an relié (2 octobre 2026).

## 1. Les publicités à créer (Meta : Instagram + Facebook)

Format : 9:16 (Reels / Stories) en priorité, 4:5 (fil d'actualité) ensuite.
Chaque pub dit clairement **« précommande »** et **« app en préparation »** :
on ne vend pas un produit fini (obligation légale, et cohérent avec la page).

Tester **4 à 6 pubs** au premier tour, une idée par pub :

- [x] **A. « Son livre photo, sans rien faire »** (version 2 du 3 octobre :
      le livre ouvert en grand ; la version 1 ci-dessous partait des photos
      et a été remplacée après relecture) —
      ancienne idée : **« 4 000 photos. 0 album. »** — image fixe, le constat en grand,
      puis « Le livre de sa première année se fait tout seul. » **[Claude]**
      peut produire l'image (même méthode que `og.jpg`).
- [x] **B. Démo iPhone (vidéo 10–15 s)** — faite (14,5 s, 9:16) ; **à ajouter à la main** dans Meta (voir en tête) — prénom tapé, photo du visage
      choisie, notification « Le livre de Léa est prêt ». **[Claude]** peut
      l'enregistrer depuis l'animation de la page (capture image par image +
      ffmpeg, disponible dans l'environnement).
- [x] **C. La date** — « Ses 1 an arrivent en mars. Son livre sera prêt fin
      février. » La promesse que personne ne fait (livraison datée).
- [x] **D. Les 40 minutes du soir** — le registre culpabilité → soulagement
      (le meilleur levier relevé chez Popsa). Texte long, une photo douce.
- [x] ~~**E. Vie privée**~~ — **supprimée le 3 octobre** : le fondateur
      n'est pas sûr de garder la fonction (analyse sur l'iPhone). Plus aucun
      argument vie privée dans les pubs (mention retirée de la vidéo B).
- [ ] **F. [vous] Vidéo fondateur (20–30 s, face caméra, au téléphone)** —
      « L'app n'existe pas encore. Si 500 parents la veulent, je la construis.
      Sinon, je vous rembourse. » L'honnêteté est notre seul atout face aux
      avis que les concurrents ont et que nous n'avons pas.
- [x] **[Claude] Textes** (`pubs/tour-1/TEXTES.md`) : pour chaque pub, 3 textes principaux, 3 titres,
      1 description, en français, au ton de la page. Relus et validés par
      **[vous]**.
- [ ] **[vous] Relecture finale de chaque pub** : aucune affirmation de la
      liste « Ce qu'on ne peut pas (encore) affirmer » de `competitor.md`
      (pas d'avis, pas de chiffres de vente, pas de « N°1 »).

## 2. Ciblage et budget (premier tour)

- [x] **Campagne « Ventes »** créée en pause le 3 octobre, optimisée sur `InitiateCheckout` (aucun achat réel encore) (objectif conversion `Purchase` si le
      pixel remonte assez d'achats, sinon `InitiateCheckout`).
- [x] **Ciblage** (Advantage+ : France, iOS, 25 ans min., 25–40 en suggestion) : France, 25–40 ans, **appareils iOS uniquement** (l'app sera
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

- **2 octobre 2026** — règle de décision adoptée (voir section 0) : ≥ 2 % ou
  ≤ 25 €/achat → on construit ; 0,5–2 % ou 25–60 € → un tour de plus ;
  < 0,5 % et < 5 % de liste d'attente → on arrête. Décision après 500 visites
  ou 14 jours.
- **3 octobre 2026** — photos des pubs : Pexels et Unsplash (gratuites,
  usage commercial), risque « pas d'accord des personnes photographiées »
  assumé. Pas de banque payante utilisée sans licence.
- **3 octobre 2026** — outil de publication organique : **Buffer** plutôt
  que Metricool. Buffer est le mieux noté de l'App Store parmi les outils
  dont le MCP officiel publie sur Instagram (4,7/5, environ 34 000 avis aux
  États-Unis, contre 2,7/5 et 111 avis pour Metricool), et son MCP est inclus
  dans le plan gratuit. Comparatif : Buffer, Hootsuite, Publer, Metricool,
  Vista Social, SocialPilot.
- **3 octobre 2026** — achat test validé de bout en bout (Stripe, merci.html,
  Formspree, GA4, Meta). 1 achat, 3 `InitiateCheckout` et 1 inscription
  Formspree de test à **déduire au bilan**. Pour compter les achats, Stripe
  fait foi.
- **3 octobre 2026** — pubs du tour 1 faites dans **Claude Design** (après
  recherche des outils plébiscités : Canva, AdCreative.ai, Creatify/Arcads,
  Advantage+ Creative ; Claude Design retenu car déjà disponible). Campagne
  créée en pause : 20 €/jour au niveau campagne, optimisation
  `InitiateCheckout`, une audience large, pubs A, C, D, E. Vidéo B et
  versions 9:16 à ajouter à la main (outils du connecteur pas encore ouverts
  sur ce compte).
- **3 octobre 2026 (soir)** — relecture du fondateur : pub A refaite (« Son
  livre photo, sans rien faire », le livre d'abord) ; **pub E (vie privée)
  supprimée** et mention « aucune photo envoyée » retirée de la vidéo B, car
  la fonction n'est pas sûre d'être gardée. Restent A, C, D (+ B à ajouter).
