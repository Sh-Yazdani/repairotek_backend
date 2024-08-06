import express from "express";
import CountryController from "../controllers/CountryController";
const countryRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Countries
 *   description: Country management
 */

/**
 * @swagger
 * /countries/{id}:
 *   get:
 *     tags: [Countries]
 *     summary: Get country by ID
 *     description: Retrieve a country by its ID
 *     operationId: getCountryById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Country data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */

countryRouter.get("/countries/:id", CountryController.getById);

/**
 * @swagger
 * /countries:
 *   get:
 *     tags: [Countries]
 *     summary: Get all countries
 *     description: Retrieve a list of all countries
 *     operationId: getAllCountries
 *     responses:
 *       200:
 *         description: List of all countries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Country'
 *       500:
 *         description: Server error
 */

countryRouter.get("/countries", CountryController.getAll);

/**
 * @swagger
 * /countries:
 *   post:
 *     tags: [Countries]
 *     summary: Create a new country
 *     description: Create a new country with the provided data
 *     operationId: createCountry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Country'
 *     responses:
 *       201:
 *         description: Country created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       500:
 *         description: Server error
 */

countryRouter.post("/countries", CountryController.create);

/**
 * @swagger
 * /countries/{id}:
 *   put:
 *     tags: [Countries]
 *     summary: Update a country by ID
 *     description: Update a country by its ID
 *     operationId: updateCountry
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
 *             $ref: '#/components/schemas/Country'
 *     responses:
 *       200:
 *         description: Country updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */

countryRouter.put("/countries/:id", CountryController.edit);
countryRouter.patch("/countries/:id", CountryController.edit);

/**
 * @swagger
 * /countries/{id}:
 *   delete:
 *     tags: [Countries]
 *     summary: Delete a country by ID
 *     description: Delete a country by its ID
 *     operationId: deleteCountry
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content, country deleted successfully
 *       500:
 *         description: Server error
 */

countryRouter.delete("/countries/:id", CountryController.delete);

export default countryRouter;
