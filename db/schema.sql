DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burgers_db;

USE burger_db;

CREATE TABLE burger (
 id INT AUTO_INCREMENT PRIMARY KEY,
 burger_name VARCHAR (30) NOT NULL,
 devoured BOOLEAN


)