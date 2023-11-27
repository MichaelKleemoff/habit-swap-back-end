const express = require('express');

const { getAllGoodHabits } = require('../queries/goodHabits.js');

const goodHabits = express.Router();

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
