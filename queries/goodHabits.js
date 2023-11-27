const db = require('../db/dbConfig.js');

const getAllGoodHabits = async () => {
	try {
		const allGoodHabits = await db.any('SELECT * FROM good_habits');
		return allGoodHabits;
	} catch (err) {
		return err;
	}
};

module.exports = {
	getAllGoodHabits,
};
