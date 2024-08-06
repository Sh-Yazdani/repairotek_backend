import express from "express";
import DailyReportController from "../controllers/DailyReportController";
const dailyReportRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: DailyReports
 *   description: Daily Report management
 */

/**
 * @swagger
 * /dailyReports:
 *   get:
 *     tags: [DailyReports]
 *     summary: Get all daily reports
 *     description: Retrieve a list of all daily reports
 *     operationId: getAllDailyReports
 *     responses:
 *       200:
 *         description: List of all daily reports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DailyReport'
 *       500:
 *         description: Server error
 */
dailyReportRouter.get("/dailyReports", DailyReportController.getAll);

/**
 * @swagger
 * /dailyReports/{id}:
 *   get:
 *     tags: [DailyReports]
 *     summary: Get daily report by ID
 *     description: Retrieve a daily report by its ID
 *     operationId: getDailyReportById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Daily report data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DailyReport'
 *       404:
 *         description: Daily report not found
 *       500:
 *         description: Server error
 */
dailyReportRouter.get("/dailyReports/:id", DailyReportController.getById);

/**
 * @swagger
 * /dailyReports:
 *   post:
 *     tags: [DailyReports]
 *     summary: Create a new daily report
 *     description: Create a new daily report with the provided data
 *     operationId: createDailyReport
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DailyReport'
 *     responses:
 *       201:
 *         description: Daily report created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DailyReport'
 *       500:
 *         description: Server error
 */
dailyReportRouter.post("/dailyReports", DailyReportController.create);

/**
 * @swagger
 * /dailyReports/{id}:
 *   put:
 *     tags: [DailyReports]
 *     summary: Update a daily report by ID
 *     description: Update a daily report by its ID
 *     operationId: updateDailyReport
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
 *             $ref: '#/components/schemas/DailyReport'
 *     responses:
 *       200:
 *         description: Daily report updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DailyReport'
 *       404:
 *         description: Daily report not found
 *       500:
 *         description: Server error
 */
dailyReportRouter.put("/dailyReports/:id", DailyReportController.edit);
dailyReportRouter.patch("/dailyReports/:id", DailyReportController.edit);

/**
 * @swagger
 * /dailyReports/{id}:
 *   delete:
 *     tags: [DailyReports]
 *     summary: Delete a daily report by ID
 *     description: Delete a daily report by its ID
 *     operationId: deleteDailyReport
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content, daily report deleted successfully
 *       500:
 *         description: Server error
 */
dailyReportRouter.delete("/dailyReports/:id", DailyReportController.delete);

export default dailyReportRouter;
