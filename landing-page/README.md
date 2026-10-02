# Landing page — Le livre des 1 an

Page unique, mobile d'abord, en français. Trois fichiers plus un dossier de
photos, aucune dépendance, aucun build : `index.html`, `styles.css`,
`script.js`, `assets/photos/`.

Nom retenu et tranché : **Chapitre un** (le brief le notait `[Nom]`).

## Lancer en local

```bash
python3 -m http.server 4173 --directory landing-page
# puis http://localhost:4173
```

Les polices (Fraunces, Inter) viennent de Google Fonts : il faut du réseau.
Sans réseau, les replis serif/sans-serif système prennent le relais.

| URL | Effet |
| --- | --- |
| `?t=a` | titre « se fait tout seul » |
| `?t=b` | titre « en 5 minutes » |
| `?debug` | chaque événement de mesure dans la console |

## Structure

Onze sections. Les sept du brief sont toutes là, dans l'ordre, complétées par
quatre blocs repris de la structure des pages concurrentes.

| # | Section | Ancre | Rôle |
| --- | --- | --- | --- |
| 1 | Accueil | `#top` | Photo plein écran, promesse, deux boutons |
| — | Bandeau de garanties | — | Cinq réassurances sur fond sombre |
| 2 | Le problème | `#le-probleme` | 4 000 / 0 / 3 mois, pellicule, bascule éditoriale |
| 3 | Comment ça marche | `#comment` | Trois étapes + iPhone animé |
| 4 | À quoi ressemble le livre | `#le-livre` | Carrousel de cinq doubles pages |
| 5 | Ce qui change | `#ce-qui-change` | Les cinq arguments, chacun avec sa démo |
| 6 | Les finitions | `#finitions` | L'objet : couverture, papier, format |
| 7 | Le prix | `#prix` | Deux offres, tout compris, « tout ce que vous obtenez » |
| 8 | Comparaison | `#comparaison` | Sept lignes, sans nommer personne |
| 9 | Où en est le projet | `#projet` | Feuille de route datée + mot signé, **avant** le formulaire |
| 10 | Réservation | `#reserver` | Formulaire ; le mois choisi affiche la date du livre |
| 11 | Questions | — | Neuf questions, dont les deux freins du brief |

## Ce qui vient de l'étude des concurrents (septembre 2026)

Trois relevés : les acteurs français (Cheerz, Photoweb, Rosemood, Fizzer,
Lalalab, Popsa, CEWE), les apps « automatiques » (Chatbooks, Once Upon, Journi,
Popsa, FamilyAlbum, Tinybeans, Mixtiles, PastBook) et les marques premium
(Artifact Uprising, MILK, Blurb, Saal, Social Print Studio). Ce que la page en
retient :

- **Prix + garantie collés au bouton du héros** (« 49 € tout compris ·
  remboursable · sans abonnement ») — la question « combien ? » est réglée avant
  de défiler. Personne ne le fait en France.
- **« Sans abonnement » dit explicitement** : Chatbooks, Tinybeans, FamilyAlbum
  facturent au mois et leurs avis s'en plaignent. Un livre, un prix.
- **Trois promesses que personne ne fait** poussées dans le tableau : les textes
  sont écrits, les photos restent sur l'iPhone, pas d'abonnement. Toutes les
  apps « IA » demandent encore de choisir les photos soi-même.
- **Feuille de route datée et mot signé avant le formulaire** : les études sur
  le financement participatif montrent qu'annoncer les risques augmente la
  confiance plus qu'elle ne la coûte, à condition d'être précis.
- **Date de livraison, pas délai** : le formulaire calcule, à partir du mois de
  naissance, quand le livre sera prêt — ou dit franchement que ses 1 an
  arriveront avant l'app (`APP_READY` dans `script.js`).
- **Ce qu'on ne copie pas** : compteurs d'avis, « 4 millions de livres »,
  promos à durée limitée, prix barré sans prix futur réel.

## Ce qui vient de l'analyse de la page concurrente

La page de référence a été analysée pour sa structure, son rythme et son
registre — **aucun texte ni aucune image n'en a été repris**.

- **Accueil en photo plein écran**, titre par-dessus, plutôt qu'une mise en page
  en deux colonnes. C'est le parti pris le plus visible de leur page.
- **Chaque argument porte une démonstration visuelle**, pas une icône : la
  pellicule qui se coche seule, le calendrier, la comparaison de recadrage, le
  sommaire, le trajet des photos.
- **Section « finitions »** consacrée à l'objet physique.
- **Galerie des pages du livre**, l'équivalent de leur mur de produits.
- **Bouton de réservation répété** à l'identique du haut en bas de la page.
- **Sous-titre systématique** sous chaque titre de section.
- **Pas de faux avis.** Leur page s'appuie sur 75 000 avis vérifiés ; nous n'avons
  livré aucun livre. La section « Où en est le projet » dit exactement cela, et
  le dit mieux qu'un témoignage inventé.

### Prix

Relevé sur leur page produit en septembre 2026 : **à partir de 38 €** pour un
livre à couverture rigide de 20 pages, format 8″ × 6″, papier mat 200 g, hors
livraison. Notre page affiche 49 € (tarif fondateur, payé en une fois, au lieu de 69 €) pour 60 à 80 pages en
21 × 21 cm, livraison offerte, et le rappelle en note sous les offres et dans le
tableau de comparaison. **À revérifier avant la mise en ligne** : c'est une
affirmation comparative, elle doit rester exacte et vérifiable.

## Ce qui est branché, ce qui ne l'est pas

Tout est regroupé dans `CONFIG`, en haut de `script.js` :

| Constante | Rôle | État |
| --- | --- | --- |
| `ENDPOINT` | POST JSON de l'inscription | **branché sur Formspree** |
| `STRIPE_CHECKOUT_URL` | Lien Stripe Checkout des 49 € (prix total) | **branché, mode test** |
| `HEADLINE_B` | Titre de la variante B | prêt |
| `FOUNDER_START_DATE` / `FOUNDER_START_COUNT` | Compteur fondateur | **simulé** |

`ENDPOINT` pointe vers un formulaire Formspree : chaque inscription part en POST
JSON et déclenche un e-mail de notification. `STRIPE_CHECKOUT_URL` pointe vers
un lien de paiement Stripe **en mode test** (`buy.stripe.com/test_...`) : aucun
argent réel ne circule tant qu'il n'est pas remplacé par l'équivalent en mode
live. À basculer en mode live une fois les pages légales publiées (obligatoire
avant d'encaisser réellement).

Le compteur fondateur (`[data-founder]`) est simulé : il part de
`FOUNDER_START_COUNT` places prises le `FOUNDER_START_DATE` et augmente d'une
place par jour, calculé côté client à chaque chargement de page. Ce n'est pas
le vrai nombre de précommandes — à remplacer par un compteur réel (Stripe ou
base d'inscrits) dès qu'il existe.

`assets/photos/og.jpg` (1200 × 630) est un recadrage de `hero.jpg` généré pour
le partage social — à remplacer par un visuel dédié si besoin, mais fonctionnel
tel quel (`og:image`, `og:image:width/height`, `twitter:card` renseignés).

Reste à faire : les photos définitives (voir
[`assets/photos/CREDITS.md`](assets/photos/CREDITS.md)) et le vrai compteur du
tarif fondateur, une fois une source de données réelle disponible.

Les trois pages légales existent désormais : `mentions-legales.html`,
`cgv-prevente.html`, `confidentialite.html`, liées depuis le pied de page.
Éditeur : ANCHOR (SASU), RCS Nanterre 852 423 318. Avant de basculer Stripe en
mode live, compléter l'article 7 des CGV avec les coordonnées d'un médiateur de
la consommation (obligatoire pour un vendeur B2C en France).

## Animations

Toutes en CSS (sauf le halo du formulaire), sans bibliothèque, et **coupées
pour les visiteurs qui ont demandé moins d'animations** (`prefers-reduced-motion`).

- **Au chargement** : la photo du héros se pose lentement (léger zoom arrière),
  le texte sort d'un flou, et la chute en italique du titre arrive en second.
- **Liées au défilement** (`animation-timeline`, Chrome / Edge / Safari récents ;
  ailleurs la page reste simplement immobile) : fil de lecture sous la nav,
  parallaxe de la photo du héros, photos de la pellicule qui tombent en place,
  double page du centre mise au point dans la galerie, maquettes qui montent,
  fil de la feuille de route qui se colore.
- **En continu, discrètes** : bandeau des douze chapitres (pause au survol),
  lueur qui fait le tour de l'offre fondateur, point « Vous êtes ici » qui pulse.
- **Au survol** : reflet sur les boutons principaux, halo chaud qui suit la
  souris sur le formulaire.
- **Cascades** : lignes du tableau comparatif, du prix, de la feuille de route et
  de la FAQ qui arrivent l'une après l'autre.

## Mesure

`analytics.js` charge Google Analytics 4 sur les quatre pages du site — identifiant
`GA_MEASUREMENT_ID` = `G-ZWDVH9Q1F3`. **Aucun bandeau de consentement
n'est posé avant le dépôt des cookies GA** : choix assumé du projet, à
reconsidérer si une mise en conformité RGPD/CNIL devient nécessaire.

`script.js` pousse chaque événement dans `window.dataLayer` **et** émet un
`CustomEvent('track')` ; `analytics.js` relaie chacun de ces événements (sauf
`page_view`, déjà compté par GA4) vers `gtag('event', …)`.

| Événement | Quand |
| --- | --- |
| `page_view` | chargement (`variant`, `source`, `campaign`) |
| `section_view` | 40 % d'une section visible (`section`) |
| `cta_click` | clic sur un bouton suivi (`id`) |
| `gallery_nav` | navigation dans le carrousel (`dir`) |
| `preorder_start` | soumission « Précommander » (`birth_month`) |
| `waitlist_signup` | clic « Juste être prévenu » (`birth_month`) |
| `form_error` | validation refusée (`intent`) |

Le test A/B répartit 50/50, mémorise dans `localStorage`, et la variante voyage
avec chaque événement.

## Sources du cadrage éditorial

Le texte de la section « Le problème » ne culpabilise pas : il nomme la charge
mentale, puis déplace l'enjeu sur l'amnésie infantile — l'enfant ne gardera
aucun souvenir de sa première année, le parent en est le seul dépositaire.

- Amnésie infantile : les premiers souvenirs n'apparaissent qu'entre 3 et 5 ans,
  moyenne vers 3 ans et demi
  ([The Conversation](https://theconversation.com/ou-sen-vont-nos-souvenirs-denfance-156442),
  [Québec Science](https://www.quebecscience.qc.ca/sciences/mystere-amnesie-nourrissons/)).
  C'est la seule affirmation factuelle de la section.
- Charge mentale : 8 femmes sur 10 la déclarent
  ([Ipsos](https://www.ipsos.com/fr-fr/charge-mentale-8-femmes-sur-10-seraient-concernees)) ;
  près de 40 % des parents d'enfants de moins de 12 ans manquent de temps pour
  eux chaque semaine (DREES, 2024) ; les mères ont ~3 h 10 de temps libre
  hebdomadaire de moins que les pères
  ([INSEE](https://www.insee.fr/fr/statistiques/fichier/1303226/ES478E.pdf)).
  Ces chiffres ont servi à écrire la page, **ils n'y sont pas affichés** : une
  landing page qui cite une étude se met à parler comme un rapport. À garder
  pour les créas Meta.

## Vérifications faites

- **320 / 375 / 390 / 430 / 768 / 1024 / 1440 px** : aucun débordement
  horizontal, 43 images, aucune cassée.
- **Champs du formulaire à 16,32 px** : pas de zoom automatique iOS.
- **Cibles tactiles ≥ 44 px** (repère Apple) ; la case à cocher fait 22 px mais
  son libellé cliquable en fait 44.
- **Barre collante** : `bottom: max(12px, env(safe-area-inset-bottom))`.
- **Ancres** : `scroll-margin-top` de 74 px.
- **Formulaire** : vide → 3 erreurs ; e-mail invalide → 1 erreur ; valide →
  confirmation + `preorder_start` avec le mois de naissance.
- **Carrousel** : les cibles de défilement tombent exactement sur les points
  d'aimantation (centre de carte), la dernière se cale sur la fin de piste.

## Accessibilité et performance

- PageSpeed mobile (Lighthouse) : 59–61 → 90 en octobre 2026, ordinateur
  96 → 100, rendu identique (captures comparées pixel à pixel avant/après).
  Ce qui a été fait :
  - **Polices servies par le site** (`assets/fonts/`) : les fichiers Google
    d'origine, réduits aux caractères latins, mêmes axes et métriques. Plus de
    feuille Google Fonts bloquante ; Fraunces et Inter sont préchargées.
  - **Photos en WebP** (−55 % de poids), avec des variantes `-400` en `srcset`
    pour les vignettes. Les `.jpg` restent comme sources (et `og.jpg` pour les
    aperçus de liens). Sur téléphone en portrait, l'accueil charge
    `hero-portrait.webp`, le recadrage exact de la zone visible
    (`object-position` 64 %) : mêmes pixels, 3× plus léger.
  - **GA4 et pixel Meta différés** (`analytics.js`) : `gtag()` et `fbq()`
    mettent en file d'attente dès le départ ; les ~300 Ko de bibliothèques se
    chargent à la première interaction ou 8 s après le chargement, tout de
    suite sur `merci.html`. Un visiteur qui repart en moins de 8 s sans rien
    toucher n'est donc compté ni par GA4 ni par Meta : pour la règle de
    décision, compter les visites avec les « clics sur le lien » de Meta.
    Avant la redirection vers Stripe, `script.js`
    attend `__cuFlush()` (300 ms à 1,2 s) pour que `InitiateCheckout` parte.
  - `analytics.js` et `script.js` en `defer`.
  - Essayé puis retiré : `content-visibility` sur les sections (aucun gain
    mesuré, et il modifie la fusion des marges).
- La photo d'accueil est préchargée, les autres en `loading="lazy"`.
- `prefers-reduced-motion` coupe toutes les animations ; la démo iPhone se fige
  sur la notification, le titre doré ne scintille plus.
- Sans JavaScript, tout le contenu reste visible, le formulaire s'affiche et la
  barre de navigation reste lisible (elle n'est transparente que si le JS tourne).
- Un filet de sécurité dans le `<head>` révèle toute la page si `script.js` ne se
  charge pas, et un second si `IntersectionObserver` reste inerte.
