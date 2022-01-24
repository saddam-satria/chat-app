import { Schema, model } from 'mongoose';
import UsersInterface from '../interface/Users';

const usersSchema = new Schema<UsersInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model<UsersInterface>('users', usersSchema, 'users');
