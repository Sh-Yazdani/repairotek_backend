import express from "express";
import ReportSubjectController from "../controllers/ReportSubjectController";

const reportSubjectRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: ReportSubjects
 *   description: Endpoint for managing ReportSubjects
 */

/**
 * @swagger
 * /reportSubjects/{id}:
 *   get:
 *     tags: [ReportSubjects]
 *     summary: Get report subject by ID
 *     description: Retrieve a report subject by its ID
 *     operationId: getReportSubjectById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Report subject data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportSubject'
 *       404:
 *         description: Report subject not found
 */

reportSubjectRouter.get("/reportSubjects/:id", ReportSubjectController.getById);

/**
 * @swagger
 * /reportSubjects:
 *   get:
 *     tags: [ReportSubjects]
 *     summary: Get all report subjects
 *     description: Retrieve a list of all report subjects
 *     operationId: getAllReportSubjects
 *     responses:
 *       200:
 *         description: A list of report subjects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ReportSubject'
 */

reportSubjectRouter.get("/reportSubjects", ReportSubjectController.getAll);

/**
 * @swagger
 * /reportSubjects:
 *   post:
 *     tags: [ReportSubjects]
 *     summary: Create a new report subject
 *     description: Create a new report subject with the provided data
 *     operationId: createReportSubject
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReportSubject'
 *     responses:
 *       201:
 *         description: Report subject created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportSubject'
 */

reportSubjectRouter.post("/reportSubjects", ReportSubjectController.create);

/**
 * @swagger
 * /reportSubjects/{id}:
 *   put:
 *     tags: [ReportSubjects]
 *     summary: Update a report subject
 *     description: Update a report subject by its ID
 *     operationId: updateReportSubject
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
 *             $ref: '#/components/schemas/ReportSubject'
 *     responses:
 *       200:
 *         description: Report subject updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ReportSubject'
 *       404:
 *         description: Report subject not found
 */

reportSubjectRouter.put("/reportSubjects/:id", ReportSubjectController.edit);
reportSubjectRouter.patch("/reportSubjects/:id", ReportSubjectController.edit);

/**
 * @swagger
 * /reportSubjects/{id}:
 *   delete:
 *     tags: [ReportSubjects]
 *     summary: Delete a report subject
 *     description: Delete a report subject by its ID
 *     operationId: deleteReportSubject
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
 *         description: Report subject not found
 */

reportSubjectRouter.delete(
  "/reportSubjects/:id",
  ReportSubjectController.delete
);

export default reportSubjectRouter;
