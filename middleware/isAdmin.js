const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Sequelize, Op } = require("sequelize");


const Response = require("../utils/ApiResponse");
const validate = require("../validations/registration").validateRegisterInput;
const Users = require("../models").User;


module.exports = async (req, res, next) => {
    try {
        console.log(req.user);
        if(req.user.isAdmin){
            return next();
        } else {
            return res.json(new Response().error("Отказано в доступе"));
        }
    } catch(e){

    }
};
