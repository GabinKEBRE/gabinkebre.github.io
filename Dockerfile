# Utiliser une image de base Nginx légère
FROM nginx:alpine

# Copier les fichiers de votre portfolio dans le répertoire de publication de Nginx
# Assurez-vous que le chemin local './html' correspond à l'emplacement de vos fichiers portfolio
COPY ./html /usr/share/nginx/html

# Exposer le port par défaut de Nginx (port 80)
EXPOSE 80

# Commande par défaut pour démarrer Nginx (déjà intégrée à l'image de base Nginx)
CMD ["nginx", "-g", "daemon off;"]
