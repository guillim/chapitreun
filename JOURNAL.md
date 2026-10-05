# Journal de construction — Chapitre un

Ce document raconte comment le test de demande « Chapitre un » a été monté,
du 27 septembre au 2 octobre 2026 : ce que le fondateur a demandé, ce qui a été
décidé et pourquoi, ce qui a coincé. Il sert de mode d'emploi à un agent qui
devrait refaire la même chose pour un autre produit : lire d'abord le
**playbook** (section 6) et les **pièges** (section 5), puis la chronologie
si un détail manque.

Fichier interne, non publié (il est hors de `landing-page/`).

Sources : les messages du fondateur dans la session Claude Code principale,
l'historique git (PR #1 à #28) et les commits de trois sessions parallèles. Le
brief initial (7 sections de page) date d'une session antérieure du
27 septembre dont on n'a que le résultat : voir `landing-page/README.md`.

---

## 1. Le produit et ce qu'on teste

- **Idée** : une app iPhone qui retrouve toutes les photos du bébé dans le
  téléphone et compose automatiquement le livre de sa première année, prêt
  3 semaines avant son anniversaire. Les parents n'ont rien à trier.
- **Ce qui existe** : rien d'autre qu'une landing page. L'app n'est pas
  construite.
- **Ce qu'on teste** : est-ce que des parents **paient vraiment 49 €** pour ce
  livre avant que l'app existe (précommande remboursable), avec 300 à 500 € de
  pub Meta sur 14 jours.
- **Porteur** : Guillaume Lancrenon, via sa SASU ANCHOR (qui porte aussi
  d'autres produits : anchorhq.eu, dontgomanual.com, Mon petit parquet).
- **Langue** : tout est en français (page, docs du dépôt, commits). Le
  fondateur écrit en français ou en anglais selon les moments.

## 2. La pile technique, et pourquoi

| Brique | Choix | Raison |
|---|---|---|
| Page | HTML/CSS/JS statique, aucun build | Modifiable par un agent en une PR, rien à maintenir |
| Hébergement | GitHub Pages (`landing-page/` publié à la racine), domaine `chapitreun.com` derrière Cloudflare | Gratuit, HTTPS, déploiement au merge |
| Formulaire | Formspree (`ENDPOINT` dans `script.js`) | Pages n'exécute pas de code serveur |
| Paiement | Stripe Payment Link, compte existant d'ANCHOR réutilisé | Pas d'intégration à coder ; « After payment » → `merci.html` |
| Mesure | GA4 + pixel Meta, chargés en différé (`analytics.js`) | GA4 pour les canaux gratuits et l'A/B, Meta pour optimiser les pubs |
| Pubs | Connecteur MCP officiel Meta Ads (`https://mcp.facebook.com/ads`) | Claude crée les campagnes (en pause) et lit les stats |
| Suivi du projet | `landing-page/TODO.md`, `TODO-marketing.md`, `competitor.md`, ce journal | Un agent suivant repart de là |

## 3. Chronologie

Les citations sont les demandes du fondateur, raccourcies.

### 27 septembre — la page
- Session antérieure : page complète à partir d'un brief en 7 sections
  (mobile d'abord, photos CC0 en attendant, test A/B du titre, événements dans
  `dataLayer`). Publication sur GitHub Pages, CNAME `chapitreun.com`.

### 28 septembre — brancher tout ce qui manque
- Point de départ : une liste de 9 trous laissés par la première session
  (endpoint du formulaire, lien Stripe, e-mail fictif, pages légales,
  compteur fondateur, `og.jpg`, analytics, nom provisoire, `noindex`).
  Demande : « let's discuss each bullet point one by one in order to finish
  this setup as fast as possible ».
- **Formspree** : le fondateur crée le formulaire et donne l'URL.
- **Stripe** : « reuse an old Stripe account to fasten the setup » → lien de
  test à 30 € à l'époque.
- **E-mail** : `bonjour@chapitreun.com`.
- **Pages légales** (mentions, CGV de prévente, confidentialité) : rédigées à
  partir des infos d'ANCHOR trouvées sur ses autres sites (« get inspired by
  anchorhq.eu or dontgomanual.com »).
- **Compteur fondateur** : « fake it for now, it should simply increase by 1
  every day » → part de 121 le 28 septembre, +1 par jour.
- **Nom** : on garde « Chapitre un ». **`noindex`** retiré.
- **Analytics** : la liste proposait Plausible/Matomo sans cookie. Décision
  du fondateur : « install Google Analytics 4, but do not install any consent
  gate… I don't care to be outlawed ». Risque CNIL assumé et noté.
- Premier `TODO.md` de ce qui reste au fondateur.
- Confusion : « I don't see any Stripe link » → le lien n'apparaît qu'après
  l'envoi du formulaire ; on redirige maintenant vers Stripe juste après
  l'inscription en précommande.
- **Règle de travail posée** : « Merge on main is the final step of any
  feature I will ask » → inscrite dans `CLAUDE.md`.

### 29 septembre — prix, légal, concurrents
- Demande de conseil : « tell me what's next… as an entrepreneur advisor…
  less than 10 lines… do the rest you do not need me for ».
- GA4 branché (`G-ZWDVH9Q1F3`), page `merci.html` + événement `purchase`,
  sitemap, robots.txt.
- **Médiateur de la consommation** : obligatoire en B2C (amende jusqu'à
  15 000 €). Option la moins chère : CM2C, 48 € pour 3 ans. Décision : « I take
  the risk to start without ». CGV reformulées, risque noté.
- **Prix** : « Raise the price to 49 € instead of 30 € ». Question posée
  (acompte ou prix total ?) → **49 € payés en une fois, 69 € barré** comme prix
  public prévu. Contrainte notée : le 69 € devra être le vrai prix ensuite.
- **Étude concurrents** : « take the best from them to make ours look above
  anyone ». Recherche en parallèle (acteurs français, apps automatiques,
  marques premium, pages de précommande), puis page renforcée : prix sous le
  héros, « sans abonnement », comparatif, feuille de route datée signée, date
  de livraison calculée à partir du mois de naissance, FAQ.

### 30 septembre — finitions et plan marketing
- Animations modernes et discrètes (CSS liées au défilement, respect de
  `prefers-reduced-motion`).
- `competitor.md` (synthèse de l'étude) et `TODO-marketing.md` (plan pubs,
  ciblage, budget, canaux gratuits), tous deux référencés dans `CLAUDE.md`
  pour les agents suivants.
- Nouveau lien Stripe de test à 49 €.

### 1er octobre — Meta
- « What could you do without my supervision? » → liste de ce qu'un agent fait
  seul (visuels, textes, UTM, e-mails, parrainage) vs ce qui exige le
  fondateur (comptes, argent, visage).
- « Is there an MCP for Facebook ads? » → oui, le connecteur officiel Meta Ads
  (crée campagnes et pubs **en pause**, lit les stats ; ne crée ni compte pub,
  ni pixel, ni page, et ne publie pas sur Instagram). Pour publier en
  organique : Metricool, remplacé le 3 octobre par Buffer (MCP
  `https://mcp.buffer.com/mcp`, gratuit, app la mieux notée).
- Le fondateur veut aller vite : « si je peux faire que des copier-coller dans
  tous les champs, c'est le mieux » → **guide artifact pas à pas avec un bouton
  « Copier » par champ** (page Facebook, Instagram, portefeuille, compte pub,
  pixel, Stripe live, GA4, connecteur), plus photo de profil et couverture
  générées aux couleurs du site.

### 2 octobre — mise en place réelle
- Blocage sur le pixel : introuvable dans les apps Meta → il ne se crée que
  dans un navigateur sur ordinateur (Gestionnaire d'événements).
- Le fondateur colle **le code du pixel** en croyant donner la balise de
  vérification du domaine. Pixel installé (événements standard `PageView`,
  `Lead`, `InitiateCheckout`, `Purchase`), balise redemandée.
- « Update the todo with all the things that look good, highlight what I need
  to do » → section « Où on en est » en tête de `TODO-marketing.md`, avec ce
  qui est **vérifié via le connecteur** et ce qui ne l'est pas.
- **Performance** : PageSpeed mobile à 61 ; « sans toucher à la qualité du
  rendu, il faut que tu optimises tout ça : c'est ton goal ». Résultat
  ~59 → ~90 en Lighthouse local, ordinateur 96 → 100, rendu comparé pixel à
  pixel. Détail en section 4. Une session parallèle a trouvé en plus que
  Cloudflare → GitHub Pages bloquait ~20 s une requête HTTPS sur quatre
  (remède côté Cloudflare, dans `TODO.md`).
- Sessions parallèles le même jour : photo « mois 9 » remplacée (c'était un
  adulte déguisé en bébé), citation sur l'amnésie infantile retirée, section
  problème allégée, argument « vos photos ne quittent pas l'iPhone » retiré.
- **Stripe live** : lien à 49 € branché.
- **GA4** : « tu peux pas créer pour moi les événements ? » → non (pas d'accès
  admin GA). Accompagnement par captures : passer par « Create with code »,
  sans valeur par défaut. Explication honnête : facultatif ici, utile
  seulement pour les canaux gratuits et l'A/B du titre.
- **Compte pub** : le fondateur pensait l'avoir créé ; le connecteur ne le
  voyait pas. Diagnostic par captures : le portefeuille existait, le compte pub
  non. Créé, puis visible.
- **Pixel au mauvais endroit** : celui posé sur le site appartenait au compte
  pub perso du fondateur, hors du portefeuille. Le compte pub, lui, était
  relié à un autre jeu de données créé entre-temps. Le site a été basculé sur
  celui du portefeuille, sans action du fondateur.
- Instagram relié au compte pub, domaine vérifié, boîte e-mail testée.
- **Règle de décision** : « what's the average numbers people usually take? I
  am new to testing a landing page » → repères donnés, règle adoptée (section 4).
- Todo vivante publiée en artifact (« done » résumés, « todo » avec étapes),
  mise à jour à chaque étape validée.

### 3 octobre — achat test, puis les pubs
- Achat test réel validé de bout en bout (Stripe, merci.html, Formspree, GA4,
  Meta) ; il a révélé le bug du double clic (section 5).
- Buffer branché pour publier sur Instagram et Facebook (comparatif des 6
  outils les plus notés de l'App Store).
- « Peut-être qu'il y a des skills, des connecteurs ou Claude Design qui
  pourraient t'aider ? Recherche ce que les gens plébiscitent » → recherche
  sur les 6 derniers mois : sur Meta, les images fixes restent le format le
  moins cher à produire et l'algorithme récompense la variété des angles ; la
  vidéo du fondateur face caméra est l'un des formats qui marchent le mieux
  en trafic froid ; outils cités : Canva (connecteur Claude), AdCreative.ai,
  Creatify/Arcads (acteurs IA), Advantage+ Creative de Meta. Retenu :
  **Claude Design** (type d'artifact « Design », déjà disponible, sans
  compte à créer), aux couleurs de la page.
- Visuels A, C, D, E en 4:5 et 9:16, vidéo démo B (l'animation de la page
  rejouée image par image, 14,5 s), textes, puis campagne créée **en pause**
  avec 4 pubs. Le connecteur ne sait pas encore téléverser une vidéo sur ce
  compte : B est à ajouter à la main.
- Relecture du fondateur, pub A (« 4 000 photos. 0 album. ») : « la première
  chose qui devrait être présentée, c'est que nous allons lui faire un livre
  photo sans qu'il n'y ait rien à faire. Là, on a l'impression de traiter
  uniquement des photos qui servent à rien. » → A refaite : « Son livre photo,
  sans rien faire », avec le livre ouvert de la page en grand. Règle pour
  toutes les pubs : **montrer le livre et dire qu'il n'y a rien à faire avant
  de parler du problème**.
- « Il faut supprimer la publicité E sur la vie privée, car je ne suis même
  pas sûr de conserver cette fonctionnalité dans le produit. » → pub E
  supprimée chez Meta, visuels retirés, mention « Analyse sur votre iPhone.
  Aucune photo envoyée » enlevée de la vidéo B. **Ne pas promettre en pub
  une fonction que le produit pourrait ne pas avoir.**
- Pub D (« 22 h, la maison dort. Et vous triez encore ses photos ») : « un
  petit peu blâmante et pessimiste… plutôt humoristique, avec la grimace
  d'une femme qui a l'air de dire : waouh, je fais trop de trucs ». → D
  refaite : maman qui lève les yeux au ciel, « Couches, biberons, lessives,
  siestes à négocier… et son album photo, on en parle ? Respirez : son livre
  se fait tout seul. » **Ton : jamais culpabiliser le parent ; l'humour
  complice plutôt que le reproche.**
- « Oui, je veux bien que tu retires aussi ces mentions » (vie privée sur la
  page) → retirées de la landing page : bandeau « Analyse sur votre iPhone »,
  note de la démo, phrase de l'étape 2, ligne « Où vont vos photos » du
  comparatif, « Tout se passe sur votre iPhone » sous le formulaire (remplacé
  par « Sans abonnement »), question FAQ « Est-ce que vous voyez mes
  photos ? », phrase du pied de page ; et phrase de Confidentialité.
  `competitor.md` marque l'argument comme retiré.
- « J'aime bien les pubs, mais il y a probablement des améliorations à
  apporter. Revois les visuels avec tout ce que tu sais des pubs qui
  fonctionnent sur Instagram ; commence par des recherches sur les sites
  spécialisés. » → recherche sur les six derniers mois (benchmarks Motion
  2026 sur 550 000 pubs Meta ; étude Curtis Howland de 67 852 pubs de 106
  marques DTC ; guides des zones sûres 2026 ; playbooks statiques de
  Superscale, Admetrics, Brandmov, Stirling) et Bibliothèque publicitaire
  Meta (Cheerz, Popsa, Nos Petites Aventures, Souvence). Ce qui en ressort,
  et qu'on a appliqué :
  - **une idée par visuel**, titre de 8 mots au plus, assez grand pour se
    lire en vignette (le fil affiche l'image à environ 36 % de sa taille) ;
  - **un sujet visuel net en moins d'une demi-seconde** : un visage, ou le
    produit tenu en mains ; les maquettes à plat et les photos de banque trop
    léchées font « pub » et convertissent moins ;
  - **le produit et l'offre visibles** sur l'image, moins de 20 % de la
    surface en texte, pas de paragraphe (le texte principal au-dessus porte
    le détail) ;
  - **zones sûres 9:16** unifiées par Meta en mars 2026 : 270 px en haut,
    670 px en bas, 65 px sur les côtés ;
  - les pubs simples (texte seul, produit + texte) sont parmi celles qui
    gagnent le plus souvent ; environ 5 % des pubs deviennent de vrais
    gagnants, d'où l'intérêt de tester plusieurs angles.
  Côté concurrents, toutes les pubs vendent la vitesse et la remise (Popsa
  « Livres photo en 5 minutes - 50 % », Cheerz « -20 % », « Créez votre
  album ») : « sans rien faire » reste un cran au-dessus de « 5 minutes ».
  Résultat (version 3 des visuels) : **A** = une vraie photo d'un livre
  ouvert tenu en mains, dans lequel notre double page est projetée (quatre
  coins → `matrix3d`, fondu `multiply` pour garder la lumière des pages et
  les pouces) ; **C** = photo plus grande, titre en trois lignes courtes,
  carte du livre ; **D** = photo resserrée sur la grimace, titre raccourci,
  une ligne de réponse. Les créations Meta sont recréées (voir pièges).

### 4 octobre — la quatrième pub, au format « natif »
- « Je veux bien que tu crées la 4ᵉ pub qui est censée bien marcher à
  froid. » → pub **G « Notification »** : une fausse capture de l'écran
  verrouillé d'un iPhone (fond d'écran = photo de bébé, heure, notification
  « Le livre de Léa est prêt », autocollant façon story « Ce qui arrivera
  3 semaines avant ses 1 an · app en préparation · précommande 49 € »).
  C'est le format « qui ne ressemble pas à une pub » que la recherche du
  3 octobre place parmi les meilleurs en trafic froid ; c'est aussi la
  scène clé de la vidéo B, en image fixe. Dessinée en HTML (pas de capture
  réelle : l'app n'existe pas), 4:5 et 9:16, dans le même canevas.
- « Pas besoin de cocher "contenu généré par IA" » : décision du fondateur,
  aucune déclaration sur les créations.
- Retouches de texte sur la page, à la demande du fondateur et d'un relecteur :
  citation sur les souvenirs retirée, chiffre « 3 mois » retiré, titre
  « Une seule minute. », promesse « vie privée » supprimée (quatre promesses
  suffisent), et « reconnaissance du visage » remplacé partout par le
  bénéfice d'abord (« l'app retrouve les photos où votre bébé apparaît »)
  puis la réassurance (« la détection se fait sur votre iPhone »).
- Le fondateur fournit une **planche de quatre visuels du livre** (couverture
  toile crème « Chapitre Un · 1 an » à l'or, dos, deux doubles pages) : « fais
  ce que tu veux pour les inclure ». Choix : les mettre en mosaïque dans la
  section « finitions », à la place de la couverture dessinée en CSS (prénom
  « Léa » doré). C'est la section qui parle de l'objet, et c'est la seule
  place où une vraie photo du produit vaut plus qu'une maquette. Pas dans
  l'accueil : la planche ne fait que 702 px par vue, trop peu pour un plein
  écran, et la maquette CSS de l'accueil montre les textes de chapitre, qu'on
  ne voit pas sur les visuels. Point à trancher : la couverture photographiée
  porte la marque, alors que le texte promet le prénom de l'enfant.
- « Ce tableau de comparaison est moche sur ordinateur. » Cause : les règles
  « tableau » étaient dans le bloc `@media (min-width:900px)`, mais les
  règles « cartes téléphone » venaient **après** dans le fichier et, à
  spécificité égale, les écrasaient : plus d'en-têtes de colonnes, critères
  en petites capitales, cartes séparées. Les règles de la comparaison sont
  désormais regroupées en un seul bloc, téléphone d'abord puis ordinateur,
  avec un vrai tableau : en-têtes, critères en Fraunces, colonne
  « Chapitre un » teintée avec une coche, tiret gris chez les autres.
- « Cette photo doit disparaître de tout notre site » : la photo mois 9
  (adulte déguisé en bébé) était réapparue dans la galerie. Elle avait été
  remplacée dans le `.jpg` dès le 28 septembre, mais les `.webp` (générés
  pendant le chantier performance, depuis l'ancien `.jpg`) l'avaient gardée,
  et c'est le WebP que la page affiche. WebP refaits depuis le bon `.jpg`
  (père qui soulève son bébé). Vérifié que l'image n'est nulle part ailleurs
  (planche de toutes les images du site et des pubs, images de la vidéo B).
  Piège noté dans `CREDITS.md` : vérifier les WebP, pas seulement les JPG.

### 5 octobre — lancement
- « est-il possible de cibler des usagers avec un fort pouvoir d'achat ? »
  → pas de ciblage par revenu en France chez Meta (seulement aux
  États-Unis). Approximations possibles : modèles d'iPhone récents, codes
  postaux aisés, centres d'intérêt (peu fiables). Non retenu : le test doit
  dire si des parents ordinaires achètent à 49 € ; un public aisé gonflerait
  la conversion. Si besoin plus tard : un second ensemble « iPhone récents »
  comparé à l'actuel.
- « go » → campagne, ensemble et 5 pubs activés via le connecteur Meta ;
  fin de l'ensemble programmée le 14 octobre à 23 h 59 (10 jours,
  ≈ 100 €). Juste après l'activation, les pubs sont « en cours d'examen ».

## 4. Décisions et leurs raisons

| Décision | Pourquoi | Conséquence à surveiller |
|---|---|---|
| Merger sur `main` sans demander | Demande explicite du fondateur | Toujours vérifier en ligne après merge (le site se déploie au merge) |
| GA4 et pixel Meta **sans bandeau de consentement** | Choix du fondateur, risque CNIL assumé | Mentionné dans la page Confidentialité ; à revoir si le projet dure |
| Pas de médiateur de la consommation au départ | Risque assumé, coût jugé inutile pendant le test | CM2C 48 €/3 ans dès qu'il y a de vrais clients |
| 49 € payés en une fois, 69 € barré | Mesurer une vraie intention d'achat, pas un acompte | Le 69 € doit être le prix réel après lancement (sinon prix de référence trompeur) |
| Remboursable sans condition jusqu'à l'expédition | Lever le frein « l'app n'existe pas » | Promesse à tenir |
| Compteur fondateur simulé (+1/jour) | Vitesse ; pas de source fiable | À brancher sur les vraies ventes |
| Photos CC0 sur la page | Rien d'autre au départ | Pas d'accord des personnes photographiées : risqué en pub payante |
| Photos des pubs : Pexels et Unsplash (3 oct.) | Gratuit et le plus simple ; le fondateur voulait payer les droits « après les premiers achats » | Une banque payante sans licence = contrefaçon dès la diffusion, payer après ne régularise pas : refusé. Pas d'accord des personnes photographiées garanti : risque assumé. Alternative légale gratuite : essai Adobe Stock |
| GA4 et Meta chargés **à la première interaction ou après 8 s** | +30 points PageSpeed mobile | Un visiteur qui repart en < 8 s sans rien toucher n'est pas compté → compter les visites avec les « clics sur le lien » de Meta |
| Polices auto-hébergées (fichiers Google réduits aux caractères latins, mêmes métriques) | Supprimer la requête bloquante vers Google Fonts | Si un nouveau caractère apparaît (autre langue), régénérer le sous-ensemble |
| `content-visibility` essayé puis retiré | Aucun gain mesuré, et il change la fusion des marges | — |
| Événements clés GA4 sans valeur par défaut | Sinon GA4 compte 1 $ par précommande ; seul `purchase` porte un montant (49 €) | Devise de la propriété GA4 à mettre en euros |
| Pixel du **portefeuille** (`1461301452516353`) plutôt que le premier créé | Le compte pub ne peut optimiser que sur un pixel qui lui est relié | — |
| **Règle de décision** fixée avant de dépenser | Ne pas interpréter les chiffres après coup | Voir ci-dessous |
| Visuels des pubs dans **Claude Design** (3 oct.) | Déjà disponible, canevas modifiable par le fondateur, rendu exportable en PNG | Canva (connecteur) reste possible si le fondateur veut retoucher lui-même |
| Campagne « Ventes » optimisée sur **`InitiateCheckout`**, pas `Purchase` | Pixel neuf, aucun achat réel : Meta ne peut pas apprendre sur `Purchase` à 20 €/jour | Passer sur `Purchase` si les achats dépassent ~10 par semaine |
| **20 €/jour** au niveau campagne, une seule audience large | Haut de la fourchette du plan (15–20 €/jour, 300–500 € au total) ; 4 à 5 pubs dans un seul ensemble pour que Meta répartisse | 280 € sur 14 jours |
| Budget ramené à **10 €/jour pendant 10 jours** (4 oct., avant lancement) | 280 € jugé trop cher par le fondateur pour un premier test | 100 € au total ; ~150–250 visites attendues, signal plus faible : si le résultat tombe dans la zone grise, prolonger plutôt que conclure |
| **Instagram uniquement, mobile uniquement** (4 oct., avant lancement) | Le filtre iOS ne s'applique qu'aux mobiles : sans ça, des internautes sur ordinateur voyaient la pub. Audience Network et Threads faussent le taux de clic (clics accidentels). Facebook retiré aussi, par choix du fondateur | Remettre Facebook si le coût par clic Instagram est trop élevé |
| Audience Advantage+ : France, iPhone (iOS), 25 ans min., 25–40 ans en **suggestion** | Meta refuse un âge maximum ferme sous 65 ans avec Advantage+ | Vérifier la répartition par âge au bilan |
| **30–45 ans ferme**, Advantage+ audience désactivée (4 oct., avant lancement) | Choix du fondateur : âge des parents d'un premier bébé avec un iPhone ; seul moyen d'avoir un âge maximum ferme | Audience plus petite, coût par clic possiblement plus élevé : réactiver Advantage+ si la diffusion peine |
| **Femmes uniquement** (4 oct., avant lancement) | Choix du fondateur : les mères sont la cible principale du livre de naissance | Les pères ne sont pas testés ; à envisager dans un second tour |
| Bouton **« Commander »** (`ORDER_NOW`) | « Précommander » n'existe pas chez Meta | — |
| Visuels **v3** refaits d'après les benchmarks 2026 (3 oct. soir) | Une idée par visuel, titre court et grand, visage ou livre en mains, texte < 20 %, zones sûres 9:16 | Comparer au bilan le CTR des trois ; si tout est < 0,8 %, c'est le message, pas la mise en page |

**Règle de décision** (adoptée le 2 octobre) : après 500 visites venues des
pubs ou 14 jours, au premier des deux termes (ramené à 10 jours le
4 octobre, avec le budget).

| Résultat | Décision |
|---|---|
| ≥ 2 % paient, ou coût par achat ≤ 25 € | On construit |
| 0,5–2 %, ou 25–60 € par achat | On retravaille message ou prix, un tour de plus |
| < 0,5 % et < 5 % de liste d'attente | On arrête ou on change d'offre |

Repères donnés au fondateur : précommande payante d'un produit inexistant,
trafic froid → 0,5–2 % habituel, ≥ 3 % excellent ; liste d'attente gratuite
→ 5–15 % ; clic Meta en France ≈ 0,30–1 €. Marge ≈ 25 €/livre, hypothèse à
confirmer avec un devis d'imprimeur.

## 5. Pièges rencontrés (à éviter la prochaine fois)

**Côté mesure**
- **Faire un vrai achat test et regarder les compteurs.** Celui du 3 octobre a
  montré 3 `preorder_start` pour 1 achat : la page attend ~1 s avant Stripe
  (envoi Formspree + GA4/Meta) et chaque clic pendant l'attente relançait
  tout. Verrou anti double clic ajouté (PR #33). Meta affiche les événements
  avec ~1 h de retard (agrégats horaires) : ne pas conclure trop tôt.

**Côté Meta**
- **Code du pixel ≠ balise du domaine.** La balise est une seule ligne
  `<meta name="facebook-domain-verification" content="…">`, trouvée dans
  Paramètres du portefeuille → Sécurité de la marque → Domaines. Montrer un
  exemple de la ligne attendue quand on la demande.
- **Le pixel ne se crée pas dans les apps Meta**, seulement dans un navigateur
  (Gestionnaire d'événements ou Paramètres → Sources de données).
- **Un pixel créé depuis le compte pub perso n'appartient pas au portefeuille.**
  Vérifier avec le connecteur (`ads_get_datasets` sur le compte pub) que le
  pixel posé sur le site est bien celui relié au compte pub.
- **« J'ai créé le compte pub » ne suffit pas.** Le connecteur ne découvre un
  portefeuille qu'à travers ses comptes pub : s'il ne voit pas le portefeuille,
  c'est presque toujours qu'il n'a pas de compte pub. Demander la capture de
  Paramètres → Comptes → Comptes publicitaires.
- **Après tout ajout d'élément** (compte pub, page, Instagram, pixel), il faut
  reconnecter le connecteur Meta Ads en cochant l'élément, parfois puis ouvrir
  une nouvelle session.
- **Instagram se relie au compte pub à part**, une fois mis dans le portefeuille
  (Comptes Instagram → Connecter les éléments). Vérifier avec
  `ads_get_ig_accounts`.
- **« Tester les évènements » peut rester vide** (bloqueur de pub, Safari,
  navigation privée) alors que le pixel marche : vérifier plutôt avec
  `ads_get_dataset_stats`.
- L'onglet « Actions » du pixel pousse l'API Conversions et la messagerie :
  inutile pour un test de 14 jours.

**Côté connecteur Meta Ads (3 octobre)**
- `ads_creative_upload_media` « en cours de déploiement » sur le compte :
  aucun téléversement d'image ni de vidéo. Contournement pour les images :
  `image_url` directement dans `ads_create_creative` (fichiers publiés dans
  `pubs/` sur `main`, lus via raw.githubusercontent.com). Pas de contournement
  pour la vidéo : à ajouter à la main dans le Gestionnaire de publicités.
- Une image par placement (4:5 fil, 9:16 Stories) : refusée, « pas encore
  activé pour ce compte ». Les pubs partent en 4:5 seul ; le 9:16 s'ajoute à
  la main (« Personnaliser le visuel par placement »).
- Création de l'ensemble refusée avec un message vague (« request a review »,
  sous-code 3858196) dès qu'on ajoute âge maximum ou système d'exploitation :
  créer l'ensemble avec le pays seul, puis le modifier. Âge maximum ferme
  < 65 interdit avec Advantage+ : passer `age_range` en suggestion.
- La description n'apparaît ni dans le fil Facebook ni sur Instagram pour une
  image seule : ne rien y mettre d'important.
- Meta **télécharge l'image au moment où la création publicitaire est
  créée** : remplacer le fichier à la même URL ne change pas la pub en
  ligne, il faut recréer la création et la pub (et supprimer l'ancienne). De
  plus, raw.githubusercontent.com garde l'ancien fichier en cache quelques
  minutes après un merge : vérifier le `sha256` du fichier servi avant de
  créer la création.

**Côté visuels (3 octobre, soir)**
- Projeter notre double page dans la photo d'un vrai livre : relever les
  quatre coins de chaque page sur la photo (zooms quadrillés), calculer
  l'homographie page → coins (système 8×8 résolu à la main, pas de numpy
  dans l'environnement : `homog.py`), l'appliquer en CSS `matrix3d`, et
  poser la page en `mix-blend-mode: multiply` pour garder l'ombre du papier
  et les doigts qui tiennent le livre. Rendu une fois en JPG, puis utilisé
  comme simple image dans le canevas.
- Unsplash : la recherche passe par `unsplash.com/napi/search/photos`
  (bloquée pour curl par le contrôle anti-robot, accessible via WebFetch) ;
  les images se téléchargent librement sur `images.unsplash.com`. Reprendre
  les photos en 2 000 px et plus dès qu'on recadre serré.

**Côté Google et Stripe**
- Dans GA4, « Create an event / Create without code » fabrique un **nouvel**
  événement à partir d'un autre : ce n'est pas ce qu'on veut. Pour un événement
  déjà envoyé par le site : nom exact, « Mark as key event », « Don't set a
  default value », **« Create with code »**.
- La redirection Stripe *After payment* se règle **lien par lien** : à refaire
  sur chaque nouveau lien (test puis live).
- L'API PageSpeed Insights a un quota quotidien partagé : mesurer avec
  Lighthouse en local (voir README) plutôt que d'en dépendre.

**Côté environnement de l'agent**
- Le navigateur de test sans réseau ne charge pas Google Fonts : une
  comparaison visuelle « avant/après » peut montrer de fausses différences.
  Donner au navigateur l'accès réseau du proxy avant de comparer.
- Le port et l'autorité du proxy changent quand la session redémarre : les
  relire dans `$HTTPS_PROXY` et `/root/.ccr/` à chaque fois.

**Côté méthode**
- Ne pas affirmer de mémoire un fait réglementaire : j'avais recommandé
  Médicys comme médiateur, il n'est plus agréé depuis 2021. Vérifier.
- Quand un montant est ambigu (acompte ou prix total ?), demander avant de
  modifier les CGV et la page.
- Vérifier soi-même plutôt que de croire « c'est fait » : le connecteur Meta
  permet de confirmer chaque étape, et ça a révélé deux erreurs de
  configuration.

## 6. Playbook pour refaire la même chose

1. **Page statique** sur GitHub Pages, un seul dossier publié, test A/B du
   titre, événements dans `dataLayer`. Photos libres en attendant, avec
   crédits.
2. **Formulaire** (Formspree), **paiement** (Stripe Payment Link, redirection
   vers une page merci), **pages légales** (mentions, CGV de prévente,
   confidentialité) avec les vraies infos de la société.
3. **Prix et promesses** décidés avec le fondateur, écrits dans les CGV. Prix
   barré = prix réel futur.
4. **Étude concurrents** → `competitor.md`, et page renforcée à partir de ce
   qui marche ailleurs (prix visible tôt, comparatif, transparence sur l'état
   du projet, date de livraison).
5. **Mesure** : GA4 + pixel Meta, chargés en différé, événements standard
   (`Lead`, `InitiateCheckout`, `Purchase`). Mettre à jour la page
   Confidentialité.
6. **Meta**, dans cet ordre : page Facebook → Instagram pro → portefeuille →
   **compte pub dans le portefeuille** → pixel **dans le portefeuille**, relié au
   compte pub → domaine vérifié → Instagram relié au compte pub → connecteur
   reconnecté. Vérifier chaque étape avec le connecteur.
7. **Performance** avant de payer du trafic : polices locales, images WebP
   responsives, recadrage mobile de l'image d'accueil, scripts tiers différés.
   Vérifier que le rendu est identique (captures comparées).
8. **Règle de décision écrite avant la première dépense.**
9. **Achat test réel** puis remboursement, pour valider paiement, redirection
   et événement d'achat de bout en bout.
10. Ensuite seulement : visuels, textes, campagne créée **en pause**, relue
    par le fondateur, activée par lui.

## 7. Travailler avec ce fondateur

- Il veut **aller vite** et décide vite. Réponses courtes, une recommandation
  plutôt qu'un catalogue d'options.
- Il préfère **copier-coller** : donner les valeurs exactes de chaque champ.
- Il avance **par captures d'écran** : quand il bloque, lui dire précisément
  quelle capture envoyer.
- Il accepte des risques juridiques en connaissance de cause : les signaler une
  fois clairement, noter le choix, ne pas y revenir.
- Il apprécie qu'on fasse soi-même ce qui ne demande pas sa main (bascule de
  pixel, corrections), puis qu'on le lui dise.
- Il travaille en parallèle avec d'autres sessions : toujours repartir de
  `origin/main` à jour.

## 8. État au 5 octobre 2026

Fait : page en ligne et rapide, paiement live, GA4 et pixel vérifiés,
portefeuille, compte pub, page, Instagram et domaine Meta en place, règle de
décision fixée, Buffer connecté, achat test validé de bout en bout,
**pubs prêtes** : visuels A, C, D (4:5 et 9:16, refaits le soir d'après les
bonnes pratiques 2026), vidéo démo B, textes (`pubs/tour-1/`), campagne
« Test 1 » créée **en pause** avec les pubs A, C, D et G (notification
iPhone, format natif, 4 octobre ; E, vie privée, supprimée à la relecture) (canevas : https://claude.ai/artifact/Ku993NrFX88eBuqkq9ww26).

**Campagne lancée le 5 octobre** (5 pubs A, B, C, D, G ; femmes 30–45,
iPhone, Instagram ; 10 €/jour ; arrêt automatique le 14 octobre).
Reste : vérifier la diffusion et le pixel, couper les pubs faibles à
J+3/J+5, bilan à J+10 ; vidéo face caméra (pub F), message aux parents de
l'entourage. Détail : `TODO-marketing.md`.
