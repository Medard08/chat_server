FROM node:current-slim

WORKDIR /app

COPY *.json /app/

RUN npm install

EXPOSE 3000

COPY ./src  /app/src

CMD ["npm", "start"]