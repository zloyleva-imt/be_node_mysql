CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY (id)
) ENGINE=INNODB;

INSERT INTO `temp`.`users` (`name`, `password`) VALUES ('Oleh', '123456789');
