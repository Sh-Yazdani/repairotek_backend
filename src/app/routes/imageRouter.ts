import { Router } from "express";
import ImageController from "../controllers/ImageController";
const imageRouter = Router();

/**
 * @swagger
 * /images:
 *   get:
 *     summary: Retrieve all images
 *     tags: [images]
 *     responses:
 *       200:
 *         description: A list of images
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Image'
 *       500:
 *         description: Server error
 */
imageRouter.get("/images", ImageController.getAll);

/**
 * @swagger
 * /images/{id}:
 *   get:
 *     summary: Get a image by id
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: image id
 *     responses:
 *       200:
 *         description: The image data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       404:
 *         description: Image not found
 *       500:
 *         description: Server error
 */

imageRouter.get("/images/:id", ImageController.getById);
/**
 * @swagger
 * /images:
 *   post:
 *     summary: Create a new Image
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               title:
 *                  type: string
 *                  required: true
 *               location:
 *                 type: string
 *                 required: true
 *               time:
 *                 type: string
 *                 format: date-time
 *                 required: true
 *               description:
 *                 type: string
 *                 required: false
 *                 default: "image description"
 *               # Include other properties from your Image schema here if any
 *     responses:
 *       201:
 *         description: The created Image
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

imageRouter.post(
  "/images",
  ImageController.uploader.single("image"),
  ImageController.create,
);

/**
 * @swagger
 * /images/{id}:
 *   put:
 *     summary: Update a image
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Image'
 *     responses:
 *       200:
 *         description: The updated video
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Image not found
 *       500:
 *         description: Server error
 */

imageRouter.put("/images/:id", ImageController.update);

/**
 * @swagger
 * /images/{id}:
 *   patch:
 *     summary: Partially update a image
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Image'
 *     responses:
 *       200:
 *         description: The updated Image
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Video not found
 *       500:
 *         description: Server error
 */
imageRouter.patch("/images/:id", ImageController.edit);

// /**
//  * @swagger
//  * /images/{id}
//  *   delete:
//  *     summary: Delete an image
//  *     tags: [Images]
//  *     parameters:
//  *       - in: query
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: Image id
//  *     responses:
//  *       200:
//  *         description: Image successfully deleted
//  *       404:
//  *         description: Image not found
//  *       500:
//  *         description: Server error
//  *
//  **/

imageRouter.delete("/images", ImageController.delete);

export default imageRouter;
