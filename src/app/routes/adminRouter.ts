import express from "express";
import AdminController from "../controllers/AdminController";

const adminRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: Admin management
 */

/**
 * @swagger
 * /admins:
 *   get:
 *     summary: Get all admins
 *     tags: [Admins]
 *     operationId: getAllAdmins
 *     responses:
 *       200:
 *         description: List of all admins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Admin'
 *       500:
 *         description: Server error
 */

adminRouter.get("/admins", AdminController.getAll);

/**
 * @swagger
 * /admins/{id}:
 *   get:
 *     summary: Get admin by ID
 *     tags: [Admins]
 *     operationId: getAdminById
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */

adminRouter.get("/admins/:id", AdminController.getById);

/**
 * @swagger
 * /admins:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admins]
 *     operationId: createAdmin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       201:
 *         description: Admin created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       500:
 *         description: Server error
 */

adminRouter.post("/admins", AdminController.create);

// /**
//  * @swagger
//  * /admins/{id}:
//  *   put:
//  *     summary: Update an admin by ID
//  *     tags: [Admins]
//  *     operationId: updateAdmin
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: Admin ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Admin'
//  *     responses:
//  *       200:
//  *         description: Admin updated successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Admin'
//  *       404:
//  *         description: Admin not found
//  *       500:
//  *         description: Server error
//  */

// adminRouter.put("/admins/:id", AdminController.edit);

// /**
//  * @swagger
//  * /admins/{id}:
//  *   delete:
//  *     summary: Delete an admin by ID
//  *     tags: [Admins]
//  *     operationId: deleteAdmin
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: Admin ID
//  *     responses:
//  *       204:
//  *         description: No content, admin deleted successfully
//  *       500:
//  *         description: Server error
//  */

// adminRouter.delete("/admins/:id", AdminController.delete);

export default adminRouter;
