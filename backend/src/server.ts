import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import routes from './app/config/routes';

(() => {
  config();
  const app = express();
  const PORT: number | string = process.env.PORT || 5000;
  app.use(cors());
  app.use(express.json());
  app.use(routes);

  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
})();
