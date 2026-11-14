# À faire : site hypnose, arrêt du tabac

Page en ligne prévue sur https://chapitreun.com/. Les textes entre
`[crochets]` dans `landing-page/mentions-legales.html` et
`landing-page/confidentialite.html` attendent les informations ci-dessous.
Cocher au fur et à mesure.

## Avant la mise en ligne (bloquant)

- [ ] **Réactiver GitHub Pages** (le fondateur s'en charge le 4 novembre). Il est désactivé depuis le 4 novembre :
      le déploiement échoue avec « Get Pages site failed ». Dans le dépôt :
      *Settings* → *Pages* → *Source* : **GitHub Actions** ; *Custom domain* :
      `chapitreun.com` ; cocher *Enforce HTTPS*. Puis *Actions* →
      « Déployer la landing page » → *Run workflow*.
- [ ] **Choisir un statut et s'immatriculer.** Pratique courante relevée :
      - les praticiens qui démarrent sont en **entrepreneur individuel, régime
        micro-entreprise (BNC)**, recommandé par Legalstart et copeps.fr ;
      - code APE le plus cité **86.90F** (« activités de santé humaine non
        classées ailleurs »), à confirmer à l'immatriculation ;
      - les sources divergent sur la caisse de retraite (URSSAF ou CIPAV) :
        vérifier sur autoentrepreneur.urssaf.fr ou avec un expert-comptable.

      Puis remplir **Statut** et **SIRET** dans les mentions légales.
- [ ] **TVA.** En micro-entreprise sous le seuil de franchise, ajouter la
      mention « TVA non applicable, art. 293 B du CGI ». L'exonération des
      soins médicaux ne s'applique pas à l'hypnose. Vérifier le seuil en
      vigueur sur impots.gouv.fr.
- [ ] **Médiateur de la consommation**, obligatoire dès qu'on vend à des
      particuliers (art. L.612-1 du Code de la consommation). Des praticiens
      voisins utilisent : CNPM Médiation de la consommation (Paris 9e),
      Médiation-en-Seine (Neuilly), MED CONSO DEV (Paris 20e). Adhésion
      annuelle payante. Reporter nom, adresse et site dans les mentions
      légales.
- [ ] **Assurance RC professionnelle.** Pas obligatoire pour l'hypnose,
      mais recommandée et rassurante. Reporter assureur et numéro.
- [x] **Adresse e-mail de contact** : `bonjour@chapitreun.com` (reprise de
      Chapitre un ; le routage e-mail Cloudflare du domaine est toujours actif,
      envoyer un e-mail de test pour vérifier qu'il arrive). Obligatoire dans les mentions légales
      (loi pour la confiance dans l'économie numérique) et pour les droits RGPD.
- [x] **Adresse du cabinet** : 8 rue Pilaudo, 92600 Asnières-sur-Seine.
- [ ] **Photos** (voir le book photos envoyé le 4 novembre, non versé au
      dépôt car les photos appartiennent à d'autres praticiens) :
      1. **portrait principal**, indispensable : vertical 4:5, de la taille à
         la tête, regard caméra, sourire léger, lumière du jour latérale, fond
         clair uni ou cabinet flou, chemise ou pull uni sans logo, au moins
         1 600 px de haut. Il va dans `landing-page/assets/guillaume.jpg` à la
         place des initiales « GL » (voir le commentaire dans `index.html`) ;
      2. **assis dans le fauteuil de séance**, horizontal 3:2, mi-corps ;
      3. **le cabinet vide**, horizontal, lumière du jour (seuls 2 sites sur
         12 le montrent : c'est différenciant).

      La photo LinkedIn peut dépanner si elle est nette et fait au moins
      1 200 px. À éviter : selfie, recadrage serré, noir et blanc, fond noir,
      logo à la place du visage, image de cigarette.

## Preuves et réassurance (dès que possible)

- [ ] **Compter les personnes accompagnées** pour le tabac : date, première
      ou deuxième séance, nouvelles à 1 mois si elles en donnent. Afficher
      « Plus de N personnes accompagnées » seulement quand le chiffre est
      vrai.
- [ ] **Avis Google.** Créer la fiche Google Business Profile :
      - catégorie principale « Hypnothérapeute » si l'interface la propose ;
      - adresse, lien de réservation, photos du cabinet ;
      - demander un avis après chaque deuxième séance.

      À partir de 5 avis, ajouter sur la page la note, le nombre d'avis et 3
      avis cités avec l'accord des personnes.
- [ ] **Parcours personnel** dans « Qui je suis » : pourquoi l'hypnose,
      pourquoi le tabac, en deux ou trois phrases vraies.
- [ ] Photo des **diplômes IFHE** (Technicien 1, Praticien 1, 2026) si vous
      souhaitez les montrer.

## Page « Venir au cabinet » (acces.html)

- [ ] Préciser le cabinet : étage, code ou interphone, accessibilité aux
      personnes à mobilité réduite, salle d'attente, stationnement proche.
      La page ne dit aujourd'hui que l'adresse, le quartier Flachat et les
      gares.
- [ ] Vérifier les temps de trajet indiqués. Ils sont calculés à partir des
      distances (gares de Bécon-les-Bruyères et d'Asnières à environ 600 m,
      Bois-Colombes à environ 800 m, métro 3 Pont de Levallois – Bécon à
      1,2 km, métro 13 Gabriel Péri à 1,7 km à vol d'oiseau).

## Réservation et règles pratiques

- [ ] Vérifier la page d'agenda Google
      (https://calendar.app.google/i79gkohfd7R7XetLA) :
      - créneaux d'1 h ;
      - adresse du cabinet ;
      - lien Google Meet automatique pour la visio ;
      - question « cabinet ou visio ? » ;
      - rappel par e-mail la veille.
- [ ] Décider et afficher les **moyens de paiement** (CB, virement,
      espèces) et la **règle d'annulation** (la pratique courante est 48 h
      avant). Les ajouter à la FAQ, voire à des CGV courtes : un seul site
      voisin en a, avec 10 articles.

## Mesure et publicité (plus tard)

- [ ] Si Google Analytics ou le pixel Meta sont branchés (`analytics.js`),
      mettre à jour `confidentialite.html`, qui dit aujourd'hui « aucun
      cookie », et ajouter un **bandeau de consentement** (CNIL). Événement
      clé : `booking_click` (Meta « Schedule »).
- [ ] Image de partage 1200 × 630 (`og:image`) pour les liens envoyés par
      message ou sur les réseaux.

## Choix faits avec le fondateur (4 novembre 2026)

- Pas de séance de renfort offerte, pas de garantie de résultat.
- 90 € la séance, 2 séances d'1 h espacées de 2 semaines, cabinet ou visio.
- Formulation retenue (5 novembre) : « L'hypnose a déjà aidé des milliers de
  fumeurs ». Elle parle de l'hypnose en général, pas d'un résultat
  personnel.
- Présenter l'hypnose comme un accompagnement compatible avec le médecin et
  le tabacologue. Ne jamais employer « soigner » ni « guérir », ni donner de
  taux de réussite (voir `etude-marche.md`, section 4).
- Réservation uniquement par l'agenda en ligne, sans téléphone.
- Pratique présentée comme **hypnose ericksonienne** uniquement (pas « humaniste ») ;
  « Humaniste » ne reste que dans le nom officiel de l'école (IFHE).

## Limites de la recherche sur les mentions légales

Recherche sur une vingtaine de praticiens à Paris et dans les
Hauts-de-Seine. La plupart n'ont qu'une fiche d'annuaire. Seuls quatre
sites propres ont des mentions lisibles :

- Agnès Humbert, Paris 9e : EI, SIRET, médiateur CNPM, RC pro ;
- hypnose-paris-20.com, Paris 20e : EI, médiateur MED CONSO DEV ;
- phehypnose.fr, Neuilly : SASU, RCS Nanterre, médiateur
  Médiation-en-Seine, CGV en 10 articles ;
- christinedimnet.fr, Paris 5e : infirmière libérale, autre cadre.

Constat : les mentions sont souvent incomplètes chez les concurrents, et
aucun n'affiche la mention TVA. Notre page suit les obligations générales
(identité, adresse, contact, hébergeur, médiateur) plutôt que leur
pratique.
