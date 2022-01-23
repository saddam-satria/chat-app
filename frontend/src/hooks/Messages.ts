import { useEffect, useState } from 'react';
import MessagesHelper from '../helpers/MessagesHelper';
import Pusher from 'pusher-js';

const messagesInstance = new MessagesHelper();

interface Message {
  from: string;
  to: string;
  message: string;
}

const GetMessage = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [error, setError] = useState<any[]>([]);

  useEffect(() => {
    messagesInstance
      .get()
      .then(({ data }) => {
        setMessages(data.data);
      })
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    Pusher.logToConsole = false;

    let pusher = new Pusher('591efe34bd0a345d7b3a', {
      cluster: 'ap1',
    });

    let channel = pusher.subscribe('messages');
    channel.bind('send-message', function (newMessage: any) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind();
      channel.unsubscribe();
    };
  }, [messages]);

  return { messages, error };
};

const PostMessage = (data: Message) => {
  messagesInstance
    .post(data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export { GetMessage, PostMessage };
