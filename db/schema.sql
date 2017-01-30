CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(250) NOT NULL,
  devoured BOOLEAN NOT NULL,
  data TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

