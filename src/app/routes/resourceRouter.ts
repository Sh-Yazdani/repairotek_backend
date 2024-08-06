import express from "express";
import ResourceController from "../controllers/ResourceController";

const resourceRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Resources
 *   description: Endpoint for managing Resources
 */

/**
 * @swagger
 * /resources/{id}:
 *   get:
 *     tags: [Resources]
 *     summary: Get resource by ID
 *     description: Retrieve a resource by its ID
 *     operationId: getResourceById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resource data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *       404:
 *         description: Resource not found
 */

resourceRouter.get("/resources/:id", ResourceController.getById);

/**
 * @swagger
 * /resources:
 *   get:
 *     tags: [Resources]
 *     summary: Get all resources
 *     description: Retrieve a list of all resources
 *     operationId: getAllResources
 *     responses:
 *       200:
 *         description: A list of resources
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Resource'
 */

resourceRouter.get("/resources", ResourceController.getAll);

/**
 * @swagger
 * /resources:
 *   post:
 *     tags: [Resources]
 *     summary: Create a new resource
 *     description: Create a new resource with the provided data
 *     operationId: createResource
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resource'
 *     responses:
 *       201:
 *         description: Resource created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 */

resourceRouter.post("/resources", ResourceController.create);

/**
 * @swagger
 * /resources/{id}:
 *   put:
 *     tags: [Resources]
 *     summary: Update a resource
 *     description: Update a resource by its ID
 *     operationId: updateResource
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
 *             $ref: '#/components/schemas/Resource'
 *     responses:
 *       200:
 *         description: Resource updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *       404:
 *         description: Resource not found
 */

resourceRouter.put("/resources/:id", ResourceController.edit);
resourceRouter.patch("/resources/:id", ResourceController.edit);

/**
 * @swagger
 * /resources/{id}:
 *   delete:
 *     tags: [Resources]
 *     summary: Delete a resource
 *     description: Delete a resource by its ID
 *     operationId: deleteResource
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
 *         description: Resource not found
 */

resourceRouter.delete("/resources/:id", ResourceController.delete);

export default resourceRouter;
