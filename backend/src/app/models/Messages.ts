import { model, Schema } from 'mongoose';
import { MessagesInterface } from '../interface/Messages';

const MessagesSchema = new Schema<MessagesInterface>({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  timestamps: {
    type: String,
    required: false,
  },
});

export default model<MessagesInterface>('messages', MessagesSchema);
