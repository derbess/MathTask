const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Sequelize, Op } = require("sequelize");


const Response = require("../utils/ApiResponse");
const validate = require("../validations/registration").validateRegisterInput;
const Answers = require("../models").Answer;
const Log = require("../utils/log");


const createAnswer = async (req, res) => {
	try {

		const newAnswer = { ...req.body};

		const result = await Answers.create(newAnswer);

		return res
			.status(201)
			.json(new Response().data(result));

		
	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}

const getAllAnswers = async (req, res) => {
	try {
		const result = await Answers.findAll();

		return res
			.status(201)
			.json(new Response().data(result));

		
	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}


module.exports = {
	createAnswer,
	getAllAnswers
}