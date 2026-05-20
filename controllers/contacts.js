const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const results = await mongodb.getDatabase().db().collection('contacts').find();
    results.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    try {
        const contactId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('contacts').findOne({ _id: contactId });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: 'Invalid ID format' });
    }
};

const createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json({ message: 'Some error occurred while creating the contact' });
    }
};

const updateContact = async (req, res) => {
    try {
        const contactId = new ObjectId(req.params.id);
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        const response = await mongodb.getDatabase().db().collection('contacts').replaceOne({ _id: contactId }, contact);
        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json({ message: 'Some error occurred while updating the contact' });
        }
    } catch (err) {
        res.status(400).json({ message: 'Invalid ID format' });
    }
};

const deleteContact = async (req, res) => {
    try {
        const contactId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({ _id: contactId });
        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json({ message: 'Some error occurred while deleting the contact' });
        }
    } catch (err) {
        res.status(400).json({ message: 'Invalid ID format' });
    }
};

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};