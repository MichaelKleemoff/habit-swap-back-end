DROP DATABASE IF EXISTS habit_swap_dev;
CREATE DATABASE habit_swap_dev;
\ c habit_swap_dev;
CREATE TABLE bad_habits (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	img_url TEXT,
	category TEXT,
	description VARCHAR(200),
	is_my_habit BOOLEAN,
	rating NUMERIC,
	CHECK (
		rating >= 0
		AND rating <= 10
	)
);
CREATE TABLE good_habits (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	img_url TEXT,
	category TEXT,
	description VARCHAR(200),
	is_my_habit BOOLEAN,
	rating NUMERIC,
	CHECK (
		rating >= 0
		AND rating <= 10
	),
	bad_habit_id INTEGER REFERENCES bad_habits (id) ON DELETE CASCADE
);