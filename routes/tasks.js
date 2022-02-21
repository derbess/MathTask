const express = require("express");
const passport = require("passport/lib");

const router = express.Router();
// const validate = require("../validations/registration").validateRegisterInput;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Response = require("../utils/ApiResponse");
const isAdmin = require("../middleware/isAdmin");


const { createTask, getAllTasks, getTaskAnswers, getTest, updateTask, addTask, deleteTask, getTestWithoutAnswers } = require("../controllers/tasks");

router // router

    .get(
        "/",
        passport.authenticate("jwt", { session: false }),
        getAllTasks
    )
    
    .post(
        "/",
        passport.authenticate("jwt", { session: false }),
        isAdmin,
        createTask,
    )

    .get(
        "/:id",
        passport.authenticate("jwt", { session: false }),
        getTaskAnswers
    )

    
    .post(
        "/add",
        passport.authenticate("jwt", { session: false }),
        isAdmin,
        addTask
    )
    /**
    * @api {put} tasks/:id update Test
    * @apiName Change task
    * @apiGroup Test
    * @apiDescription update Task
    * @apiParamExample {json} Request-Example:
        {
            "question": "new updatedtask 13?",
            "answers": [
                {
                    "content": "new updated",
                    "isCorrect": true
                },
                {
                    "content": "old updated",
                    "isCorrect": false
                }
            ]
        }
    */
    .put(
        "/:id",
        passport.authenticate("jwt", { session: false }),
        isAdmin,
        updateTask
    )
    /**
    * @api {delete} tasks/:id delete Test
    * @apiName delete task
    * @apiGroup Test
    * @apiDescription delete Task
    * 
    */
    .delete(
        "/:id",
        passport.authenticate("jwt", { session: false }),
        isAdmin,
        deleteTask
    )

  ;

module.exports = router;
