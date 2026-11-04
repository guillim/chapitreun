# Landing page — base réutilisable

Page unique, mobile d'abord, en français, sans dépendance ni build. Publiée
telle quelle par GitHub Pages (`.github/workflows/pages.yml` publie ce dossier
à la racine du site à chaque push sur `main`).

| Fichier | Rôle |
|---|---|
| `index.html` | La page : accueil, pour qui, déroulé, tarif, contact, FAQ. Tous les textes à remplacer sont entre `[crochets]`. |
| `styles.css` | Styles. Couleurs et polices dans les variables de `:root`. |
| `script.js` | Formulaire (Formspree puis Stripe), apparitions au défilement, test A/B du titre, événements de mesure. Réglages dans `CONFIG`. |
| `analytics.js` | GA4 et pixel Meta, chargés en différé. Identifiants en tête de fichier. |
| `merci.html` | Retour de Stripe après paiement : envoie l'événement `purchase`. |
| `mentions-legales.html`, `confidentialite.html` | Pages légales à compléter. |
| `robots.txt`, `sitemap.xml` | Remplacer `[domaine]`. |
| `assets/fonts/` | Fraunces (titres) et Inter (texte), auto-hébergées. |

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
| `lead` | formulaire envoyé | `Lead` |
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
