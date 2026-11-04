# Playbook — lancer une landing page et tester la demande

Ce qui reste réutilisable du premier projet monté dans ce dépôt (Chapitre un,
livre photo des 1 an, test de demande de septembre–octobre 2026, arrêté faute
d'achats). L'historique complet — journal jour par jour, étude concurrents,
plan marketing, visuels des pubs et leurs outils de rendu (HTML → Playwright →
JPG/MP4) — est dans l'historique git, avant le commit de nettoyage.

## 1. Étapes

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
11. **Pendant la diffusion** : ne jamais rouvrir une pub dans l'app Ads
    Manager (chaque enregistrement relance l'examen et l'apprentissage) ;
    lire la répartition **jour par jour** et pas seulement le cumul ; après
    une remise à zéro, mettre les pubs faibles en pause (ça ne relance pas
    l'apprentissage) plutôt que d'en modifier une ; vérifier le nombre de
    clics derrière tout pourcentage, surtout dans les recos automatiques de
    Meta ; prévoir une **carte qui accepte les prélèvements Meta** avant le
    jour J.
12. **Avant de conclure sur un zéro** : rejouer le tunnel en production avec
    toutes les requêtes tierces bloquées (rien d'enregistré), bibliothèques
    chargées pour vider la file d'événements ; retirer ses propres tests des
    compteurs du pixel ; charger la mesure **dès l'affichage**, pas après un
    délai, sinon la moitié des visites manquent.
13. **Dimensionner le test pour la question posée** : pour distinguer 0 %
    d'un vrai 1–2 % d'acheteurs il faut 300 à 500 visites, soit 150–250 €
    à 0,35 € le clic avec une bonne pub ; sinon le test ne dira que
    « probablement sous 2–4 % ». Une **liste d'attente gratuite visible
    dès le premier écran** donne un signal plus tôt et moins cher que le
    paiement.

## 2. Règle de décision et repères

**Règle de décision utilisée pour Chapitre un** (à adapter, et à écrire avant
la première dépense) : après 500 visites venues des pubs ou 14 jours, au
premier des deux termes.

| Résultat | Décision |
|---|---|
| ≥ 2 % paient, ou coût par achat ≤ 25 € | On construit |
| 0,5–2 %, ou 25–60 € par achat | On retravaille message ou prix, un tour de plus |
| < 0,5 % et < 5 % de liste d'attente | On arrête ou on change d'offre |

Repères donnés au fondateur : précommande payante d'un produit inexistant,
trafic froid → 0,5–2 % habituel, ≥ 3 % excellent ; liste d'attente gratuite
→ 5–15 % ; clic Meta en France ≈ 0,30–1 €.

## 3. Pièges rencontrés (à éviter la prochaine fois)

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

## 4. Travailler avec le fondateur

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
