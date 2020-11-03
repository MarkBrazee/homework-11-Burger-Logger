DROP DATABASE if EXISTS qivml1lmnynx19xz;

CREATE DATABASE qivml1lmnynx19xz;

USE qivml1lmnynx19xz;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);