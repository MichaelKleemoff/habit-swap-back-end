const checkName = (req, res, next) => {
	// Checking if the `req.body` has a `name`
	if (req.body.name) {
		next();
	} else {
		res.status(400).json({ error: 'Name is required' });
	}
};

const checkBoolean = (req, res, next) => {
	if (req.body.is_my_habit === true || req.body.is_my_habit === false) {
		next();
	} else {
		res.status(400).json({ error: 'is_my_habit must be a boolean value' });
	}
};

module.exports = {
	checkName,
	checkBoolean,
};
