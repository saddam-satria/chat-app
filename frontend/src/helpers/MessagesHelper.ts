import axios from '../config/axios';

interface MessagesInterface {
  readonly url: string;
  instance: any;
  get(): any;
  post(data: { from: string; to: string; message: string }): any;
}

class Messages implements MessagesInterface {
  readonly url: string = '/api/v1/messages';
  public instance: any;
  constructor() {
    if (this.instance === null) {
      this.instance = new Messages();
    }

    return this.instance;
  }
  public async get() {
    const messages = await axios.get(this.url);
    return messages;
  }
  public async post(data: { from: string; to: string; message: string }) {
    const response = await axios.post(this.url, JSON.stringify(data), {
      headers: {
        'content-type': 'application/json',
      },
    });

    return response;
  }
}

export default Messages;
