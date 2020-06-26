DROP DATABASE phones;
CREATE DATABASE phones;
USE phones;

CREATE TABLE phone(
	phone_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(50),
    color VARCHAR(50)
);


CREATE TABLE user(
	user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    last_name VARCHAR(100),
    phone_id INTEGER,
    CONSTRAINT fk_phone_1 FOREIGN KEY (phone_id)
		REFERENCES phone(phone_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO phone (model, color) VALUES ("Samsung S10+", "negro");
INSERT INTO user (name, last_name, phone_id) VALUES ("Alfonso", "Rojo", 1);

SELECT * FROM phone;
SELECT * FROM user;
SELECT user.name, user.last_name, phone.model, phone.color FROM user JOIN phone ON user.phone_id = phone.phone_id;  