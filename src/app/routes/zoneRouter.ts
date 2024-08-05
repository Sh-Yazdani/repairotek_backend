import express from "express";
import ZoneController from "../controllers/ZoneController";

const zoneRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Zones
 *   description: API endpoints for managing zones
 */

/**
 * @swagger
 * /zones:
 *   get:
 *     tags: [Zones]
 *     summary: Get all zones
 *     description: Retrieve a list of all zones
 *     operationId: getAllZones
 *     responses:
 *       200:
 *         description: A list of zones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Zone'
 */

zoneRouter.get("/zones", ZoneController.getAll);

/**
 * @swagger
 * /zones/{id}:
 *   get:
 *     tags: [Zones]
 *     summary: Get zone by ID
 *     description: Retrieve a zone by its ID
 *     operationId: getZoneById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Zone data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Zone'
 *       404:
 *         description: Zone not found
 */

zoneRouter.get("/zones/:id", ZoneController.getById);

/**
 * @swagger
 * /zones:
 *   post:
 *     tags: [Zones]
 *     summary: Create a new zone
 *     description: Create a new zone with the provided data
 *     operationId: createZone
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Zone'
 *     responses:
 *       201:
 *         description: Zone created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Zone'
 */

zoneRouter.post("/zones", ZoneController.create);

/**
 * @swagger
 * /zones/{id}:
 *   put:
 *     tags: [Zones]
 *     summary: Update a zone
 *     description: Update a zone by its ID
 *     operationId: updateZone
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
 *             $ref: '#/components/schemas/Zone'
 *     responses:
 *       200:
 *         description: Zone updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Zone'
 *       404:
 *         description: Zone not found
 */

zoneRouter.put("/zones/:id", ZoneController.edit);
zoneRouter.patch("/zones/:id", ZoneController.edit);

/**
 * @swagger
 * /zones/{id}:
 *   delete:
 *     tags: [Zones]
 *     summary: Delete a zone
 *     description: Delete a zone by its ID
 *     operationId: deleteZone
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
 *         description: Zone not found
 */

zoneRouter.delete("/zones/:id", ZoneController.delete);

export default zoneRouter;
