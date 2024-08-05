import { Router } from "express";
import VideoController from "../controllers/videoController";

const videoRouter = Router();

/**
 * @swagger
 * /videos:
 *   get:
 *     summary: Retrieve all videos
 *     tags: [Videos]
 *     responses:
 *       200:
 *         description: A list of videos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Video'
 *       500:
 *         description: Server error
 */

videoRouter.get("/videos", VideoController.getAll);

/**
 * @swagger
 * /videos/{id}:
 *   get:
 *     summary: Get a video by id
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Video id
 *     responses:
 *       200:
 *         description: The video data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 *       404:
 *         description: Video not found
 *       500:
 *         description: Server error
 */

videoRouter.get("/videos/:id", VideoController.getById);

/**
 * @swagger
 * /videos:
 *   post:
 *     summary: Create a new video
 *     tags: [Videos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VideoInput'
 *     responses:
 *       201:
 *         description: The created video
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

videoRouter.post("/videos", VideoController.create);

/**
 * @swagger
 * /videos:
 *   put:
 *     summary: Update a video
 *     tags: [Videos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Video'
 *     responses:
 *       200:
 *         description: The updated video
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Video not found
 *       500:
 *         description: Server error
 */
videoRouter.put("/videos", VideoController.update);

/**
 * @swagger
 * /videos:
 *   patch:
 *     summary: Partially update a video
 *     tags: [Videos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Video'
 *     responses:
 *       200:
 *         description: The updated video
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Video not found
 *       500:
 *         description: Server error
 */
videoRouter.patch("/videos", VideoController.edit);

/**
 * @swagger
 * /videos:
 *   delete:
 *     summary: Delete a video
 *     tags: [Videos]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Video id
 *     responses:
 *       200:
 *         description: Video successfully deleted
 *       404:
 *         description: Video not found
 *       500:
 *         description: Server error
 */
videoRouter.delete("/videos", VideoController.delete);

export default videoRouter;
