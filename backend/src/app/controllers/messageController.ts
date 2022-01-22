import BaseController from '../config/controller';
import { Request, Response } from 'express';
import Messages from '../models/Messages';
import { MessagesInterface } from '../interface/Messages';

class MessageController extends BaseController {
  private instance: any;
  private id: string | number = this.request.params.id;

  public constructor(request: Request, response: Response) {
    super(request, response);

    if (this.instance === null) {
      this.instance = new MessageController(request, response);
    }
    return this.instance;
  }

  public async get() {
    try {
      const message = await Messages.findById(this.id);
      this.response.status(200).json({
        status: this.response.statusCode,
        timestamps: this.currentDate,
        data: message === null ? 'Message Not Found' : message,
      });
    } catch (error) {
      this.errorHandling(400, error);
    }
  }
  public async delete() {
    try {
      const deletedMessage = await Messages.deleteOne({ id: this.id });
      this.response.status(200).json({
        status: this.response.statusCode,
        timestamps: this.currentDate,
        data: deletedMessage,
      });
    } catch (error) {
      this.errorHandling(400, error);
    }
  }
  public async update() {
    try {
      const { from, to, message } = this.request.body;

      const data: MessagesInterface = {
        from,
        to,
        message,
        timestamps: this.currentDate,
      };

      const updatedMessage = await Messages.updateOne({ id: this.id }, data);

      this.response.status(201).json({
        status: this.response.statusCode,
        timestamps: this.currentDate,
        data: updatedMessage,
      });
    } catch (error) {
      this.errorHandling(400, error);
    }
  }
}

export default MessageController;
