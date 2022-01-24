import { Request, Response } from 'express';
import BaseController from '../config/controller';
import UsersInterface from '../interface/Users';
import Users from '../models/Users';
import { hash, genSalt } from 'bcrypt';

class RegisterController extends BaseController {
  private instance: any;
  constructor(request: Request, response: Response) {
    super(request, response);

    if (this.instance === null) {
      this.instance = new RegisterController(request, response);
    }

    return this.instance;
  }

  public async post(): Promise<void> {
    const { name, email, password } = this.request.body;

    const salt = await genSalt(10);

    const data: UsersInterface = {
      name,
      email,
      password: await hash(password, salt),
    };

    const UsersInstance = new Users<UsersInterface>(data);

    try {
      const saveUser = await UsersInstance.save();
      this.response.status(201).json({
        status: this.response.statusCode,
        timestamps: this.currentDate,
        data: saveUser,
      });
    } catch (error) {
      this.errorHandling(400, error);
    }
  }
}

export default RegisterController;
