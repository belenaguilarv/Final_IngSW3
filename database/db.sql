CREATE DATABASE IF NOT EXISTS supermarketdb;

USE supermarketdb;

CREATE TABLE list(
    id INT AUTO_INCREMENT PRIMARY KEY,
    product VARCHAR(40) DEFAULT NULL,
    quantity INT NOT NULL
);

DESCRIBE list;

INSERT INTO list (product, quantity) VALUES ('durazno', 6);
INSERT INTO list (product, quantity) VALUES ('palta', 1);
INSERT INTO list (product, quantity) VALUES ('zanahoria', 4);

-- SELECT * FROM list;     para ver todos los productos de la lista
