const express = require("express");
const router = express.Router();
const User = require("../models/User")

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});


router.patch("/:id", (req, res, next) => {
 User.findByIdAndUpdate(req.body, req.params.id, {
      new: true
    })
    .then((dbRes) => {
      res.status(200).json(dbRes)
    })
    .catch((error) => {
      res.status(500).json(error)
    })

})
module.exports = router;
