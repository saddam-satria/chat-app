import BaseController from '../config/controller';
import Messages from '../models/Messages';
import { MessagesInterface } from '../interface/Messages';
import { Request, Response } from 'express';

class MessagesController extends BaseController {
  private instance: any;

  // Singleton
  constructor(request: Request, response: Response) {
    super(request, response);

    if (this.instance === null) {
      this.instance = new MessagesController(request, response);
    }
    return this.instance;
  }

  public async get() {
    try {
      const messages = await Messages.find();

      this.response.status(200).json({
        status: this.response.statusCode,
        timestamps: this.currentDate,
        data: messages,
      });
    } catch (error) {
      this.errorHandling(200, error);
    }
  }
  public async post() {
    const { from, to, message }: MessagesInterface = this.request.body;

    const data: MessagesInterface = {
      from,
      to,
      message,
      timestamps: this.currentDate,
    };

    const newMessage = new Messages<MessagesInterface>(data);

    try {
      await newMessage.save();
      this.response.status(201).json({
        status: this.response.statusCode,
        timestamps: this.currentDate,
        data: newMessage,
      });
    } catch (error) {
      this.errorHandling(200, error);
    }
  }
}

export default MessagesController;
