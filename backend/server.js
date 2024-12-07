import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import connectDB from './config/db.js';

const app = express();

const PORT = process.env.PORT;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).json('Welcome to an API!');
});

app.listen(PORT, () => {
  console.log(`Server listening from ${PORT}`);
});
