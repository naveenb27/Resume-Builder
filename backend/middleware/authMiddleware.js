import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(404).json('Acess Denied');

  try {
    const JSON_SECRET = process.env.JSON_SECRET;

    const decoded = jwt.decode(token, JSON_SECRET);
    req.id = decoded._id;
    next();
  } catch (e) {
    return res.status(400).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
