import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;
    const connect = mongoose.createConnection(MONGODB_URL);
    console.log('Connection Established');
  } catch (e) {
    console.log('DB failed');
  }
};

export default connectDB;
