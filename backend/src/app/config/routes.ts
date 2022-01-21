import { Router } from 'express';
import MessageController from '../controllers/messageController';
import WelcomeController from '../controllers/welcomeController';

const router = Router();

router.get('/', (req, res) => new WelcomeController(req, res).get());
router.get('/api/v1/messages', (req, res) => new MessageController(req, res).get());
router.post('/api/v1/messages', (req, res) => new MessageController(req, res).post());

export default router;
