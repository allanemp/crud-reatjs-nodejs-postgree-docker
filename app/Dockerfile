# Use uma imagem base para Node.js
FROM node:22


RUN corepack enable yarn

WORKDIR /app

# Copie o restante dos arquivos
RUN yarn install

# Exponha a porta do backend
EXPOSE 8080

# Comando para iniciar o backend
CMD ["yarn", "start"]