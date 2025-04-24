# Use uma imagem base para React
FROM node:22

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e instale as dependências
RUN yarn config set nodeLinker node-modules
RUN corepack enable yarn
RUN yarn cache clean
RUN yarn install

# Exponha a porta para o servidor de desenvolvimento do React
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento
CMD ["yarn", "start"]