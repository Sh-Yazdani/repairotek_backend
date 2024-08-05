import express from "express";
import RoleController from "../controllers/RoleController";

const roleRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Endpoint for managing Roles
 */

/**
 * @swagger
 * /roles/{id}:
 *   get:
 *     tags: [Roles]
 *     summary: Get role by ID
 *     description: Retrieve a role by its ID
 *     operationId: getRoleById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Role not found
 */

roleRouter.get("/roles/:id", RoleController.getById);

/**
 * @swagger
 * /roles:
 *   get:
 *     tags: [Roles]
 *     summary: Get all roles
 *     description: Retrieve a list of all roles
 *     operationId: getAllRoles
 *     responses:
 *       200:
 *         description: A list of roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 */

roleRouter.get("/roles", RoleController.getAll);

/**
 * @swagger
 * /roles:
 *   post:
 *     tags: [Roles]
 *     summary: Create a new role
 *     description: Create a new role with the provided data
 *     operationId: createRole
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       201:
 *         description: Role created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 */

roleRouter.post("/roles", RoleController.create);

/**
 * @swagger
 * /roles/{id}:
 *   put:
 *     tags: [Roles]
 *     summary: Update a role
 *     description: Update a role by its ID
 *     operationId: updateRole
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
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: Role updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Role not found
 */

roleRouter.put("/roles/:id", RoleController.edit);
roleRouter.patch("/roles/:id", RoleController.edit);

/**
 * @swagger
 * /roles/{id}:
 *   delete:
 *     tags: [Roles]
 *     summary: Delete a role
 *     description: Delete a role by its ID
 *     operationId: deleteRole
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
 *         description: Role not found
 */

roleRouter.delete("/roles/:id", RoleController.delete);

export default roleRouter;
