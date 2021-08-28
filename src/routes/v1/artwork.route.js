const express = require('express');
/*  const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const artworkValidation = require('../../validations/artwork.validation'); */
const artworkController = require('../../controllers/artwork.controller');

const router = express.Router();

router
  .route('/')/* 
  .post(auth('manageArtworks'), validate(artworkValidation.createArtwork), artworkController.createArtwork) */
  .post(artworkController.createArtwork)
  .get(artworkController.getArtworks);

router
  .route('/:artworkId')
  .get(artworkController.getArtwork)/* 
  .patch(auth('manageArtworks'), validate(artworkValidation.updateArtwork), artworkController.updateArtwork)
  .delete(auth('manageArtworks'), validate(artworkValidation.deleteArtwork), artworkController.deleteArtwork); */
  
  .patch(artworkController.updateArtwork)
  .delete(artworkController.deleteArtwork);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Artworks
 *   description: Artwork management and retrieval
 */

/**
 * @swagger
 * /artworks:
 *   post:
 *     summary: Create an artwork
 *     tags: [Artworks]
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
 *               - mint
 *             properties:
 *               name:
 *                 type: string
 *               mint:
 *                 type: string
 *               parent:
 *                 type: string
 *             example:
 *               name: "Degen Ape #1"
 *               mint: BZDCUZd1bPnmTWX35z9sPPefu9T8Vvt8rdD13SCo4B65
 *               account: ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs
 *               parent: 6122d3c889b42d3320075167
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Artwork'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all artworks
 *     tags: [Artworks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Artwork name
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
 *         description: Maximum number of artworks
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
 *                     $ref: '#/components/schemas/Artwork'
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
 * /artworks/{id}:
 *   get:
 *     summary: Get a artwork
 *     tags: [Artworks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Artwork id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Artwork'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a artwork
 *     tags: [Artworks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Artwork id
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
 *                $ref: '#/components/schemas/Artwork'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a artwork
 *     description: Only admins can delete artworks.
 *     tags: [Artworks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Artwork id
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
