const express = require('express');

const { getAllBadHabits } = require('../queries/badHabits.js');

const badHabits = express.Router();

badHabits.get('/', async (req, res) => {
	const allBadHabits = await getAllBadHabits();
	if (allBadHabits[0]) {
		res.status(200).json({ success: true, data: { payload: allBadHabits } });
	} else {
		res.status(500).json({ sucess: false, data: { error: 'Server error' } });
	}
});

module.exports = badHabits;
