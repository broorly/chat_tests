
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g http-server
# RUN node server.js 

EXPOSE 3000

CMD [ "npm", "run", "start" ]
