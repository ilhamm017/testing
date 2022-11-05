const {User} = require("../models");
const {verifyToken} = require("../helpers/jwt");

function authentication(req, res, next) {
  try {
    const token = req.get("token");
    const userDecode = verifyToken(token);
    User.findOne({
      where: {
        id: userDecode.id,
        email: userDecode.email,
      },
    })
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            name: "Authentikasi Error",
            devMessage: `User with id "${userDecode.id} not found in database`,
          });
        }
        res.locals.user = user;
        return next();
      })
      .catch((err) => {
        return res.status(401).json(err);
      });
  } catch (err) {
    return res.status(401).json(err);
  }
}

module.exports = authentication;
