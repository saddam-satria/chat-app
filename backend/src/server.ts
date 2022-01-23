import express from 'express';
import cors from 'cors';
import routes from './app/config/routes';
import mongoose from 'mongoose';
import { MONGO_URL, PORT } from './app/config/constant';
import Messages from './app/models/Messages';
import pusher from './app/config/pusher';

(() => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  Messages.watch().on('change', async (change) => {
    const messages = change.fullDocument;
    if (change.operationType === 'insert') {
      await pusher.trigger('messages', 'send-message', messages);
    }
  });

  mongoose
    .connect(MONGO_URL)
    .then(() => {
      app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
        console.log('mongo db connected');
      });
    })
    .catch((err) => {
      console.log(err);
    });
})();
