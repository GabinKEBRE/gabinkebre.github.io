# 💻 Portfolio Personnel – Déploiement avec Docker

Ce dépôt contient mon portfolio professionnel déployé via Docker. Il présente mes projets, compétences et parcours dans le domaine des systèmes, réseaux et cybersécurité.

## 🔧 Prérequis

- Une distribution Linux (Ubuntu recommandé)
- Docker installé et opérationnel
- Git installé

## 🛠️ Étapes d'installation

1. **Mettre à jour votre système :**
   ```bash
   sudo apt update && sudo apt upgrade -y
2. **Installer Docker**
   ```bash
   sudo apt install docker.io -y
   sudo usermod -aG docker $USER
3. **Cloner le dépôt GitHub**
   ```bash
   git clone https://github.com/GabinKEBRE/gabinkebre.github.io.git
   cd gabinkebre.github.io
4. **Adapter les fichiers HTML/CSS à votre portfolio.**
5. **Construire l’image Docker :**
   ```bash
   docker build -t gabin-portfolio .
6. **Démarrer le conteneur :**
    ```bash
    docker run -d -p 8080:80 --name portfolio-container gabin-portfolio
7. **Accéder au site localement :**
    http://localhost:8080

   📁 Structure du projet
index.html : page d’accueil one-page

projets.html : projets techniques

experience.html : parcours et stages

contact.html : formulaire et liens pro

css/redstyle.css : design personnalisé rouge/noir/blanc

Dockerfile & docker-compose.yml : configuration conteneur

🧠 À propos
Ce projet m’a permis de consolider mes compétences en conteneurisation, administration Linux, design HTML/CSS, et mise en ligne d’un site statique. Il s’inscrit dans ma démarche active de valorisation professionnelle et dans ma recherche d’alternance en cybersécurité à partir de juillet 2025.

📫 Contact : gabinkebre7957@gmall.com 
            🔗 LinkedIn : https://www.linkedin.com/in/gabin-kebre
              – GitHub : https://github.com/GabinKEBRE
