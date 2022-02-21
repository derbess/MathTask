const express = require("express");
const passport = require("passport/lib");

const router = express.Router();
// const validate = require("../validations/registration").validateRegisterInput;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Response = require("../utils/ApiResponse");

const { createAnswer, getAllAnswers } = require("../controllers/answers");

router // router
    .get(
        "/",
        getAllAnswers
    )

    .post(
        "/",
        createAnswer,
    )

  ;

module.exports = router;
