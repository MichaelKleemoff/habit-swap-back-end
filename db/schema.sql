DROP DATABASE IF EXISTS habit_swap_dev;
CREATE DATABASE habit_swap_dev;
\c habit_swap_dev;
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
	)
);
-- We want to relate and keep track of all the good habits to any bad habits
-- 1. Reference PK of bad_habits
-- 2. Reference PK of good_habits
CREATE TABLE good_habits_bad_habits (
	id SERIAL PRIMARY KEY,
	bad_habit_id INTEGER REFERENCES bad_habits (id) ON DELETE CASCADE,
	good_habit_id INTEGER REFERENCES good_habits (id) ON DELETE CASCADE
);