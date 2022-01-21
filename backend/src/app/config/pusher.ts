import Pusher from 'pusher';
import { PUSHER_CLUSTER, PUSHER_ID, PUSHER_KEY, PUSHER_SECRET } from './constant';

const pusher = new Pusher({
  appId: PUSHER_ID,
  key: PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: PUSHER_CLUSTER, // if `host` is present, it will override the `cluster` option.
});

export default pusher;
