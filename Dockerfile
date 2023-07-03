FROM node:18

WORKDIR /keanu-application-server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

RUN npm run compile

CMD ["node", "./dist/src/index.js"]