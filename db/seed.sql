\c habit_swap_dev;
INSERT INTO bad_habits (
		NAME,
		img_url,
		category,
		description,
		is_my_habit,
		rating
	)
VALUES (
		'smoking',
		'image.jpg',
		'health',
		'Smoking can cause COPD and cancer.',
		'true',
		10
	),
	(
		'drinking',
		'image.jpg',
		'health',
		'Drinking can be addictive. Too much drinking over time can damage organs like the liver and the brain causing dementia.',
		'true',
		10
	),
	(
		'overeating',
		'image.jpg',
		'health',
		'Overeating can lead to obesity and other health problems potentially life-threatening.',
		'true',
		10
	);
INSERT INTO good_habits (
		NAME,
		img_url,
		category,
		description,
		is_my_habit,
		rating
	)
VALUES (
		'nicorette gum',
		'image.jpg',
		'health',
		'Nicorette gum helps to deal with nicotine cravings replacing the danger of smoking with gum.',
		'true',
		10
	),
	(
		'meditation',
		'image.jpg',
		'health',
		'Meditation can help with mental well-being.',
		'true',
		10
	),
	(
		'exercise',
		'image.jpg',
		'health',
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