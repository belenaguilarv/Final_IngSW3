CREATE DATABASE IF NOT EXISTS supermarketdb;

USE supermarketdb;

CREATE TABLE list(
    id INT AUTO_INCREMENT PRIMARY KEY,
    product VARCHAR(40) DEFAULT NULL,
    quantity INT NOT NULL
);

DESCRIBE list;

