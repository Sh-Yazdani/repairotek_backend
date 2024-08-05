import express from "express";
import ProjectCostController from "../controllers/ProjectCostController";

const projectCostRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: ProjectCosts
 *   description: Endpoint for managing ProjectCosts
 */

/**
 * @swagger
 * /projectCosts/{id}:
 *   get:
 *     tags: [ProjectCosts]
 *     summary: Get project cost by ID
 *     description: Retrieve a project cost by its ID
 *     operationId: getProjectCostById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project cost data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectCost'
 *       404:
 *         description: Project cost not found
 */

projectCostRouter.get("/projectCosts/:id", ProjectCostController.getById);

/**
 * @swagger
 * /projectCosts:
 *   get:
 *     tags: [ProjectCosts]
 *     summary: Get all project costs
 *     description: Retrieve a list of all project costs
 *     operationId: getAllProjectCosts
 *     responses:
 *       200:
 *         description: A list of project costs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProjectCost'
 */

projectCostRouter.get("/projectCosts", ProjectCostController.getAll);

/**
 * @swagger
 * /projectCosts:
 *   post:
 *     tags: [ProjectCosts]
 *     summary: Create a new project cost
 *     description: Create a new project cost with the provided data
 *     operationId: createProjectCost
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProjectCost'
 *     responses:
 *       201:
 *         description: Project cost created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectCost'
 */

projectCostRouter.post("/projectCosts", ProjectCostController.create);

/**
 * @swagger
 * /projectCosts/{id}:
 *   put:
 *     tags: [ProjectCosts]
 *     summary: Update a project cost
 *     description: Update a project cost by its ID
 *     operationId: updateProjectCost
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
 *             $ref: '#/components/schemas/ProjectCost'
 *     responses:
 *       200:
 *         description: Project cost updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectCost'
 *       404:
 *         description: Project cost not found
 */

projectCostRouter.put("/projectCosts/:id", ProjectCostController.edit);
projectCostRouter.patch("/projectCosts/:id", ProjectCostController.edit);

/**
 * @swagger
 * /projectCosts/{id}:
 *   delete:
 *     tags: [ProjectCosts]
 *     summary: Delete a project cost
 *     description: Delete a project cost by its ID
 *     operationId: deleteProjectCost
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
 *         description: Project cost not found
 */

projectCostRouter.delete("/projectCosts/:id", ProjectCostController.delete);

export default projectCostRouter;
