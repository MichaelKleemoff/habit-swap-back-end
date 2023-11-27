const express = require('express');

const {
	getAllGoodHabits,
	getOneGoodHabit,
} = require('../queries/goodHabits.js');

const goodHabits = express.Router();

// SHOW ROUTE
goodHabits.get('/:id', async (req, res) => {
	const { id } = req.params;
	const oneGoodHabit = await getOneGoodHabit(id);
	if (oneGoodHabit) {
		res.json(oneGoodHabit);
	} else {
		res.status(404).json({ error: 'Not found' });
	}
});

// INDEX ROUTE
goodHabits.get('/', async (req, res) => {
	const allGoodHabits = await getAllGoodHabits();
	if (allGoodHabits[0]) {
		res.status(200).json({ success: true, data: { payload: allGoodHabits } });
	} else {
		res.status(500).json({ success: false, data: { error: 'Server error' } });
	}
});

module.exports = goodHabits;
