import express from "express";
import PermissionController from "../controllers/PermissionController";

const permissionRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Permissions
 *   description: Endpoint for managing Permissions
 */

/**
 * @swagger
 * /permissions:
 *   get:
 *     tags: [Permissions]
 *     summary: Get all permissions
 *     description: Retrieve a list of all permissions
 *     operationId: getAllPermissions
 *     responses:
 *       200:
 *         description: A list of permissions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Permission'
 */

permissionRouter.get("/permissions", PermissionController.getAll);

/**
 * @swagger
 * /permissions/{id}:
 *   get:
 *     tags: [Permissions]
 *     summary: Get permission by ID
 *     description: Retrieve a permission by its ID
 *     operationId: getPermissionById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Permission data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Permission'
 *       404:
 *         description: Permission not found
 */

permissionRouter.get("/permissions/:id", PermissionController.getById);

/**
 * @swagger
 * /permissions:
 *   post:
 *     tags: [Permissions]
 *     summary: Create a new permission
 *     description: Create a new permission with the provided data
 *     operationId: createPermission
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Permission'
 *     responses:
 *       201:
 *         description: Permission created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Permission'
 */

permissionRouter.post("/permissions", PermissionController.create);

/**
 * @swagger
 * /permissions/{id}:
 *   put:
 *     tags: [Permissions]
 *     summary: Update a permission
 *     description: Update a permission by its ID
 *     operationId: updatePermission
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
 *             $ref: '#/components/schemas/Permission'
 *     responses:
 *       200:
 *         description: Permission updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Permission'
 *       404:
 *         description: Permission not found
 */

permissionRouter.put("/permissions/:id", PermissionController.edit);
permissionRouter.patch("/permissions/:id", PermissionController.edit);

/**
 * @swagger
 * /permissions/{id}:
 *   delete:
 *     tags: [Permissions]
 *     summary: Delete a permission
 *     description: Delete a permission by its ID
 *     operationId: deletePermission
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
 *         description: Permission not found
 */

permissionRouter.delete("/permissions/:id", PermissionController.delete);

export default permissionRouter;
