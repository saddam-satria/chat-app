import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import routes from './app/config/routes';
import { connect } from 'mongoose';

(() => {
  const app = express();
  const PORT: number | string = process.env.PORT || 5000;

  config();
  app.use(cors());
  app.use(express.json());
  app.use(routes);

  const MONGO_URL: any = process.env.MONGO_URL;

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
