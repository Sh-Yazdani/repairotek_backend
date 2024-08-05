import express from "express";
import GalleryController from "../controllers/ProjectGalleryController";

const galleryRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Galleries
 *   description: API endpoints for managing project galleries
 */

/**
 * @swagger
 * /galleries:
 *   get:
 *     tags: [Galleries]
 *     summary: Get all galleries
 *     description: Retrieve a list of all project galleries
 *     operationId: getAllGalleries
 *     responses:
 *       200:
 *         description: A list of project galleries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Gallery'
 */

galleryRouter.get("/galleries", GalleryController.getAll);

/**
 * @swagger
 * /galleries/{id}:
 *   get:
 *     tags: [Galleries]
 *     summary: Get gallery by ID
 *     description: Retrieve a project gallery by its ID
 *     operationId: getGalleryById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project gallery data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gallery'
 *       404:
 *         description: Gallery not found
 */

galleryRouter.get("/galleries/:id", GalleryController.getById);

/**
 * @swagger
 * /galleries:
 *   post:
 *     tags: [Galleries]
 *     summary: Create a new gallery
 *     description: Create a new project gallery with the provided data
 *     operationId: createGallery
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Gallery'
 *     responses:
 *       201:
 *         description: Gallery created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gallery'
 */

galleryRouter.post("/galleries", GalleryController.create);

/**
 * @swagger
 * /galleries/{id}:
 *   put:
 *     tags: [Galleries]
 *     summary: Update a gallery
 *     description: Update a project gallery by its ID
 *     operationId: updateGallery
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Gallery'
 *     responses:
 *       200:
 *         description: Gallery updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gallery'
 *       404:
 *         description: Gallery not found
 */

galleryRouter.put("/galleries/:id", GalleryController.edit);
galleryRouter.patch("/galleries/:id", GalleryController.edit);

/**
 * @swagger
 * /galleries/{id}:
 *   delete:
 *     tags: [Galleries]
 *     summary: Delete a gallery
 *     description: Delete a project gallery by its ID
 *     operationId: deleteGallery
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content on successful deletion
 *       404:
 *         description: Gallery not found
 */

galleryRouter.delete("/galleries/:id", GalleryController.delete);

export default galleryRouter;
