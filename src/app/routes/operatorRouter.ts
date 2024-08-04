
import express from "express";
import OperatorController from "../controllers/OperatorController";

const operatorRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Operators
 *   description: Operator management
 */

/**
 * @swagger
 * /operators:
 *   get:
 *     summary: Get all operators
 *     tags: [Operators]
 *     operationId: getAllOperators
 *     responses:
 *       200:
 *         description: List of all operators
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Operator'
 *       500:
 *         description: Server error
 */
operatorRouter.get("/operators", OperatorController.getAll);

/**
 * @swagger
 * /operators/{id}:
 *   get:
 *     summary: Get operator by ID
 *     tags: [Operators]
 *     operationId: getOperatorById
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Operator ID
 *     responses:
 *       200:
 *         description: Operator data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Operator'
 *       404:
 *         description: Operator not found
 *       500:
 *         description: Server error
 */
operatorRouter.get("/operators/:id", OperatorController.getById);

/**
 * @swagger
 * /operators:
 *   post:
 *     summary: Create a new operator
 *     tags: [Operators]
 *     operationId: createOperator
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Operator'
 *     responses:
 *       201:
 *         description: Operator created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Operator'
 *       500:
 *         description: Server error
 */
operatorRouter.post("/operators", OperatorController.create);

/**
 * @swagger
 * /operators/{id}:
 *   put:
 *     summary: Update an operator by ID
 *     tags: [Operators]
 *     operationId: updateOperator
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Operator ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Operator'
 *     responses:
 *       200:
 *         description: Operator updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Operator'
 *       404:
 *         description: Operator not found
 *       500:
 *         description: Server error
 */
operatorRouter.put("/operators/:id", OperatorController.update);
operatorRouter.patch("/operators/:id", OperatorController.edit);

/**
 * @swagger
 * /operators/{id}:
 *   delete:
 *     summary: Delete an operator by ID
 *     tags: [Operators]
 *     operationId: deleteOperator
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Operator ID
 *     responses:
 *       204:
 *         description: No content, operator deleted successfully
 *       500:
 *         description: Server error
 */
operatorRouter.delete("/operators/:id", OperatorController.delete);
export default operatorRouter;
