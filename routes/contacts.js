const express = require('express');
const router = express.Router();

const contactControllers = require('../controllers/contacts');

/**
 * @swagger
 * /contacts/:
 *   get:
 *     summary: Get all contacts
 *     description: Returns a list of all contacts in the database
 *     responses:
 *       200:
 *         description: A list of contacts
 */
router.get('/', contactControllers.getAll);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get a single contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The MongoDB ObjectId of the contact
 *     responses:
 *       200:
 *         description: A single contact object
 *       400:
 *         description: Invalid ID format
 *       404:
 *         description: Contact not found
 */
router.get('/:id', contactControllers.getSingle);

/**
 * @swagger
 * /contacts/:
 *   post:
 *     summary: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - favoriteColor
 *               - birthday
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: James
 *               lastName:
 *                 type: string
 *                 example: Osei
 *               email:
 *                 type: string
 *                 example: james.osei@gmail.com
 *               favoriteColor:
 *                 type: string
 *                 example: blue
 *               birthday:
 *                 type: string
 *                 example: 22/07/1990
 *     responses:
 *       204:
 *         description: Contact created successfully
 *       500:
 *         description: Internal Server Error
 */
router.post('/', contactControllers.createContact);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *     responses:
 *       204:
 *         description: Contact updated successfully
 *       400:
 *         description: Invalid ID format
 *       500:
 *         description: Internal Server Error
 */
router.put('/:id', contactControllers.updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Contact deleted successfully
 *       400:
 *         description: Invalid ID format
 *       500:
 *         description: Internal Server Error
 */
router.delete('/:id', contactControllers.deleteContact);

module.exports = router;