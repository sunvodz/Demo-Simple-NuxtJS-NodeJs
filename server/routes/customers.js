var express = require("express");
var router = express.Router();

/* GET customers listing. */
router.get("/customer/list", (req, res, next) => {
  console.log("Show Customer");
});

//http://localhost:8080/customer/create?room=123
router.post("/customer/create", (req, res, next) => {
  console.log("params : ", req.params);
  console.log("qurey : ", req.query);
  console.log("body : ", req.body);

  let list = [
    { id: "001", name: "sunvo", room: req.params.room },
    { id: "002", name: "pongpan", room: req.params.room }
  ];
  res.send(list);
  console.log("Create Customer");
});

router.put("/customer/update", (req, res, next) => {
  console.log("Update Customer");
});

router.delete("/customer/delete", (req, res, next) => {
  console.log("Delete Customer");
});

module.exports = router;
