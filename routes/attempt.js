const express = require("express");
const passport = require("passport/lib");

const router = express.Router();
// const validate = require("../validations/registration").validateRegisterInput;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Response = require("../utils/ApiResponse");
const isAdmin = require("../middleware/isAdmin");

const { createAttempt, getUserStats, getAllUserStats } = require("../controllers/attempt");

router 
    .get(
        "/",
        passport.authenticate("jwt", { session: false }),
        isAdmin,
        getUserStats
    )
    .get(
        "/all",
        passport.authenticate("jwt", { session: false }),
        isAdmin,
        getAllUserStats
    )
    /**
     * @api {post} attempt/ pass Test
    * @apiName Create attempt
    * @apiGroup Attempt
    * @apiDescription create Task
    * @apiParamExample {json} Request-Example:
    {
        "attempt": [
            {
                "question_id": 1,
                "answer_id": 1
            },
            {
                "question_id": 2,
                "answer_id": 4
            }
        ]
    }
     */
    .post(
        "/",
        passport.authenticate("jwt", { session: false }),
        createAttempt,
    )
    

  ;

module.exports = router;
