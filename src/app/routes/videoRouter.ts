import express from "express";
import VideoController from "../controllers/VideoController";
import { setupFileUpload } from "../../config/multer";

const videoRouter = express.Router();
const upload = setupFileUpload();

/**
 * @swagger
 * tags:
 *   name: Videos
 *   description: API endpoints for managing videos
 */

/**
 * @swagger
 * /videos:
 *   get:
 *     tags: [Videos]
 *     summary: Get all videos
 *     description: Retrieve a list of all videos
 *     operationId: getAllVideos
 *     responses:
 *       200:
 *         description: A list of videos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Video'
 */
videoRouter.get("/videos", VideoController.getAll);

/**
 * @swagger
 * /videos/{id}:
 *   get:
 *     tags: [Videos]
 *     summary: Get video by ID
 *     description: Retrieve a video by its ID
 *     operationId: getVideoById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Video data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 *       404:
 *         description: Video not found
 */
videoRouter.get("/videos/:id", VideoController.getById);

/**
 * @swagger
 * /videos:
 *   post:
 *     tags: [Videos]
 *     summary: Create a new video
 *     description: Create a new video with the provided data
 *     operationId: createVideo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Video'
 *     responses:
 *       201:
 *         description: Video created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 */
videoRouter.post("/videos", VideoController.create);

/**
 * @swagger
 * /videos/{id}:
 *   put:
 *     tags: [Videos]
 *     summary: Update a video
 *     description: Update a video by its ID
 *     operationId: updateVideo
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
 *             $ref: '#/components/schemas/Video'
 *     responses:
 *       200:
 *         description: Video updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 *       404:
 *         description: Video not found
 */
videoRouter.put("/videos/:id", VideoController.edit);
videoRouter.patch("/videos/:id", VideoController.edit);

/**
 * @swagger
 * /videos/{id}:
 *   delete:
 *     tags: [Videos]
 *     summary: Delete a video
 *     description: Delete a video by its ID
 *     operationId: deleteVideo
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
 *         description: Video not found
 */
videoRouter.delete("/videos/:id", VideoController.delete);

/**
 * @swagger
 * /videos/upload:
 *   post:
 *     tags: [Videos]
 *     summary: Upload a new video
 *     description: Upload a video file and save its data to the database
 *     operationId: uploadVideo
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *               location:
 *                 type: string
 *               duration:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Video uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 */
videoRouter.post(
  "/videos/upload",
  upload.single("file"),
  VideoController.uploadVideo
);

export default videoRouter;
