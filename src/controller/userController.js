const {comparePassword} = require("../helpers/bcrypt");
const {generateToken} = require("../helpers/jwt");
const {User} = require("../models");

class userController {
  static register(req, res) {
    const {email, password, username} = req.body;
    User.create({
      email,
      password,
      username,
    })
      .then((result) => {
        let response = {
          id: result.id,
          username: result.username,
          email: result.email,
        };
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static login(req, res) {
    const {email, password} = req.body;
    User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (!user) {
          throw {
            name: "User Login Error",
            devMessage: `User with email "${email}" not found`,
          };
        }
        const isCorrect = comparePassword(password, user.password);
        if (!isCorrect) {
          throw {
            name: "User login error",
            devMessage: `USer password with email "${email}" does not match`,
          };
        }
        let payload = {
          id: user.id,
          email: user.email,
        };

        const token = generateToken(payload);

        return res.status(200).json(token);
      })
      .catch((err) => {
        return res.status(401).json(err);
      });
  }
}

module.exports = userController;
