var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users/list', function(req, res, next) {
  let list = [
    { id: 1, username: "sunvodz1", email: "sunvo1@sunvo.sunvo" },
    { id: 2, username: "sunvodz2", email: "sunvo2@sunvo.sunvo" },
    { id: 3, username: "sunvodz3", email: "sunvo3@sunvo.sunvo" }
  ];
  res.send(list);
});

router.post("/users/create", (req, res, next) => {
  let list = [
    { id: 1, username: "sunvodz1", email: "sunvo1@sunvo.sunvo" },
    { id: 2, username: "sunvodz2", email: "sunvo2@sunvo.sunvo" },
    { id: 3, username: "sunvodz3", email: "sunvo3@sunvo.sunvo" }
  ];
  res.send(list);
  console.log("Create User");
});

module.exports = router;
