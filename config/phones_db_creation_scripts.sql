DROP DATABASE phones_db;
CREATE DATABASE phones_db;
USE phones_db;

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

-- ALTER TABLE user ADD CONSTRAINT fk_phone_1 FOREIGN KEY (phone_id) REFERENCES phone(phone_id) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO phone (model, color) VALUES ("Samsung S10+", "negro");
INSERT INTO user (name, last_name, phone_id) VALUES ("User1", "LastNAME1", 1);

SELECT * FROM phone;
SELECT * FROM user;
SELECT user.name, user.last_name, phone.model, phone.color FROM user JOIN phone ON user.phone_id = phone.phone_id;  

SELECT * FROM user JOIN phone ON user.phone_id = phone.phone_id WHERE user.user_id = 6;

-- DELETE user, phone FROM user JOIN phone ON user.phone_id = phone.phone_id WHERE user.phone_id = 1;

UPDATE user
 JOIN phone ON user.phone_id = phone.phone_id 
 SET user.name="username2", user.last_name="lastNAME2", phone.model="Iphone X", phone.color="blanco" 
 WHERE user_id =2;