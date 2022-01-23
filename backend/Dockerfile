FROM node:14.18-alpine

WORKDIR /usr/src/chat-app/backend

COPY package*.json /usr/src/chat-app/backend

RUN yarn install --production

COPY build /usr/src/chat-app/backend

CMD [ "node", "server.js" ]

ENV PORT=5000

EXPOSE 5000:5000


