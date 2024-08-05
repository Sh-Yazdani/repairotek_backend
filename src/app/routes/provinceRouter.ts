import express from "express";
import ProvinceController from "../controllers/ProvinceController";

const provinceRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Provinces
 *   description: Endpoint for managing Provinces
 */

/**
 * @swagger
 * /provinces/{id}:
 *   get:
 *     tags: [Provinces]
 *     summary: Get province by ID
 *     description: Retrieve a province by its ID
 *     operationId: getProvinceById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Province data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Province'
 *       404:
 *         description: Province not found
 */

provinceRouter.get("/provinces/:id", ProvinceController.getById);

/**
 * @swagger
 * /provinces:
 *   get:
 *     tags: [Provinces]
 *     summary: Get all provinces
 *     description: Retrieve a list of all provinces
 *     operationId: getAllProvinces
 *     responses:
 *       200:
 *         description: A list of provinces
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Province'
 */

provinceRouter.get("/provinces", ProvinceController.getAll);

/**
 * @swagger
 * /provinces:
 *   post:
 *     tags: [Provinces]
 *     summary: Create a new province
 *     description: Create a new province with the provided data
 *     operationId: createProvince
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Province'
 *     responses:
 *       201:
 *         description: Province created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Province'
 */

provinceRouter.post("/provinces", ProvinceController.create);

/**
 * @swagger
 * /provinces/{id}:
 *   put:
 *     tags: [Provinces]
 *     summary: Update a province
 *     description: Update a province by its ID
 *     operationId: updateProvince
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
 *             $ref: '#/components/schemas/Province'
 *     responses:
 *       200:
 *         description: Province updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Province'
 *       404:
 *         description: Province not found
 */

provinceRouter.put("/provinces/:id", ProvinceController.edit);
provinceRouter.patch("/provinces/:id", ProvinceController.edit);

/**
 * @swagger
 * /provinces/{id}:
 *   delete:
 *     tags: [Provinces]
 *     summary: Delete a province
 *     description: Delete a province by its ID
 *     operationId: deleteProvince
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
 *         description: Province not found
 */

provinceRouter.delete("/provinces/:id", ProvinceController.delete);

export default provinceRouter;
