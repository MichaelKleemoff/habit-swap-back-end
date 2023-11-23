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
		'Smoking causes cancer',
		'true',
		10
	),
	(
		'drinking',
		'image.jpg',
		'health',
		'Smoking causes cancer',
		'true',
		10
	),
	(
		'overeating',
		'image.jpg',
		'health',
		'Smoking causes cancer',
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
		'Nicorette gum helps to deal with nicotine cravings',
		'true',
		10
	),
	(
		'meditation',
		'image.jpg',
		'health',
		'Nicorette gum helps to deal with nicotine cravings',
		'true',
		10
	),
	(
		'exercise',
		'image.jpg',
		'health',
		'Nicorette gum helps to deal with nicotine cravings',
		'true',
		10
	);
INSERT INTO good_habits_bad_habits (bad_habit_id, good_habit_id)
VALUES ('1', '1'),
	('1', '2'),
	('1', '3');