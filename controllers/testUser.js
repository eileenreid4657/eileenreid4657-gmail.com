const { User } = require('../models');

const findAll = () => {
  User.findAll({})
    .then(dbModel => console.log('dbModel', dbModel))
    .catch(err => console.log(err));
};

const create = ({ body }, res) => {
  User.create(body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
};

findAll();

// node testUser.js

