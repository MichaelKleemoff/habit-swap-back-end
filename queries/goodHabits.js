const db = require('../db/dbConfig.js');

const getAllGoodHabits = async () => {
	try {
		const allGoodHabits = await db.any('SELECT * FROM good_habits');
		return allGoodHabits;
	} catch (err) {
		return err;
	}
};

const getOneGoodHabit = async (id) => {
	try {
		const oneGoodHabit = await db.one(
			'SELECT * FROM good_habits WHERE id=$1',
			id
		);
		return oneGoodHabit;
	} catch (err) {
		return err;
	}
};

const createGoodHabit = async (goodHabit) => {
	const { name, img_url, category, description, is_my_habit, rating } =
		goodHabit;
	try {
		const createdGoodHabit = await db.one(
			'INSERT INTO good_habits (name, img_url, category, description, is_my_habit, rating) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
			[name, img_url, category, description, is_my_habit, rating]
		);
		return createdGoodHabit;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllGoodHabits,
	getOneGoodHabit,
	createGoodHabit,
};
