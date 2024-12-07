import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
  const JSON_SECRET = process.env.JSON_SECRET;

  const generatedToken = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    JSON_SECRET,
    {
      expiresIn: '2d',
    }
  );

  return generatedToken;
};

export default generateToken;
