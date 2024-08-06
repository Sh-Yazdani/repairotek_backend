import express from "express";
import AssetController from "../controllers/AssetController";

/**
 * @swagger
 * tags:
 *   name: Assets
 *   description: Asset management
 */

/**
 * @swagger
 * /assets:
 *   get:
 *     summary: Get all assets
 *     tags: [Assets]
 *     responses:
 *       200:
 *         description: List of all assets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Asset'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /assets/{id}:
 *   get:
 *     summary: Get asset by ID
 *     tags: [Assets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Asset ID
 *     responses:
 *       200:
 *         description: Asset data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asset'
 *       404:
 *         description: Asset not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /assets:
 *   post:
 *     summary: Create a new asset
 *     tags: [Assets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Asset'
 *     responses:
 *       201:
 *         description: Asset created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asset'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /assets/{id}:
 *   put:
 *     summary: Update an asset by ID
 *     tags: [Assets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Asset ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Asset'
 *     responses:
 *       200:
 *         description: Asset updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asset'
 *       404:
 *         description: Asset not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /assets/{id}:
 *   delete:
 *     summary: Delete an asset by ID
 *     tags: [Assets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Asset ID
 *     responses:
 *       204:
 *         description: No content, asset deleted successfully
 *       500:
 *         description: Server error
 */

const assetRouter = express.Router();

assetRouter.get("/assets/:id", AssetController.getById);
assetRouter.get("/assets", AssetController.getAll);
assetRouter.post("/assets", AssetController.create);
assetRouter.put("/assets/:id", AssetController.edit);
assetRouter.patch("/assets/:id", AssetController.edit);
assetRouter.delete("/assets/:id", AssetController.delete);

export default assetRouter;
