import BaseController from '../config/controller';
import { compare } from 'bcrypt';
import Users from '../models/Users';

class LoginController extends BaseController {
  public async post(): Promise<void> {
    const { email, password } = this.request.body;

    const currentUser = await Users.findOne({
      email,
    });

    const currentPassword: any = currentUser?.password;

    try {
      await compare(password, currentPassword);

      this.response.status(200).json({
        status: this.response.statusCode,
        timestamps: this.currentDate,
        data: {
          id: currentUser?.id,
          name: currentUser?.name,
          email: currentUser?.email,
        },
      });
    } catch (error) {
      this.errorHandling(401, error);
    }
  }
}

export default LoginController;
