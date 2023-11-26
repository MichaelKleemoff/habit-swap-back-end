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

module.exports = {
	getAllBadHabits,
	getOneBadHabit,
};
