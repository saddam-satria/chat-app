import BaseController from '../config/controller';
import pusher from '../config/pusher';

class MessageController extends BaseController {
  public get() {
    this.response.status(200).json({ msg: 'Testing' });
  }
  public post() {
    this.response.status(200).json({ msg: this.request.body.msg });
  }
}

export default MessageController;
