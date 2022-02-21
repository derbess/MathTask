const express = require("express");
const passport = require("passport/lib");
const Users = require("../models").User;

const router = express.Router();
// const validate = require("../validations/registration").validateRegisterInput;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Response = require("../utils/ApiResponse");

const { getUser, createUser, login, register } = require("../controllers/users");

router // router
    .get(
        "/",
        getUser
    )

    .post(
        "/",
        createUser,
    )
    /**
    * @api {post} users/login login
    * @apiName login
    * @apiGroup User
    * @apiDescription login
    * @apiParam {String} email    email of the user
    * @apiParam {String} password    password of the user
    * @apiSuccessExample Data:
        {
          "id": 8,
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJ1c2VyNEBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYwMzQ0Mjc1OCwiZXhwIjoxNjA4OTA4MTA0fQ.wtA4pOXSi5clRQFAzyVUVr-nK2iuUIpRP5sL0-mX-l4",
          "isAdmin": false
        }
    */
    .post(
        "/login",
        login
    )
    /**
    * @api {post} users/signup register
    * @apiName register
    * @apiGroup User
    * @apiDescription create new User
    * @apiParam {String} name    name of the user
    * @apiParam {String} surname    surname of the user
    * @apiParam {String} email    email of the user
    * @apiParam {String} username    username of the user
    * @apiParam {Boolean} isAdmin    role
    * @apiParam {String} password    password


    * @apiSuccessExample Data:
        {
          "id": 8,
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJ1c2VyNEBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYwMzQ0Mjc1OCwiZXhwIjoxNjA4OTA4MTA0fQ.wtA4pOXSi5clRQFAzyVUVr-nK2iuUIpRP5sL0-mX-l4",
          "isAdmin": false
        }
    */
    .post(
        "/signup",
        register
    )
  ;

module.exports = router;
