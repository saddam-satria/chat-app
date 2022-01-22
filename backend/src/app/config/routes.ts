import { Router } from 'express';
import MessageController from '../controllers/messageController';
import MessagesController from '../controllers/messagesController';
import WelcomeController from '../controllers/welcomeController';

const router = Router();

router.get('/', (req, res) => new WelcomeController(req, res).get());

router
  .route('/api/v1/messages')
  .get((req, res) => new MessagesController(req, res).get())
  .post((req, res) => new MessagesController(req, res).post());

router
  .route('/api/v1/message/:id')
  .get((req, res) => new MessageController(req, res).get())
  .delete((req, res) => new MessageController(req, res).delete())
  .put((req, res) => new MessageController(req, res).update());

export default router;
