DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
 id INT AUTO_INCREMENT PRIMARY KEY,
 burger_name VARCHAR (30) NOT NULL,
 devoured BOOLEAN

);