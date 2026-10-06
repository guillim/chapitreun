# Posts organiques Instagram et Facebook — série 1 (6–7 octobre 2026)

Pourquoi : le compte Instagram @chapitre.un.an et la page Facebook étaient
vides alors que les pubs y envoient du monde (clic sur le nom du compte depuis
une pub). Trois publications décrivent le produit ; elles ne cherchent pas le
trafic, elles rassurent qui vérifie le compte avant de cliquer.

Visuels : 1080 × 1350 (4:5), rendus par `render.cjs` depuis les gabarits HTML
de ce dossier (polices Fraunces et Inter, couleurs du site), servis par
`https://chapitreun.com/assets/social/posts/<nom>.jpg` — Buffer a besoin
d'une URL publique. Pour modifier un visuel : éditer le HTML, lancer
`node render.cjs`, merger, puis recréer le post dans Buffer (il fige l'image).

Règles : « précommande » et « app iPhone en préparation » dans chaque post,
pas d'argument sur la vie privée, rien de la liste « ce qu'on ne peut pas
(encore) affirmer » de `competitor.md`. Le post 3 précise que les images du
livre sont un rendu, pas la photo d'un exemplaire imprimé.

Publication : Buffer (organisation « My organization »), canaux Instagram
`6ac092d5ea19ca0bde5ff547` et page Facebook `6ac09441ea19ca0bde5ffd72`.
Instagram ne rend pas les liens cliquables dans la légende → « lien dans la
bio ». Les hashtags sont **à la fin de la légende** : le premier commentaire
automatique est réservé aux plans payants de Buffer. Facebook reçoit le lien
avec `utm_source=facebook&utm_medium=organic&utm_campaign=posts1`.

| # | Quand (Paris) | Format | Visuels | Buffer (Instagram / Facebook) |
| --- | --- | --- | --- | --- |
| 1 | 6 octobre, 7 h 39 (publié) | image | `01-presentation` | `6ac48983b0e0485fb46d7415` / `6ac4898facc08dcd5ea41312` |
| 2 | 6 octobre, 19 h 30 | carrousel 5 vues | `02a` → `02e` | `6ac4899ab0e0485fb46d7625` / **non créé** (création refusée à l'approbation le 6 octobre ; à recréer si le fondateur le souhaite) |
| 3 | 7 octobre, 12 h 30 | carrousel 3 vues | `03a` → `03c` | `6ac4899d032d0529987d4175` / `6ac489a0acc08dcd5ea4145b` |

## 1 · Présentation

Voici Chapitre un : le livre photo de la première année de votre bébé, qui se
fait tout seul.

Vous donnez son prénom, sa date de naissance et une photo de son visage. L'app
retrouve ses photos dans votre iPhone, garde les plus belles et compose le
livre, un chapitre par mois, les textes déjà écrits. Vous relisez, vous dites
oui : il arrive imprimé chez vous, trois semaines avant ses 1 an.

L'app iPhone est en préparation. La précommande est ouverte au tarif
fondateur : 49 €, remboursable à tout moment. Lien dans la bio. *(Facebook :
le lien remplace cette phrase.)*

Hashtags (fin de légende Instagram) : #livrephoto #bébé #premièreannée
#albumbébé #jeunesparents #futuremaman #naissance #chapitreun

## 2 · Comment ça marche (carrousel)

Comment se fait le livre de sa première année ? En trois étapes, et une seule
minute de votre côté.

1. Trois choses : son prénom, sa date de naissance, une photo de son visage.
2. L'app retrouve ses photos dans votre iPhone, parmi des milliers, et garde
   les plus belles. Vous ne triez rien.
3. Le livre s'écrit, un chapitre par mois : douze chapitres, les textes déjà
   écrits. Vous relisez, vous dites oui.

Prêt trois semaines avant ses 1 an, livré chez vous, livraison offerte.

App iPhone en préparation · précommande 49 € au tarif fondateur (69 € prévu à
la sortie), remboursable à tout moment. Lien dans la bio.

Hashtags (fin de légende Instagram) : #livrephoto #bébé #premièreannée
#albumbébé #jeunesparents #mamanbébé #papa #chapitreun

## 3 · L'objet (carrousel)

À quoi ressemble le livre ? Couverture rigide en toile crème, son prénom et
l'année marqués sur le plat et sur le dos. 21 × 21 cm, 60 à 80 pages, papier
mat 200 g, des pages qui s'ouvrent à plat et un livre qui reste ouvert tout
seul.

Un chapitre par mois, de ses premiers jours au gâteau du premier
anniversaire. Un visage peut faire une page entière.

Les images sont un rendu du livre : l'app iPhone est en préparation, et les
premiers exemplaires seront fabriqués pour les fondateurs.

Précommande 49 €, remboursable à tout moment. Lien dans la bio.

Hashtags (fin de légende Instagram) : #livrephoto #bébé #premieranniversaire
#albumbébé #cadeaunaissance #jeunesparents #chapitreun

## Photos

- `src-livre-mains.jpg` : bas du visuel A de `pubs/tour-1/` (photo Unsplash
  de John, livre projeté) ; `src-livre-*.jpg` : rendus du livre fournis par le
  fondateur (`landing-page/assets/photos/`, agrandis ×2) ; `hero`, `face-1`,
  `det-3`, `mois-12` : photos CC0 de la page. Détail :
  `landing-page/assets/photos/CREDITS.md`.
