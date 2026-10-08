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

## Où on en est (8 octobre 2026)

> ### 🟡 Campagne lancée le 5 octobre, arrêt automatique le 15 octobre
>
> **Relevé J+3, 8 octobre 9 h** (cumul depuis le 5) : 26,93 €,
> 2 428 impressions, 53 clics sur lien (CTR 2,2 %, CPC moyen 0,51 €).
> Pixel : **0 `Lead`, 0 `InitiateCheckout`, 0 `Purchase`** ; 45 `PageView`
> dont ≈ 19 sont les tests Playwright du 6 au soir → ≈ 26 visites réelles.
>
> | Pub | Dépense | Impr. | Clics | CTR | CPC |
> |---|---|---|---|---|---|
> | C · La date | 13,55 € | 1 265 | 39 | 4,19 % | 0,26 € |
> | A · Son livre photo | 12,61 € | 1 076 | 13 | 1,86 % | 0,63 € |
> | B · Démo iPhone | 0,59 € | 54 | 1 | 5,6 % | 0,20 € |
> | G · Notification | 0,18 € | 32 | 0 | 0 % | — |
> | D · Humour | 0 € | 1 | 0 | — | — |
>
> | Jour | Dépense | Impr. | Clics | Qui diffuse |
> |---|---|---|---|---|
> | 5 oct. | 3,01 € | 311 | 5 | A et C à parts égales |
> | 6 oct. | 12,68 € | 1 181 | 37 | C (12,21 €, 37 clics) |
> | 7 oct. | 7,33 € | 606 | 8 | A (7,15 €), C 7 impressions |
> | 8 oct. (9 h) | 3,91 € | 330 | 3 | A seule |
>
> Placements (ensemble, cumul) : stories 13,53 € / 1 184 impr. / 31 clics
> (3,5 %, 0,33 €), fil Instagram 11,51 € / 999 / 18 (2,9 %, 0,40 €), reels
> 1,89 € / 244 / 4. Les stories sont le meilleur emplacement.
>
> **Ce qui s'est passé le 6 au soir.** À 21 h 51, les cinq pubs ont été
> réenregistrées depuis l'app Ads Manager iOS (nouvelle création pour
> chacune, même image et même texte, rattachée au compte Instagram) :
> re-examen, approbation à 21 h 54, et **remise à zéro de l'apprentissage**.
> Depuis, Meta sert **A** au lieu de **C** : A coûte 2,4 × plus cher le clic
> (0,63 € contre 0,26 €) et clique deux fois moins (1,9 % contre 4,2 %).
> Le fondateur n'a pas voulu modifier les pubs (il publiait des contenus
> organiques) : manipulation involontaire dans l'app.
>
> Lecture : C reste la pub qui marche (4,2 % de clics, 0,26 €, la norme en
> trafic froid est 1–2 % et 0,50–1 €). Côté achats, toujours rien à
> 53 clics et ≈ 26 visites réelles : trop peu pour juger la page ou le prix
> (seuil utile : 100 visites), mais on entre dans la zone où il faudra
> regarder la page si rien ne vient. Au rythme actuel (A à 0,63 €), les
> 70 € restants donnent ≈ 110 clics ; avec C, ≈ 270.
>
> Campagne **« Test 1 · Précommande livre 1 an · oct. 2026 »**
> (`120249512384540314`), **active**, 10 €/jour, optimisée sur
> `InitiateCheckout`. Ensemble « France · Femmes 30-45 · iPhone · Instagram »
> (`120249512388300314`) : femmes 30–45 ans, iOS, mobile, Instagram
> uniquement, **fin programmée le 15 octobre à 23 h 59** (≈ 100 € au total ;
> repoussée d'un jour car la diffusion a été bloquée le 5 octobre de 15 h 23
> au soir, compte en « paiement requis », régularisé par le fondateur).
> 5 pubs actives : A (son livre photo, sans rien faire), B (vidéo démo
> iPhone), C (la date), D (trop de choses à faire, en humour), G
> (notification iPhone, format « natif »), en 4:5 et 9:16.
> Visuels, vidéo et textes : `pubs/tour-1/` ; canevas modifiable :
> https://claude.ai/artifact/Ku993NrFX88eBuqkq9ww26
>
> Prochaines étapes :
> 1. ~~**Le 6** : vérifier que la diffusion a repris~~ — fait, compte
>    actif, diffusion reprise dans la nuit du 5 au 6.
> 2. ~~**J+3 (8 octobre, relevé programmé à 9 h)**~~ — fait, ci-dessus.
> 3. **J+5 (10 octobre, relevé programmé à 9 h)** : vérifier que C diffuse
>    à nouveau ; premiers `Lead` / `InitiateCheckout` ; si toujours 0 à
>    ≈ 100 clics, regarder la page (premier écran, prix) plutôt que les pubs.
> 4. **J+10 (15 octobre)** : bilan et décision avec la règle ci-dessous.
>
> Propositions du 8 octobre (rien n'est modifié dans Meta sans accord du
> fondateur) :
> - ~~**Mettre A, D et G en pause**~~ — **fait le 8 octobre à 19 h 40**, sur
>   le « Vas-y » du fondateur : A, D et G en pause, C et B actives. Mettre
>   une pub en pause ne relance pas l'apprentissage de l'ensemble ; c'est le
>   moyen le plus sûr de retrouver des clics à 0,26 € plutôt qu'à 0,63 €.
>   Risque : Meta préférait A depuis la remise à zéro ; si C ne redémarre
>   pas seule d'ici le relevé du 10, dupliquer l'ensemble avec C seule.
>   La reco de l'assistant Meta reçue le même soir (test A/B avec un
>   ensemble de reciblage, réécrire G en déclinaison de B) a été écartée :
>   personne à recibler, B jugée sur 1 clic, et modifier une création
>   relancerait l'apprentissage.
> - **Ne plus ouvrir les pubs dans l'app Ads Manager iOS** d'ici le 15 :
>   chaque « enregistrer » relance l'examen et l'apprentissage.
> - **Stories d'abord** : si on refait des visuels, le 9:16 est le format
>   qui travaille (31 des 53 clics).
> - **La page, pas les pubs, si 0 début de paiement à 100 clics** : le
>   formulaire liste d'attente (`Lead`) est aussi à zéro, ce qui dit que
>   même l'engagement gratuit n'est pas pris ; regarder le premier écran
>   mobile et la place du prix avant de toucher au prix lui-même.
>
> Suggestions du 6 octobre (rien n'est modifié dans Meta sans accord) :
> - ~~**Écart clics / pages vues** : vérifier GA4, tester la page en 4G sur
>   iPhone~~ — **testé le 6 au soir** (Playwright, iPhone émulé, 4G simulée,
>   processeur ralenti ×4) : la page n'est pas en cause (premier rendu 1,3 s,
>   image d'accueil 1,6 s, chargée en 2 s, 500 Ko ; 1,7 / 2,1 / 3,5 s en
>   4G lente). L'écart vient du chargement **différé** du pixel
>   (`analytics.js` : première interaction ou 8 s après le chargement) : sans
>   geste, `PageView` part à 11 s ; un visiteur qui repart avant sans
>   défiler n'est jamais compté, et en 4G lente même un défilement à 2 s ne
>   suffit pas si la personne part avant 6 s (fbevents.js fait 113 Ko). GA4
>   est différé de la même façon et ne peut pas servir de contre-mesure.
>   Choix documenté dans `JOURNAL.md` (section 4) : les visites se comptent
>   avec les « clics sur le lien » de Meta ; `Lead` et `InitiateCheckout` ne
>   sont pas touchés (ils suivent un geste, et la redirection Stripe attend
>   l'envoi). **Décision du fondateur le 6 au soir** : charger les
>   bibliothèques dès l'événement `load` (la page est déjà affichée, aucun
>   coût sur le rendu) au lieu d'attendre 8 s — fait (`analytics.js` v8) ;
>   vérifié : `PageView` part 2 à 4 s après l'arrivée, même sans geste.
>   Conséquence : à partir du 7 octobre, les `PageView` comptent toutes les
>   visites ; les chiffres d'avant ne sont pas comparables (sous-comptés
>   d'environ moitié).
> - **D jamais diffusée** : Meta ne la sert pas (format humour jugé moins
>   prometteur par l'enchère) ; à J+3, la retirer pour que le budget aille
>   aux pubs qui apprennent, ou la laisser si on veut tester l'angle.
> - **Préparer une C-bis** : la date est l'angle qui marche ; une variante
>   avec un autre bébé ou le titre « Prêt 3 semaines avant ses 1 an »
>   permettrait de confirmer que c'est l'angle et pas seulement la photo.
> - **Le vrai juge est le pixel** : 0 début de paiement sur 33 clics ne dit
>   rien encore ; à 50–100 clics sans `InitiateCheckout`, c'est la page (ou
>   le prix) qu'il faut regarder, pas les pubs.
> - ~~**Posts organiques** publiés le 6 (voir section 3) : vérifier que la
>   bio Instagram pointe vers chapitreun.com~~ — fait par le fondateur le
>   6 octobre.

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
      On décide après **500 visites venues des pubs ou 10 jours** (14 à
      l'origine, ramené à 10 le 4 octobre), au premier
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

- [x] **A. « Son livre photo, sans rien faire »** (version 3 du 3 octobre au
      soir : un vrai livre tenu en mains, notre double page projetée dedans ;
      version 2 : le livre ouvert en grand, à plat ; la version 1 ci-dessous partait des photos
      et a été remplacée après relecture) —
      ancienne idée : **« 4 000 photos. 0 album. »** — image fixe, le constat en grand,
      puis « Le livre de sa première année se fait tout seul. » **[Claude]**
      peut produire l'image (même méthode que `og.jpg`).
- [x] **B. Démo iPhone (vidéo 10–15 s)** — faite (14,5 s, 9:16) ; **à ajouter à la main** dans Meta (voir en tête) — prénom tapé, photo du visage
      choisie, notification « Le livre de Léa est prêt ». **[Claude]** peut
      l'enregistrer depuis l'animation de la page (capture image par image +
      ffmpeg, disponible dans l'environnement).
- [x] **C. La date** — « Ses 1 an arrivent en mars. Son livre sera prêt fin
      février. » La promesse que personne ne fait (livraison datée). Version 3
      du 3 octobre au soir : titre en trois lignes courtes, carte du livre.
- [x] **D. « Trop de choses à faire », en humour** (version 3 du 3 octobre au
      soir : photo resserrée sur la grimace, titre raccourci ; version 2 du
      3 octobre : la version « le soir » était culpabilisante) — ancienne idée : **Les 40 minutes du soir** — le registre culpabilité → soulagement
      (le meilleur levier relevé chez Popsa). Texte long, une photo douce.
- [x] ~~**E. Vie privée**~~ — **supprimée le 3 octobre** : le fondateur
      n'est pas sûr de garder la fonction (analyse sur l'iPhone). Plus aucun
      argument vie privée dans les pubs (mention retirée de la vidéo B).
- [x] **G. Notification iPhone (format « natif »)** — 4 octobre : une fausse
      capture d'écran verrouillé, « Le livre de Léa est prêt », avec un
      autocollant « Ce qui arrivera 3 semaines avant ses 1 an ». Format
      « qui ne ressemble pas à une pub », parmi les plus performants en
      trafic froid d'après la recherche du 3 octobre. **[Claude]**, fait.
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
- [ ] **Budget** : **10 €/jour** (ramené de 20 € le 4 octobre, 100 € au
      total) répartis sur les 5 pubs ;
      à J+4–5, couper tout ce qui a un taux de clic < 0,8 % après ~1 000
      impressions et mettre le budget sur les 2 meilleures.
- [ ] **Durée** : 10 jours maximum, puis application de la règle de décision
      (section 0).
- [ ] **Titre de la page** : le test A/B existe déjà (`?t=a` « se fait tout
      seul » / `?t=b` « en 5 minutes »). Laisser tourner, comparer dans GA4 par
      `variant`.

## 3. Canaux gratuits, en parallèle

- [x] **[Claude] Remplir le compte Instagram et la page Facebook** (6 octobre
      2026) : 3 publications qui décrivent le produit (présentation, carrousel
      « comment ça marche », carrousel « l'objet »), programmées via Buffer les
      6 et 7 octobre. Visuels et légendes : `pubs/posts-1/`. **Bio
      Instagram** avec le lien chapitreun.com : vérifiée par le fondateur
      le 6 octobre.
- [x] **[Claude] Série 2 « La date »** (demandée par le fondateur le 6 au
      soir) : 4 posts et 2 reels sur le design de la pub C, six enfants
      différents (photos Unsplash), programmés via Buffer du 8 au 13 octobre
      sur les deux canaux. Visuels, légendes, horaires et identifiants Buffer :
      `pubs/posts-2/TEXTES.md`. Les reels sont sans musique (Buffer ne peut pas
      en ajouter ; le fondateur peut en poser une dans Instagram après
      publication).
- [x] **[Claude] Série 3, inspirée des pages concurrentes** (7 octobre) : les
      30 derniers posts de 8 concurrents relevés via Apify ; hors concours,
      ce qui marche est une question ou une phrase de parent en gros sur une
      photo de vie, et le chiffre de la pellicule. Un post « Combien de photos
      de lui dans votre iPhone ? » et deux reels (« Vous pensez que vous vous
      souviendrez de tout », « 4 000 photos. 365 nuits, courtes. »), le
      7 octobre à 9 h 30, 17 h 30 et 20 h 30. Relevé, légendes et
      identifiants : `pubs/posts-3/TEXTES.md`. Piste non faite : un post par
      mois de naissance (« Bébés d'octobre… »), ce qui marche le mieux chez
      Rosemood hors concours.
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
- [ ] **[ensemble] Décision à J+10**, notée ici avec les chiffres.

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
- **4 octobre 2026** — vidéo B et versions 9:16 de A, C, D, G ajoutées à la
  main par le fondateur (5 pubs). **Budget ramené à 10 €/jour pendant
  10 jours (100 € au total)** : 280 € jugé trop cher pour un premier test.
  Conséquence : environ 150 à 250 visites attendues au lieu de 500, donc un
  signal plus faible ; la règle de décision reste la même, appliquée à J+10.
- **4 octobre 2026** — emplacements : **Instagram uniquement** (fil, Stories,
  Reels, Explorer, profil, recherche), **mobile uniquement**, iOS. Facebook,
  Audience Network, Threads et ordinateur retirés.
- **4 octobre 2026** — **femmes, 30–45 ans ferme** (Advantage+ audience
  désactivée pour pouvoir fixer un âge maximum). Ensemble renommé
  « France · Femmes 30-45 · iPhone · Instagram ».
- **5 octobre 2026 (soir)** — compte pub passé en « paiement requis » à
  15 h 23 (premier prélèvement refusé) : diffusion stoppée après 2,49 €.
  Fondateur prévenu par notification, paiement régularisé. **Fin de
  l'ensemble repoussée au 15 octobre 23 h 59** pour compenser (accord du
  fondateur).
- **6 octobre 2026 (soir)** — **série 2 « La date »** : le fondateur veut
  une série de posts et de reels qui reprennent le design de la pub qui
  marche (C) en changeant la photo et l'enfant. Quatre posts et deux reels,
  six enfants, six variations de la promesse datée, du 8 au 13 octobre,
  un par jour en alternant 12 h 30 et 19 h 30. Les reels sont fabriqués
  comme la vidéo B (HTML animé capturé image par image, ffmpeg), 7 s, sans
  musique. Le premier post de la série est aussi la « C-bis » envisagée pour
  les pubs : même titre que C, autre bébé.
- **6 octobre 2026** — **posts organiques** : le fondateur propose de
  publier des images du produit sur Instagram et Facebook ; accord, car le
  compte Instagram et la page étaient vides alors que les pubs y envoient du
  monde. Trois posts (présentation, « comment ça marche » en 5 vues,
  « l'objet » en 3 vues) rendus en HTML → JPG et programmés via Buffer ;
  le post sur l'objet dit que les images sont un rendu du livre.
- **5 octobre 2026** — **campagne lancée** (campagne, ensemble et 5 pubs
  activés), fin automatique de l'ensemble le 14 octobre à 23 h 59, heure de
  Paris. Ciblage par revenu écarté : Meta ne le propose pas en France, et
  resserrer sur les foyers aisés rendrait le signal trop optimiste.
- **3 octobre 2026 (soir)** — relecture du fondateur : pub A refaite (« Son
  livre photo, sans rien faire », le livre d'abord) ; **pub E (vie privée)
  supprimée** et mention « aucune photo envoyée » retirée de la vidéo B, car
  la fonction n'est pas sûre d'être gardée. Restent A, C, D (+ B à ajouter).
- **3 octobre 2026 (soir)** — pub D refaite en humour (maman qui lève les yeux
  au ciel, « Couches, biberons, lessives… et son album photo, on en parle ? »)
  : la version « 22 h, vous triez encore ses photos » était culpabilisante.
- **3 octobre 2026 (soir)** — mentions vie privée retirées aussi de la landing
  page et de la page Confidentialité (même raison).
- **3 octobre 2026 (soir)** — visuels A, C, D refaits d'après une recherche
  sur les pubs statiques qui marchent en 2026 (une idée par visuel, titre de
  8 mots au plus, visage ou livre en mains, moins de 20 % de texte, zones
  sûres 9:16) ; détail dans `JOURNAL.md`. Pubs Meta recréées avec les
  nouveaux visuels (Meta fige l'image à la création), mêmes textes et liens.
- **4 octobre 2026** — 4ᵉ pub ajoutée, **G « Notification »** (capture
  d'écran verrouillé d'iPhone, format natif) : le fondateur a retenu la
  suggestion issue de la recherche. Pas de déclaration « contenu généré par
  IA » sur les pubs (décision du fondateur : rien à déclarer).
