const db = require('../db/dbConfig.js');

const getAllBadHabits = async () => {
	try {
		const allBadHabits = await db.any('SELECT * FROM bad_habits');
		return allBadHabits;
	} catch (err) {
		return err;
	}
};

const getOneBadHabit = async (id) => {
	try {
		const oneBadHabit = await db.one(
			'SELECT * FROM bad_habits WHERE id=$1',
			id
		);
		return oneBadHabit;
	} catch (err) {
		return err;
	}
};

const createBadHabit = async (badHabit) => {
	const { name, img_url, category, description, is_my_habit, rating } =
		badHabit;
	try {
		const createdBadHabit = await db.one(
			'INSERT INTO bad_habits (name, img_url, category, description, is_my_habit, rating) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
			[name, img_url, category, description, is_my_habit, rating]
		);
		return createdBadHabit;
	} catch (err) {
		return err;
	}
};

const deleteBadHabit = async (id) => {
	try {
		const deletedBadHabit = await db.one(
			'DELETE from bad_habits WHERE id=$1 RETURNING *',
			id
		);
		return deletedBadHabit;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllBadHabits,
	getOneBadHabit,
	createBadHabit,
	deleteBadHabit,
};
