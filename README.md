# DDD — Proposition de refonte actualisée

## Découvrir le site
Ouvrir index.html dans votre navigateur, ou servir le dossier sur un hébergement statique. Aucun serveur applicatif à installer.

## Identité visuelle
- Logo original conservé.
- Signature : initiales orange, texte blanc, même taille pour le nom et Développement : Monotype Corsiva, avec Parisienne en police de remplacement et une alternative cursive système.
- Parisienne est chargée via Google Fonts ; sans connexion, la police système prend le relais.
- Palette : noir #000000 identique au fond du logo, orange #ff7800 et bleu #11a0ff.
- Texte courant et titres de contenu conservés en police lisible.

## Organisation
- index.html : accueil.
- presentation.html : développement, renfort administratif à distance et approche.
- projets.html : applications présentées sous des noms génériques, sans identité de client.
- La gestion commerciale est un exemple parmi les autres sur projets.html.
- solutions.html, suivi-client.html et flux.html reprennent les projets pour conserver les anciennes adresses.
- contact.html : email, téléphone et formulaire Google existant chargé à la demande.
- rgpd.html : informations légales reprises du site d’origine.
- Les anciennes adresses portfolio, suivi-client.html et flux.html permettent de retrouver le nouveau contenu.

## Maintenance
Les classes et identifiants personnalisés, variables et fonctions JavaScript sont en français. Les fichiers HTML, CSS/SCSS et JavaScript utilisent des tabulations. Les balises HTML, attributs standard et API natives conservent naturellement leurs noms officiels.

La feuille styles/style.scss utilise une syntaxe compatible CSS. Le fichier style.css est identique. Après une modification, reporter la source dans le CSS ou compiler via Sass :

    sass styles/style.scss styles/style.css

## Avant publication
Cette proposition ne remplace pas le site publié. Les projets sont présentés par exemples généralistes, sans simulation ni noms de clients. Aucun lien de profil Malt n’est inventé.

Les mentions légales, coordonnées et l’hébergement GitHub Pages sont repris du site original : à vérifier avant publication. Les démonstrations HTML (devis, planning, gestion commerciale) seront des supports séparés à créer ; aucun lien fictif n’est affiché. Le renfort administratif est une prestation indépendante, sur un périmètre et des horaires convenus.

## Contrôles
Syntaxe JavaScript, liens locaux, ancres, anonymisation des références clients et tabulations vérifiés. La vérification visuelle automatisée n’est pas disponible : contrôler le rendu sur ordinateur et mobile avant mise en ligne.
