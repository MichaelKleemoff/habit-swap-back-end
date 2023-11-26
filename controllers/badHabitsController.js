const express = require('express');

const { getAllBadHabits, getOneBadHabit } = require('../queries/badHabits.js');

const badHabits = express.Router();

badHabits.get('/:id', async (req, res) => {
	const { id } = req.params;
	const oneBadHabit = await getOneBadHabit(id);
	if (oneBadHabit) {
		res.json(oneBadHabit);
	} else {
		res.status(404).json({ error: 'Not found' });
	}
});

badHabits.get('/', async (req, res) => {
	const allBadHabits = await getAllBadHabits();
	if (allBadHabits[0]) {
		res.status(200).json({ success: true, data: { payload: allBadHabits } });
	} else {
		res.status(500).json({ sucess: false, data: { error: 'Server error' } });
	}
});

module.exports = badHabits;
