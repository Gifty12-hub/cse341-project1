const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/users');

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all users
 *     description: Returns a list of all users in the database
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', userControllers.getAll);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Get a single user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The MongoDB ObjectId of the user
 *     responses:
 *       200:
 *         description: A single user object
 *       400:
 *         description: Invalid ID format
 *       404:
 *         description: User not found
 */
router.get('/:id', userControllers.getSingle);

/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - username
 *               - email
 *               - ip_address
 *             properties:
 *               name:
 *                 type: string
 *                 example: David Kim
 *               username:
 *                 type: string
 *                 example: david_kim99
 *               email:
 *                 type: string
 *                 example: david.kim@gmail.com
 *               ip_address:
 *                 type: string
 *                 example: 10.0.0.88
 *     responses:
 *       201:
 *         description: User created — returns the new user id
 *       400:
 *         description: Missing required fields
 */
router.post('/', userControllers.createUser); //post

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Update a user by ID
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
 *               name:
 *                 type: string
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               ip_address:
 *                 type: string
 *     responses:
 *       204:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       400:
 *         description: Invalid ID format
 */
router.put('/:id', userControllers.updateUser); //put

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       400:
 *         description: Invalid ID format
 */
router.delete('/:id', userControllers.deleteUser); //delete

module.exports = router;