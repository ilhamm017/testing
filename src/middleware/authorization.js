const {Photo} = require("../models");

function authorization(req, res, next) {
  const photoId = req.params.id;
  const authenticatedUser = res.locals.authenticatedUser;

  Photo.findOne({
    where: {
      id: photoId,
    },
  })
    .then((photo) => {
      if (!photo) {
        return res.status(404).json({
          name: "Data not found",
          devMessage: `photo with id "${photoId}" not found`,
        });
      }
      if (photo.UserId === authenticatedUser.id) {
        return next();
      } else {
        return res.status(403).json({
          name: "Authorization Error",
          devMessage: `User with id "${authenticatedUser.id}" does not have permission to access Photo with id "${photoId}"`,
        });
      }
    })
    .catch((err) => {
      return res.status(200).json(err);
    });
}

module.exports = authorization;
