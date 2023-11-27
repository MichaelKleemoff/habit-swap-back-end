const express = require('express');

const {
	getAllBadHabits,
	getOneBadHabit,
	createBadHabit,
	deleteBadHabit,
	updateBadHabit,
} = require('../queries/badHabits.js');

const { checkName, checkBoolean } = require('../validations/checkHabits.js');

const badHabits = express.Router();

// SHOW ROUTE
badHabits.get('/:id', async (req, res) => {
	const { id } = req.params;
	const oneBadHabit = await getOneBadHabit(id);
	if (oneBadHabit) {
		res.json(oneBadHabit);
	} else {
		res.status(404).json({ error: 'Not found' });
	}
});

// INDEX ROUTE
badHabits.get('/', async (req, res) => {
	const allBadHabits = await getAllBadHabits();
	if (allBadHabits[0]) {
		res.status(200).json({ success: true, data: { payload: allBadHabits } });
	} else {
		res.status(500).json({ sucess: false, data: { error: 'Server error' } });
	}
});

// CREATE ROUTE
badHabits.post('/', checkName, checkBoolean, async (req, res) => {
	try {
		const createdBadHabit = await createBadHabit(req.body);
		res.json(createdBadHabit);
	} catch (error) {
		res.status(400).json({ error: 'Error' });
	}
});

// DELETE ROUTE
badHabits.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deletedBadHabit = await deleteBadHabit(id);
		if (deletedBadHabit) {
			res
				.status(200)
				.json({ success: true, payload: { data: deletedBadHabit } });
		} else {
			res.status(404).json('Bad habit with that id not found');
		}
	} catch (err) {
		res.send(err);
	}
});

// UPDATE ROUTE
badHabits.put('/:id', async (req, res) => {
	const { id } = req.params;
	const updatedBadHabit = await updateBadHabit(id, req.body);
	if (updatedBadHabit.id) {
		res.status(200).json(updatedBadHabit);
	} else {
		res.status(404).json('Bad habit with that id not found');
	}
});

module.exports = badHabits;
