FROM node:25-alpine
WORKDIR /app

# Dar ownership de /app a node ANTES de cambiar de usuario
RUN chown -R node:node /app

# Copiar con dueño correcto
COPY --chown=node:node package.json package-lock.json ./

# Cambiar a non-root antes de npm install
USER node
RUN npm install

# Copiar resto del repo
COPY --chown=node:node . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
