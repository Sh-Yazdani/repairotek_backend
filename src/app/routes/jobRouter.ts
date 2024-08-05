import express from "express";
import JobController from "../controllers/JobController";

const jobRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Endpoint for managing Jobs
 */

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     operationId: getAllJobs
 *     responses:
 *       200:
 *         description: List of all jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       500:
 *         description: Server error
 */

jobRouter.get("/jobs", JobController.getAll);

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get job by ID
 *     tags: [Jobs]
 *     operationId: getJobById
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Job data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       404:
 *         description: Job not found
 *       500:
 *         description: Server error
 */

jobRouter.get("/jobs/:id", JobController.getById);

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create a new job
 *     tags: [Jobs]
 *     operationId: createJob
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       500:
 *         description: Server error
 */

jobRouter.post("/jobs", JobController.create);

/**
 * @swagger
 * /jobs/{id}:
 *   put:
 *     summary: Update a job by ID
 *     tags: [Jobs]
 *     operationId: updateJob
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       200:
 *         description: Job updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       404:
 *         description: Job not found
 *       500:
 *         description: Server error
 */

jobRouter.put("/jobs/:id", JobController.edit);
jobRouter.patch("/jobs/:id", JobController.edit);

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete a job by ID
 *     tags: [Jobs]
 *     operationId: deleteJob
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     responses:
 *       204:
 *         description: No content, job deleted successfully
 *       500:
 *         description: Server error
 */

jobRouter.delete("/jobs/:id", JobController.delete);

export default jobRouter;
