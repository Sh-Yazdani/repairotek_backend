import express from "express";
import MaterialController from "../controllers/MaterialController";
const materialRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Material
 *   description: Endpoint for managing Materials
 */

/**
 * @swagger
 * /materials/{id}:
 *   get:
 *     tags: [Material]
 *     summary: Get material by ID
 *     description: Retrieve a material by its ID
 *     operationId: getMaterialById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Material'
 *       404:
 *         description: Material not found
 */

materialRouter.get("/materials/:id", MaterialController.getById);

/**
 * @swagger
 * /materials:
 *   get:
 *     tags: [Material]
 *     summary: Get all materials
 *     description: Retrieve a list of all materials
 *     operationId: getAllMaterials
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Material'
 */

materialRouter.get("/materials", MaterialController.getAll);

/**
 * @swagger
 * /materials:
 *   post:
 *     tags: [Material]
 *     summary: Create a new material
 *     description: Create a new material with the provided data
 *     operationId: createMaterial
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Material'
 *     responses:
 *       201:
 *         description: Material created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Material'
 */

materialRouter.post("/materials", MaterialController.create);

/**
 * @swagger
 * /materials/{id}:
 *   put:
 *     tags: [Material]
 *     summary: Update a material
 *     description: Update a material by its ID
 *     operationId: updateMaterial
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
 *             $ref: '#/components/schemas/Material'
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Material'
 *       404:
 *         description: Material not found
 */

materialRouter.put("/materials/:id", MaterialController.edit);
materialRouter.patch("/materials/:id", MaterialController.edit);

/**
 * @swagger
 * /materials/{id}:
 *   delete:
 *     tags: [Material]
 *     summary: Delete a material
 *     description: Delete a material by its ID
 *     operationId: deleteMaterial
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content on successful deletion
 */

materialRouter.delete("/materials/:id", MaterialController.delete);

export default materialRouter;
