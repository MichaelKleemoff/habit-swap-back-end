const db = require('../db/dbConfig.js');

const getAllBadHabits = async () => {
	try {
		const allBadHabits = await db.any('SELECT * FROM bad_habits');
		return allBadHabits;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllBadHabits,
};
