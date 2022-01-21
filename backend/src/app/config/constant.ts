import { config } from 'dotenv';

(() => {
  config();
})();

const PORT: string | number = process.env.PORT || 5000;
const MONGO_URL: any = process.env.MONGO_URL;
const PUSHER_ID: any = process.env.PUSHER_ID;
const PUSHER_KEY: any = process.env.PUSHER_KEY;
const PUSHER_SECRET: any = process.env.PUSHER_SECRET;
const PUSHER_CLUSTER: any = process.env.PUSHER_CLUSTER;

export { PORT, MONGO_URL, PUSHER_ID, PUSHER_KEY, PUSHER_SECRET, PUSHER_CLUSTER };
