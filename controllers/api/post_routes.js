const router = require('express').Router();
const { User, Post } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Post.findAll({

    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;