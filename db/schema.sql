CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers_db
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);