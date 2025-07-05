# mon-portfolio-docker
Etape d'installation 
choisir une distribution linux ex:ubuntu 
mettre à jour la distribution et les packets 
# apt update && apt upgrade 
intaller docker 
# apt install docker.io -y
Ajouter  l'utilisateur courant au groupe docker 
# sudo usermod -aG docker $USER
cloner le depot 
# git clone https://github.com/GabinKEBRE/gabinkebre.github.io.git
adapter les fichiers html à votre portfolio 
creer un image  personnalisée (voir le Dockerfile)
construire l'image :
# docker build -t nomdevotreimage 
demarrer le conteneur 
# docker run -d -p 8080:80 --name votreconteneur nomdevotreimage 
tester à travers l'acces à l'interface web :
# http://localhost:8080

