# Site — hypnose pour arrêter de fumer

Page unique (Guillaume Lancrenon, 2 séances, Asnières-sur-Seine ou visio),
mobile d'abord, en français, sans dépendance ni build. Réservation par
l'agenda Google (liens `data-book`, événement `booking_click`). Design :
pétrole profond, air minéral, accent couleur d'aube ; Instrument Serif et
Figtree auto-hébergées ; une seule animation (la volute de fumée de
l'accueil). Publiée
telle quelle par GitHub Pages (`.github/workflows/pages.yml` publie ce dossier
à la racine du site à chaque push sur `main`).

| Fichier | Rôle |
|---|---|
| `index.html` | La page : accueil, « vous n'êtes pas seul », déroulé en 2 séances, réponses aux craintes, qui je suis, médecin, tarif, FAQ, réservation. |
| `styles.css` | Styles. Couleurs et polices dans les variables de `:root`. |
| `script.js` | Formulaire (Formspree puis Stripe), apparitions au défilement, test A/B du titre, événements de mesure. Réglages dans `CONFIG`. |
| `analytics.js` | GA4 et pixel Meta, chargés en différé. Identifiants en tête de fichier. |
| `merci.html` | Retour de Stripe après paiement : envoie l'événement `purchase`. |
| `mentions-legales.html`, `confidentialite.html` | Pages légales ; les `[crochets]` attendent les infos listées dans `TODO.md`. |
| `robots.txt`, `sitemap.xml` | Domaine chapitreun.com. |
| `assets/fonts/` | Instrument Serif (titres) et Figtree (texte), auto-hébergées. |

## Brancher les services

Tout est désactivé tant que les identifiants sont vides : la page fonctionne
en démonstration (le formulaire affiche « C'est noté » sans rien envoyer).

1. **Formulaire** : créer un formulaire sur formspree.io, coller l'URL dans
   `CONFIG.ENDPOINT` (`script.js`).
2. **Paiement** : créer un Payment Link Stripe, coller l'URL dans
   `CONFIG.STRIPE_CHECKOUT_URL` et le montant dans `CONFIG.PRICE`. Le bouton
   « Réserver et payer en ligne » apparaît alors. Dans Stripe, régler
   *After payment* → redirection vers `https://[domaine]/merci.html` (à
   refaire sur chaque lien, test puis live), et mettre le même montant dans
   `PRICE` de `merci.html`.
3. **Mesure** : `GA_MEASUREMENT_ID` et `META_PIXEL_ID` dans `analytics.js`.
   Dans GA4, marquer `lead`, `checkout_start` et `purchase` comme événements
   clés (« Create with code », sans valeur par défaut).
4. **Domaine** : dépôt → *Settings* → *Pages* → *Custom domain*.

## Événements

`track(nom, données)` dans `script.js` pousse dans `dataLayer` ; `analytics.js`
relaie vers GA4 (tous sauf `page_view`) et Meta :

| Événement | Quand | Meta |
|---|---|---|
| `page_view` | chargement (avec `utm_source`, `utm_campaign`) | `PageView` |
| `section_view` | une section avec `id` devient visible | — |
| `cta_click` | clic sur un élément `data-track="…"` | — |
| `booking_click` | clic vers l'agenda de réservation (`data-book`) | `Schedule` |
| `calc_use` | première utilisation du calculateur « Ce que vous coûte la cigarette » | — |
| `lead` | formulaire envoyé (aucun formulaire sur la page actuelle) | `Lead` |
| `checkout_start` | départ vers Stripe | `InitiateCheckout` |
| `purchase` | `merci.html` | `Purchase` |
| `form_error`, `form_network_error` | erreurs du formulaire | — |

`?debug` dans l'URL affiche les événements dans la console. `?t=a` ou `?t=b`
force la variante du titre quand `CONFIG.HEADLINE_B` est rempli.

## Vérifier en local

    python3 -m http.server -d landing-page 8000

Avant de payer du trafic : faire un vrai achat test puis le rembourser, et
vérifier que `lead`, `checkout_start` et `purchase` arrivent dans GA4 et Meta
(voir `PLAYBOOK.md` à la racine).
