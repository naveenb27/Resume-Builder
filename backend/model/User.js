import mongoose from 'mongoose';

const User = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
};

const UserSchema = mongoose.Schema(User);
const UserModel = mongoose.model('User', User);

export default UserModel;
