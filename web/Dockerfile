FROM node:latest
WORKDIR /usr/src/app
ADD package*.json app.js index.htm ./
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]