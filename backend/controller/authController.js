import User from '../model/User.js';
import generateToken from '../utils/generateToken.js';
import bycrypt from 'bcrypt';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (!userExists) {
      return res
        .status(404)
        .json({ message: 'account can`t found. please login' });
    }

    const hashedPassword = userExists.password;
    const comparePassword = await bycrypt.compare(password, hashedPassword);

    if (!comparePassword)
      return res.status(404).json({ message: 'Wrong password' });

    const token = generateToken(userExists);

    res.cookie(token, 'token', {
      secure: true,
      httpOnly: true,
      maxAge: 2 * 1000 * 60 * 60,
    });

    res.status(200).json({ message: 'Successfully logged in' });
  } catch (e) {
    console.log(e.stack);
    return res.status(500).json({ message: 'Client error' });
  }
};

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = User.findOne({ email });

    if (userExists)
      return res
        .status(400)
        .json({ message: 'user already exists. please signin' });

    const hashedPassword = bycrypt.hash(password);
    const newUser = new User({ name, email, password: hashedPassword });

    const token = generateToken(newUser);

    res.cookie(token, 'token', {
      maxAge: 2 * 1000 * 60 * 60,
      secure: true,
      httpOnly: true,
    });
  } catch (e) {
    console.log(e.stack);
    return res.status(404).json({ message: 'Client error' });
  }
};
