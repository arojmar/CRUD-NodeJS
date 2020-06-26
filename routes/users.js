var express = require('express');
let connection = require('../config/phones_db');
var router = express.Router();

/* CRUD - READ */
router.get('/', (req, res, next) => {
  let sqlQuery = `SELECT * FROM user 
                 JOIN phone ON user.phone_id = phone.phone_id;`;
  connection.query(sqlQuery, (err, result)=>{
    if(err) throw err;
    res.render('users', { result });
  });
});

/* CRUD - CREATE */
router.post('/registered', (req, res, next) => {
  let model = req.body.modelPhone;
  let color = req.body.colorPhone;
  let sqlQueryPhone = `INSERT INTO phone (model, color)
                      VALUES ("${model}", "${color}");`;
  connection.query(sqlQueryPhone, (err, resultPhone) => {
    if(err) throw err;
    let phone_id = resultPhone.insertId;
    let name = req.body.nameUser;
    let last_name = req.body.lastNameUser;
    let sqlQueryUser = `INSERT INTO user (name, last_name, phone_id)
                       VALUES ("${name}", "${last_name}", ${phone_id});`;
    connection.query(sqlQueryUser, (err, resultUser) => {
      if(err) throw err;
      console.log('DATABASE UPDATED');
      res.redirect('./');                 
    });
  });
});

/* CRUD - DELETE */
router.get('/delete/:userToDelete', (req, res, next) => {
  let user_id = req.params.userToDelete;
  let sqlRemove = `DELETE user, phone FROM user 
                  JOIN phone ON user.phone_id = phone.phone_id
                  WHERE user.user_id = ${user_id}`;
  connection.query(sqlRemove, (err, result) => {
    if(err) throw err;
    res.redirect('../'); 
  });
});

/* CRUD - UPDATE */
router.get('/profile/:userToEdit', (req, res, next) => {
  let user_id = req.params.userToEdit;
  let sqlQuery = `SELECT * FROM user 
                 JOIN phone ON user.phone_id = phone.phone_id
                 WHERE user.user_id = ${user_id};`;
  connection.query(sqlQuery, (err, result) => {
    if(err) throw err;
    
    res.render('usersProfile', {result: result[0]});
  });
});

router.post('/updated/:userToEdit', (req, res, next) => {
  let user_id = req.params.userToEdit;
  let name = req.body.nameUser;
  let last_name = req.body.lastNameUser;
  let model = req.body.modelPhone;
  let color = req.body.colorPhone;
  let sqlUpdate = `UPDATE user
                  JOIN phone ON user.phone_id = phone.phone_id  
                  SET user.name="${name}", user.last_name="${last_name}",
                      phone.model="${model}", phone.color="${color}"
                  WHERE user_id =${user_id};`;
  connection.query(sqlUpdate, (err, result) => {
    if(err) throw err;
    res.redirect('../');
  });
});

module.exports = router;
