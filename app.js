// DEPENDENCIES
const cors = require('cors');
const express = require('express');

const badHabitsController = require('./controllers/badHabitsController.js');
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/badHabits', badHabitsController);

// ROUTES
app.get('/', (req, res) => {
	res.send('Welcome to Habit Swap Back-End App 🚬 ➡️ 🥦 = ♥️');
});

// 404 ROUTE
app.get('*', (req, res) => {
	res.status(404).json({ success: false, data: { error: 'Page not found' } });
});

// EXPORT
module.exports = app;
