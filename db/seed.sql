\c habit_swap_dev;
INSERT INTO bad_habits (
		name,
		img_url,
		category,
		description,
		is_my_habit,
		rating
	)
VALUES (
		'smoking',
		'https://tinyurl.com/2wkyjscz',
		'physical health',
		'Smoking can cause COPD and cancer.',
		'true',
		10
	),
	(
		'drinking',
		'https://tinyurl.com/28xp2ncy',
		'physical health',
		'Drinking can be addictive. Too much drinking over time can damage organs like the liver and the brain causing dementia.',
		'true',
		10
	),
	(
		'overeating',
		'https://tinyurl.com/3uhpnej8',
		'physical health',
		'Overeating can lead to obesity and other health problems potentially life-threatening.',
		'true',
		10
	);
INSERT INTO good_habits (
		name,
		img_url,
		category,
		description,
		is_my_habit,
		rating
	)
VALUES (
		'nicorette gum',
		'https://m.media-amazon.com/images/I/816w8kq8aEL.jpg',
		'craving cessation',
		'Nicorette gum helps to deal with nicotine cravings replacing the danger of smoking with gum.',
		'true',
		10
	),
	(
		'meditation',
		'https://tinyurl.com/4wbdbbhj',
		'mental well-being',
		'Meditation can help with mental well-being.',
		'true',
		10
	),
	(
		'exercise',
		'https://tinyurl.com/bdfj9h2b',
		'physical health',
		'Exercise helps with fitness and weight-loss. Exercise can contribute to overall mental well-being.',
		'true',
		10
	);
INSERT INTO good_habits_bad_habits (bad_habit_id, good_habit_id)
VALUES 
	('1', '1'),
	('1', '2'),
	('1', '3'),
	('2', '2'),
	('2', '3'),
	('3', '2'),
	('3', '3');