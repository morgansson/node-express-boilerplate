const express = require('express');
/*  const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const collectionValidation = require('../../validations/collection.validation'); */
const collectionController = require('../../controllers/collection.controller');

const router = express.Router();

router
  .route('/')/* 
  .post(auth('manageCollections'), validate(collectionValidation.createCollection), collectionController.createCollection) */
  .post(collectionController.createCollection)
  .get(collectionController.getCollections);

router
  .route('/:collectionId')
  .get(collectionController.getCollection)/* 
  .patch(auth('manageCollections'), validate(collectionValidation.updateCollection), collectionController.updateCollection)
  .delete(auth('manageCollections'), validate(collectionValidation.deleteCollection), collectionController.deleteCollection); */
  
  .patch(collectionController.updateCollection)
  .delete(collectionController.deleteCollection);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Collections
 *   description: Collection management and retrieval
 */

/**
 * @swagger
 * /collections:
 *   post:
 *     summary: Create a collection
 *     tags: [Collections]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - account
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               account:
 *                 type: string
 *             example:
 *               name: Degenerate Ape Academy
 *               description: "Apes on the blockchain"
 *               account: ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Collection'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all collections
 *     tags: [Collections]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Collection name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of collections
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Collection'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /collections/{id}:
 *   get:
 *     summary: Get a collection
 *     tags: [Collections]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Collection id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Collection'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a collection
 *     tags: [Collections]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Collection id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               account:
 *                 type: string
 *             example:
 *               name: SolPunks
 *               description: Punks on Solana
 *               account: BZDCUZd1bPnmTWX35z9sPPefu9T8Vvt8rdD13SCo4B65
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Collection'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a collection
 *     description: Only admins can delete collections.
 *     tags: [Collections]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Collection id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
