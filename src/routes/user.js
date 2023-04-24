const express = require('express');
const userSchema = require('../models/user.model');
const router = express.Router();

//Routes

//Create Users
router.post('/create', (req, res) => {
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Get All Users
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Get a Specific User
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Update a Specific User
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { name, age, email } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Delete a Specific User

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;