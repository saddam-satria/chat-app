FROM node:14.18-alpine

WORKDIR /backend

COPY package*.json ./backend

RUN yarn install --production

COPY build ./backend

CMD [ "node", "server.js" ]

ENV PORT=5000

EXPOSE 5000:5000


