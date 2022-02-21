const express = require("express");
const passport = require("passport/lib");

const router = express.Router();
// const validate = require("../validations/registration").validateRegisterInput;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isAdmin = require("../middleware/isAdmin");
const Response = require("../utils/ApiResponse");

const { createTasks, getTestWithoutAnswers } = require("../controllers/tasks");

router // router
  /**
    * @api {post} test/ create Test
    * @apiName CreateTest
    * @apiGroup Test
    * @apiDescription create Tasks
    * @apiParamExample {json} Request-Example:
    *    {
    *      "questions": [
    *          {
    *              "question": "to be or not 2B?",
    *              "answers": [
    *                  {
    *                      "content": "yes",
    *                      "isCorrect": true
    *                 },
    *                 {
    *                     "content": "no",
    *                     "isCorrect": false
    *                 }
    *             ]
    *         },
    *         {
    *              "question": "2B or not to be?",
    *              "answers": [
    *                  {
    *                      "content": "no",
    *                      "isCorrect": true
    *                  },
    *                  {
    *                      "content": "yes",
    *                      "isCorrect": false
    *                  }
    *              ]
    *          }
    *      ]
    *  }
    * @apiSuccessExample Data:
    * {
    *    "ok": true,
    *    "data": "Tasks created!",
    *    "error": ""
    * }
  */
    .post(
        "/",
        passport.authenticate("jwt", { session: false }),
        isAdmin,
        createTasks,
        
    )

    /**
    * @api {post} test/all test
    * @apiName get tasks
    * @apiGroup Tests
    * @apiDescription get all Tasks


    * @apiSuccessExample Data:
        {
          "ok": true,
          "data": [
              {
                  "id": 11,
                  "question": "to be or not 2B?",
                  "Answers": [
                      {
                          "id": 19,
                          "content": "yes"
                      },
                      {
                          "id": 20,
                          "content": "no"
                      }
                  ]
              },
            ]
    }
    */
    .get(
      "/all",
      passport.authenticate("jwt", { session: false }),
      getTestWithoutAnswers
  )



  ;

module.exports = router;
