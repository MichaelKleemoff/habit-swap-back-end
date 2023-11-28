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

const updateBadHabit = async (id, badHabit) => {
	try {
		const { name, img_url, category, description, is_my_habit, rating } =
			badHabit;
		const updatedBadHabit = await db.one(
			'UPDATE bad_habits SET name=$1, img_url=$2, category=$3, description=$4, is_my_habit=$5, rating=$6 WHERE id=$7 RETURNING *',
			[name, img_url, category, description, is_my_habit, rating, id]
		);
		return updatedBadHabit;
	} catch (err) {
		return err;
	}
};

const getAllBadHabitsSwapGoodHabits = async (id) => {
	try {
		const allBadHabitsSwapGoodHabits = await db.any(
			`SELECT * FROM
      good_habits_bad_habits 
      JOIN 
      bad_habits
      ON 
      bad_habits.id=good_habits_bad_habits.bad_habit_id
      JOIN
      good_habits 
      ON
      good_habits.id=good_habits_bad_habits.good_habit_id 
      WHERE 
      bad_habits.id = $1;`,
			id
		);
		return allBadHabitsSwapGoodHabits;
	} catch (err) {
		return err;
	}
};

const addNewGoodHabitToBadHabitsSwapGoodHabits = async (
	badHabitId,
	goodHabitId
) => {
	try {
		let add = await db.none(
			`INSERT INTO good_habits_bad_habits (bad_habit_id, good_habit_id) VALUES ($1, $2)`,
			[badHabitId, goodHabitId]
		);
		return !add;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllBadHabits,
	getOneBadHabit,
	createBadHabit,
	deleteBadHabit,
	updateBadHabit,
	getAllBadHabitsSwapGoodHabits,
	addNewGoodHabitToBadHabitsSwapGoodHabits,
};
