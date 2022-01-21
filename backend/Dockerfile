FROM node:14.18

WORKDIR /backend

COPY package*.json ./backend

RUN npm install

COPY ./build ./backend

CMD [ "node", "server.js" ]

ENV PORT=5000

EXPOSE 5000:5000


