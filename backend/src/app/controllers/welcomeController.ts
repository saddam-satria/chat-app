import BaseController from '../config/controller';

class WelcomeController extends BaseController {
  public get(): void {
    this.response.status(200).json({ msg: 'welcome' });
  }
}

export default WelcomeController;
