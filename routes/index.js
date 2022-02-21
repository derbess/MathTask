const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/tasks", require("./tasks"));
router.use("/answers", require("./answers"));
router.use("/test", require("./test"));
router.use("/attempt", require("./attempt"));




module.exports = router;
