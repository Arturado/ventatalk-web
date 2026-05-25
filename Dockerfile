FROM node:20-alpine
WORKDIR /app

# Copiar con dueño correcto antes de instalar
COPY --chown=node:node package.json package-lock.json ./

# Cambiar a non-root antes de npm install (node_modules pertenece a node)
USER node
RUN npm install

# Copiar resto del repo
COPY --chown=node:node . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
