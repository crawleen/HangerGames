const db = require("../models/restaurant");

module.exports = {
  create: function(req, res) {
    db
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db
      .find(req.query)
      //.sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findFavorites: function(req, res) {
    db
      .find({liked: {$eq: true}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  updateLike: function(req, res) {
    db
    .update({ "id": req.params.id }, {$set: {"liked":true, "disliked":false}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateDislike: function(req, res) {
    db
    .update({ "id": req.params.id }, {$set: {"disliked":true, "liked":false}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },  
  updateComment: function(req, res) {
    db
    .update({ "id": req.params.id }, {$set: {"comments":req.params.comments}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }  
};
