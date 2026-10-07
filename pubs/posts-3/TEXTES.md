# Posts et reels — série 3, « inspirée des pages concurrentes » (7 octobre 2026)

Demande du fondateur : « préparer un nouveau post et de nouveaux reels pour
aujourd'hui, en regardant les pages Instagram de la concurrence et en
s'inspirant de leurs posts bébé qui ont eu des likes ».

## Ce qu'on a regardé (6–7 octobre, via Apify `apify/instagram-scraper`)

Trente derniers posts de @cheerzfr, @atelier_rosemood, @fizzer_app, @popsa,
@chatbooks, @onceuponapp, @artifactuprising, @photoweb (+ @cheerz global,
ancien). Hors jeux-concours (qui écrasent tout : 1 000 à 5 000 ❤ chez
Rosemood et Cheerz), les posts bébé / parents qui marchent :

| Compte | Post | ❤ | Ce qui marche |
| --- | --- | --- | --- |
| Artifact Uprising | « quick poll: how many photos are in your camera roll? » (photo d'une rue, texte serif) | 1 766 | une **question** simple, chacun a une réponse |
| Artifact Uprising | « There isn't a single day where I don't take a photo » | 1 766 | une phrase vraie, serif, sur une photo d'ambiance |
| Once Upon | « What little things have passed you by that you wish you'd noticed more often? » | 323 | question nostalgique |
| Chatbooks | « We Didn't Take a Vacation This Summer » (carte texte, récit de maman) | 263 | la voix d'une mère, sans produit |
| Rosemood | « TOP PRÉNOMS D'OCTOBRE » (photo de nouveau-né, liste de prénoms) | 202 / 115 | contenu par **mois de naissance**, commentaires |
| Once Upon | « You might think you will remember it all » (reel, enfant en voiture) | 76 | le souvenir qui s'efface |
| Chatbooks | « I have over 43,780 photos of just my baby. What do I do? » (carrousel) | 51 | le chiffre de la pellicule |
| Cheerz FR | « 42 glaces, 193 ploufs, 327 "J'ai trop chaud"… » | 44 | **l'été en chiffres**, ton complice |

Leçons : les posts produit à plat font 20–100 ❤ chez tout le monde ; ce qui
sort du lot, c'est une question ou une phrase de parent, en gros, sur une
photo de vie (pas un rendu), et le chiffre de la pellicule que tout le monde
reconnaît. On garde notre design (pub C) et on y met ces trois mécaniques.

## Les trois visuels

| # | Quand (Paris) | Format | Visuel | Mécanique reprise | Photo (Unsplash) | Buffer (Instagram / Facebook) |
| --- | --- | --- | --- | --- | --- | --- |
| 8 | 7 octobre, 9 h 30 | image | `08-question-telephone` | la question (Artifact Uprising) | Fotógrafo Samuel Cruz | — |
| R3 | 7 octobre, 17 h 30 | reel 11 s | `r3-souvenir-herbe` | le souvenir qui s'efface (Once Upon) | Alvin Mahmudov | — |
| R4 | 7 octobre, 20 h 30 | reel 7,5 s | `r4-chiffres-sieste` | l'année en chiffres (Cheerz) | Dakota Corbin | — |

Le post 3 de la série 1 (« l'objet ») part le même jour à 12 h 30.
Fabrication : `python3 build.py && node render.cjs` (mêmes outils que
`pubs/posts-2/`, plus `data-t1` dans `anim.js` pour une ligne remplacée par
la suivante, et la durée du reel dans `<body data-dur>`).

## 8 · « Combien de photos de lui dans votre iPhone ? »

Combien de photos de lui dans votre iPhone ? Dites-le en commentaire, sans
tricher 👇

Nous, on part de 4 000 et on en garde 214 dans le livre de sa première
année : l'app retrouve ses photos, écarte les floues et les doublons, garde
les plus belles, un chapitre par mois. Vous relisez, vous dites oui.

App iPhone en préparation. Précommande 49 €, remboursable à tout moment.
Lien dans la bio.

Hashtags : #livrephoto #bébé #photosdebébé #albumbébé #jeunesparents
#premièreannée #chapitreun

## R3 · Reel « Vous pensez que vous vous souviendrez de tout. »

Vous pensez que vous vous souviendrez de tout. Son premier rire, le jour où
il a tenu assis, la première dent. Dans un an, ça se mélange.

Le livre de sa première année, lui, garde l'ordre : douze chapitres, un par
mois, écrits à partir des photos de votre iPhone. Prêt trois semaines avant
ses 1 an.

App iPhone en préparation · précommande 49 €, remboursable. Lien dans la
bio.

Hashtags : #livrephoto #bébé #souvenirs #premièreannée #albumbébé
#jeunesparents #chapitreun

## R4 · Reel « 4 000 photos. 365 nuits, courtes. »

Une première année, c'est à peu près 4 000 photos, 365 nuits (courtes), une
première dent… et un livre de douze chapitres qui se fait tout seul. Et chez
vous, c'est combien ?

App iPhone en préparation · précommande 49 €, remboursable. Lien dans la
bio.

Hashtags : #livrephoto #bébé #premièreannée #albumbébé #jeunesparents
#mamanbébé #chapitreun

## Règles et photos

« Précommande » et « app iPhone en préparation » partout ; pas de vie privée ;
rien de la liste « ce qu'on ne peut pas (encore) affirmer ». « 214 sur
4 000 » est le chiffre de la maquette de la page (pas une statistique
client). Photos Unsplash (licence gratuite, pas d'Unsplash+), crédits dans
`landing-page/assets/photos/CREDITS.md`. Facebook : lien avec
`utm_campaign=posts3`.
