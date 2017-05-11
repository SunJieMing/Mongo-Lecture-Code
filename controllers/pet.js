const models = require('../models');
const ObjectId = require('mongoose').Schema.Types.ObjectId;

const getPet = (req, res) => {
  models.User.find({ 'pets._id': ObjectId(req.params.id) }, (err, user) => {
    if (err) return res.send(err);
    res.send(user);
  });
};

const addPet = (req, res) => {
  models.User.findById(req.body.userId, (err, user) => {
    if (err) return res.send(err);
    const pet = new models.Pet(req.body.petInfo);
    user.pets.push(pet);
    user.save((err, user) => {
      if (err) return res.send(err);
      res.send(user);
    });
  });
};

const deletePets = (req, res) => {

};

module.exports = (app) => {
  app.get('/pets/:petId', getPet);
  app.post('/pets', addPet);
  app.delete('/pets', deletePets);
};
