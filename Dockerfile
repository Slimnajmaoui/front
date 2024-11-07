
# Étape 1 : Construction de l'application
FROM node:20.11.0 as builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration des dépendances
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier l'ensemble des fichiers du projet Angular dans l'image
COPY . .

# Construire l'application Angular en mode production
RUN npm run build -- --configuration production

# Étape 2 : Image finale pour le serveur
FROM nginx:alpine

# Copier le fichier de configuration Nginx personnalisé
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers construits dans le répertoire par défaut de Nginx
COPY --from=builder /app/dist/pfe1/browser /usr/share/nginx/html/


# Exposer le port 80 pour le serveur Nginx
EXPOSE 80
# Commande pour démarrer le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
