import User from '../model/User.js';

const FindUser = async (req, res) => {
  try {
    const userExists = await User.findById(id);

    if (!userExist) {
      return res.status(400).json({ message: "User doesn't exists" });
    }

    res.status(200).json(userExists);
  } catch (e) {
    console.log(e.stack);
  }
};

export default FindUser;
