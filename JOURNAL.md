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
  organique : Metricool.
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
| GA4 et Meta chargés **à la première interaction ou après 8 s** | +30 points PageSpeed mobile | Un visiteur qui repart en < 8 s sans rien toucher n'est pas compté → compter les visites avec les « clics sur le lien » de Meta |
| Polices auto-hébergées (fichiers Google réduits aux caractères latins, mêmes métriques) | Supprimer la requête bloquante vers Google Fonts | Si un nouveau caractère apparaît (autre langue), régénérer le sous-ensemble |
| `content-visibility` essayé puis retiré | Aucun gain mesuré, et il change la fusion des marges | — |
| Événements clés GA4 sans valeur par défaut | Sinon GA4 compte 1 $ par précommande ; seul `purchase` porte un montant (49 €) | Devise de la propriété GA4 à mettre en euros |
| Pixel du **portefeuille** (`1461301452516353`) plutôt que le premier créé | Le compte pub ne peut optimiser que sur un pixel qui lui est relié | — |
| **Règle de décision** fixée avant de dépenser | Ne pas interpréter les chiffres après coup | Voir ci-dessous |

**Règle de décision** (adoptée le 2 octobre) : après 500 visites venues des
pubs ou 14 jours, au premier des deux termes.

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

## 8. État au 2 octobre 2026 au soir

Fait : page en ligne et rapide, paiement live, GA4 et pixel vérifiés,
portefeuille, compte pub, page, Instagram et domaine Meta en place, règle de
décision fixée.

Reste au fondateur : l'achat test de 49 € (puis remboursement), le choix de
la source des photos de pub, Metricool en option.

Reste à l'agent ensuite : visuels A à E et vidéo démo, textes des pubs,
campagne créée en pause dans Meta. Détail : `TODO-marketing.md`.
