import express from 'express';
import cors from 'cors';
import routes from './app/config/routes';
import { connect } from 'mongoose';
import { MONGO_URL, PORT } from './app/config/constant';

(() => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  connect(MONGO_URL)
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
