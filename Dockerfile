FROM node:16-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm install --force
ADD . .
RUN npm run build --force
RUN npm prune --production --force
CMD ["node", "./dist/main.js"]