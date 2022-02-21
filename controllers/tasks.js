const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Sequelize, Op, where } = require("sequelize");


const Response = require("../utils/ApiResponse");
const validate = require("../validations/registration").validateRegisterInput;
const Tasks = require("../models").Task;
const Answers = require("../models").Answer;
const { checkAnswer, checkSingleQuestion } = require("../validations/checker");

const Log = require("../utils/log");


const createTask = async (req, res) => {
	try {

		const newTask = { ...req.body};

		const result = await Tasks.create(newTask);

		return res
			.status(201)
			.json(new Response().data(result));

		
	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}

const getAllTasks = async (req, res) => {
	try {
		const result = await Tasks.findAll();

		return res
			.status(201)
			.json(new Response().data(result));

		
	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}

const getTaskAnswers = async (req, res) => {
	try {
		const { id } = req.params;
		const answers = await Answers.findAll({
			where:{
				task_id: id
			}
		});
		return res
			.status(201)
			.json(new Response().data(answers));

	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}

const getTest = async (req, res) => {
	try {
		const tasks = await Tasks.findAll({
			include: [
				{
				  model: Answers,
				  attributes: ["id", "content", "isCorrect"],
				},
			  ],

		});
		console.log(tasks);

		return res
			.status(201)
			.json(new Response().data(tasks));

	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}

const getTestWithoutAnswers = async (req, res) => {
	try {
		const tasks = await Tasks.findAll({
			include: [
				{
				  model: Answers,
				  attributes: ["id", "content"],
				},
			  ],

		});
		console.log(tasks);

		return res
			.status(201)
			.json(new Response().data(tasks));

	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}

const createTasks = async (req, res) => {
	try {
		const { questions } = req.body;

		if(!questions.length) return res.status(500).json(new Response().error("No questions!"));

		if(!checkAnswer(questions)) return res.status(500).json(new Response().error("Incorrect structure of answer!"));

		promises = questions.map(async (element)=>{
			const {question, answers} = element;

			task = await Tasks.create({question});
			
			answers.map(async (item2) => {
				const {content, isCorrect} = item2;
				Answers.create({
					content,
					isCorrect,
					task_id: task.id
				});
			});
		})
		Promise.all(promises);

		return res
			.status(201)
			.json(new Response().data("Tasks created!"));

	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}
const addTask = async (req,res) => {
	try {
		const { question, answers } = req.body;
		const newTask = {
			question,
			answers
		};
		console.log(question);

		if(!newTask) return res.status(500).json(new Response().error("No questions!"));

		if(!checkSingleQuestion(newTask)) return res.status(500).json(new Response().error("Incorrect structure of answer!"));

		
		const task = await Tasks.create({question});

		console.log(task);
		
		answers.map(async (item2) => {
			const {content, isCorrect} = item2;
			Answers.create({
				content,
				isCorrect,
				task_id: task.id
			});
		});
		const newAnswers = await Promise.all(answers);

		return res
			.status(201)
			.json(new Response().data(task, newAnswers));

	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}
const updateTask = async (req, res) => {
	try {
		const { id } = req.params;
		const { question, answers } = req.body;
		const newTask = {
			question,
			answers
		};
		console.log(question);

		if(!newTask) return res.status(500).json(new Response().error("No questions!"));

		if(!checkSingleQuestion(newTask)) return res.status(500).json(new Response().error("Incorrect structure of answer!"));

		
		Tasks.update({question}, {where: {id}});
		await Answers.destroy({
			where: {task_id: id}
		});
		
		answers.map(async (item2) => {
			const {content, isCorrect} = item2;
			Answers.create({
				content,
				isCorrect,
				task_id: id
			});
		});
		Promise.all(answers);

		return res
			.status(201)
			.json(new Response().data("updated"));
	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}
const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		
		await Answers.destroy({where: {task_id: id}});
		
		Tasks.destroy({where: {id}});
		return res
			.status(201)
			.json(new Response().data("deleted"));
	} catch(err) {
		res.status(500).json(new Response().error(err.message));
	}
}



module.exports = {
	createTask,
	getAllTasks,
	getTaskAnswers,
	getTest,
	createTasks,
	updateTask,
	addTask,
	deleteTask,
	getTestWithoutAnswers
}