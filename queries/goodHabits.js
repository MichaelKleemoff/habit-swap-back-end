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

module.exports = {
	getAllGoodHabits,
	getOneGoodHabit,
};
