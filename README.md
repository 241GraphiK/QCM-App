QCM AppUne application web interactive de questionnaire à choix multiples (QCM) conçue pour tester les connaissances des utilisateurs avec un système de notation automatisé et une interface moderne.

🚀 Fonctionnalités

Interface responsive en HTML/CSS avec design moderne via Tailwind

Questions dynamiques chargées depuis un fichier JSON

Système de score automatique avec feedback visuel

Backend Node.js avec Express pour la gestion des résultats

Connexion à MongoDB pour stocker les scores

Déploiement prévu sur GitHub Pages et MongoDB Atlas

🛠️ Technologies utilisées

Frontend

Backend

Base de données

HTML / CSS

Node.js

MongoDB

JavaScript

Express.js

Mongoose

Tailwind CSS





📦 Structure du projetQCM app/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── questions.json
├── server/
│   ├── app.js
│   ├── models/
│   ├── routes/
│   └── package.json
└── .gitignore

⚙️ Installation1. Cloner le dépôtgit clone https://github.com/241Graphik/QCM-App.git
cd QCM-App2. Installer les dépendances backendcd server
npm install3. Lancer le serveurnode app.js4. Ouvrir le frontendOuvrir frontend/index.html dans votre navigateur.

📊 Exemple d’utilisation

L’utilisateur répond à 40 questions

Le score est calculé automatiquement

Les résultats sont envoyés au backend et stockés dans MongoDB

 AuteurJoseph EKANGA.E — passionné de développement web, structuré, méthodique et motivé à créer des outils éducatifs autres modernes et utilitaires.

 ContactPour toute suggestion ou collaboration : GitHub @241GraphikEmail: Josephekangaedzeghe@gmail.com

 ObjectifCréer une plateforme distribuable, éducative et évolutive pour tester les connaissances avec rigueur et clarté.
