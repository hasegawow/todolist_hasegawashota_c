const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const knex = require('../db/knex');


router.post('/', function (req, res, next) {
    const tabs = req.body.plus;
    const user_id = req.session.userid;

    knex('tabs')
        .insert({name :tabs, user_id :user_id})
        .then(function (){
            res.redirect('/');
        })
        .catch(function (err){
            console.error(err);
        })
});

module.exports = router;