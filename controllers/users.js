const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const results = await mongodb.getDatabase().db().collection('users').find();
    results.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);  // ✅ convert to ObjectId
    const result = await mongodb.getDatabase().db().collection('users').findOne({_id: userId});  // ✅ findOne
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
};

module.exports = {
    getAll,
    getSingle
};