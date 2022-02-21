const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Sequelize, Op } = require("sequelize");


const Response = require("../utils/ApiResponse");
const validate = require("../validations/registration").validateRegisterInput;
const Users = require("../models").User;
const Log = require("../utils/log");


const getUser =  async (req, res) => {
	try {
	  console.log("hello");
	  return res.status(200).json(new Response().data("hello"));
	} catch (err) {
	  res.status(500).json(new Response().error(err.message));
	}
  }

const register = async (req, res) => {
	try {
		const newUser = { ...req.body};
		
		const { errors, isValid } = validate(newUser);

		if (!isValid) return res.status(400).json(new Response().error(errors));

		if (await Users.findOne({ where: { email: newUser.email } }))
			return res
			.status(400)
			.json(new Response().error("Пользователь уже существует!"));

		
		bcrypt.genSalt(10, async (err, salt) => {
			bcrypt.hash(newUser.password, salt, async (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				try {
					const result = await Users.create(newUser);
	
					const payload = {
						id: result.id,
						email: result.email,
					};
					jwt.sign(payload, "key", { expiresIn: 5465346 }, (err, token) => {
						res.status(200).json(
							new Response().data({
							id: result.id,
							token,
							isAdmin
							})
						);
					});
				} catch (err) {
					return res.status(500).json(new Response().error("Ошибка сервера"));
				}
			});
		});


	} catch (err) {

	  res.status(500).json(new Response().error(err.message));

	}
}

const createUser = async (req, res) => {
	try {
		const newUser = { ...req.body};
		
		const { errors, isValid } = validate(newUser);

		if (!isValid) return res.status(400).json(new Response().error(errors));

		if (await Users.findOne({ where: { email: newUser.email } }))
			return res
			.status(400)
			.json(new Response().error("Пользователь уже существует!"));

		try {
			const result = await Users.create(newUser);

			return res
				.status(201)
				.json(new Response().data(result));

		} catch (err) {
			return res.status(500).json(new Response().error("Ошибка сервера"));
		}
	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const exist = await Users.findOne({
			where: { email },
		});

		if (!exist) return res.status(400).json("User does not exist");

		let isEqual = await bcrypt.compare(password, exist.password);

		if (isEqual) {
			const payload = {
				id: exist.id,
				email: exist.email,
			};
			jwt.sign(payload, "key", { expiresIn: 5465346 }, (err, token) => {
				res.status(200).json(
					new Response().data({
						id: exist.id,
						token,
						isAdmin: exist.isAdmin
					})
				);
			});
		} else {
		return res.status(400).json("Incorrect password");
		}


	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
	
}

module.exports = {
	getUser,
	createUser,
	login,
	register
}