const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Sequelize, Op, QueryTypes } = require("sequelize");
const sequelize = require("../models").sequelize;


const Response = require("../utils/ApiResponse");
const validate = require("../validations/registration").validateRegisterInput;
const Answers = require("../models").Answer;
const Attempts = require("../models").Attempt;

const Log = require("../utils/log");


const createAttempt = async (req, res) => {
	try {
		let count = 0;
		const { attempt } = req.body;

		const hist = await Attempts.findAndCountAll({
			where: {
				user_id: req.user.id
			}
		});

		if(hist.count >= 3)
			return res.status(500).json(new Response().error("Ошибка сервера"));
			
		promises = attempt.map(async (element)=>{
			const {question_id, answer_id} = element;

			const ans = await Answers.findOne({
				where: {
					[Op.and]: [
					  { id: answer_id },
					  { isCorrect: true},
					]
				}
	  
			});
			if(ans){
				count++;
			} 
		})
		console.log(req.user);
		await Promise.all(promises);
		const ex = await Attempts.create({
			user_id: req.user.id,
			score: count
		});
		return res
			.status(201)
			.json(new Response().data(ex));

		
	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}

const getUserStats = async (req, res) => {
	try {
		let count = 0;
		let query = req.query;

		

		const answers = await Attempts.findAll({
			where: {
				user_id: query.id
			},
			order: [["created_at", "DESC"]],
		})
		return res
			.status(201)
			.json(new Response().data(answers));

		
	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}

const getAllUserStats = async (req, res) => {
	try {
		
		const att = await sequelize.query(
			`SELECT a1.user_id, a1.created_at, a2.score, u.name, u.email FROM (
				SELECT user_id, max(created_at) as created_at FROM public."Attempts"
				GROUP BY user_id
			) as a1
			JOIN public."Attempts" as a2
			ON a1.user_id = a2.user_id AND a1.created_at = a2.created_at
			
			JOIN "Users" u on a2.user_id = u.id`
			, {
				type: QueryTypes.SELECT
			  }
		);
	
		return res
			.status(201)
			.json(new Response().data(att));

		
	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}


module.exports = {
	createAttempt,
	getUserStats,
	getAllUserStats
}