const express = require('express');

const {
	getAllGoodHabits,
	getOneGoodHabit,
	createGoodHabit,
	deleteGoodHabit,
	updateGoodHabit,
} = require('../queries/goodHabits.js');

const { checkName, checkBoolean } = require('../validations/checkHabits.js');

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

// CREATE ROUTE
goodHabits.post('/', checkName, checkBoolean, async (req, res) => {
	try {
		const createdGoodHabit = await createGoodHabit(req.body);
		res.json(createdGoodHabit);
	} catch (error) {
		res.status(400).json({ error: 'Error' });
	}
});

// DELETE ROUTE
goodHabits.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deletedGoodHabit = await deleteGoodHabit(id);
		if (deletedGoodHabit) {
			res
				.status(200)
				.json({ success: true, payload: { data: deletedGoodHabit } });
		} else {
			res.status(404).json('Good habit with that id not found');
		}
	} catch (err) {
		res.send(err);
	}
});

// UPDATE ROUTE
goodHabits.put('/:id', async (req, res) => {
	const { id } = req.params;
	const updatedGoodHabit = await updateGoodHabit(id, req.body);
	if (updatedGoodHabit.id) {
		res.status(200).json(updatedGoodHabit);
	} else {
		res.status(404).json('Good habit with that id not found');
	}
});

module.exports = goodHabits;
