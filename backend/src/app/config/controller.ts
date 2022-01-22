import { Request, Response } from 'express';

class BaseController {
  protected request: Request;
  protected response: Response;
  protected currentDate: string = new Date().toString();

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }
  protected errorHandling(code: number, message?: string | any) {
    this.response.status(code).json({
      status: this.response.statusCode,
      timestampts: this.currentDate,
      message,
    });
  }
}

export default BaseController;
