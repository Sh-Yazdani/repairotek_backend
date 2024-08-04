import express from "express";
import ProjectController from "../controllers/ProjectController";
import AuthMiddleware from "../middlewares/authMiddleware";

const projectRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Endpoint for managing Projects
 */

/**
 * @swagger
 * /projects:
 *   get:
 *     tags: [Projects]
 *     summary: Get all projects
 *     description: Retrieve a list of all projects
 *     operationId: getAllProjects
 *     responses:
 *       200:
 *         description: A list of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */

projectRouter.get(
  "/projects",
  AuthMiddleware.isLogged,
  ProjectController.getAll
);

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     tags: [Projects]
 *     summary: Get project by ID
 *     description: Retrieve a project by its ID
 *     operationId: getProjectById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Project not found
 */

projectRouter.get(
  "/projects/:id",
  AuthMiddleware.isLogged,
  ProjectController.getById
);

/**
 * @swagger
 * /projects:
 *   post:
 *     tags: [Projects]
 *     summary: Create a new project
 *     description: Create a new project with the provided data
 *     operationId: createProject
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       201:
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       401:
 *         description: Unauthorized, token is missing or invalid
 *       403:
 *         description: Forbidden, user is not authorized to perform this action
 */

projectRouter.post(
  "/projects",
  AuthMiddleware.isAdmin,
  ProjectController.create
);

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     tags: [Projects]
 *     summary: Update a project
 *     description: Update a project by its ID
 *     operationId: updateProject
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
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       200:
 *         description: Project updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Project not found
 */

projectRouter.put(
  "/projects/:id",
  AuthMiddleware.isAdmin,
  ProjectController.edit
);

projectRouter.patch(
  "/projects/:id",
  AuthMiddleware.isAdmin,
  ProjectController.edit
);
/**
 * @swagger
 * /projects/{id}:
 *   patch:
 *     tags: [Projects]
 *     summary: Partially update a project
 *     description: Partially update a project by its ID. Only the fields provided in the request body will be updated.
 *     operationId: patchProject
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
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               zoneId:
 *                 type: string
 *               areaLength:
 *                 type: number
 *               areaWidth:
 *                 type: number
 *               areaHeight:
 *                 type: number
 *               measureUnit:
 *                 type: string
 *               description:
 *                 type: string
 *               longitude:
 *                 type: number
 *               latitude:
 *                 type: number
 *               materials:
 *                 type: array
 *                 items:
 *                   type: string
 *               equipment:
 *                 type: array
 *                 items:
 *                   type: string
 *               employees:
 *                 type: array
 *                 items:
 *                   type: string
 *             example:
 *               title: "Updated Project Title"
 *               description: "Updated description"
 *     responses:
 *       200:
 *         description: Project updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Project not found
 */

projectRouter.patch(
  "/projects/:id",
  AuthMiddleware.isAdmin,
  ProjectController.update
);


/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     tags: [Projects]
 *     summary: Delete a project
 *     description: Delete a project by its ID
 *     operationId: deleteProject
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
 *         description: Project not found
 */

projectRouter.delete(
  "/projects/:id",
  AuthMiddleware.isAdmin,
  ProjectController.delete
);

/**
 * @swagger
 * /projects/{id}/gallery:
 *   get:
 *     tags: [Projects]
 *     summary: Get project gallery by ID
 *     description: Retrieve the gallery of a project by its ID
 *     operationId: getProjectGallery
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project gallery data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Gallery'
 *       404:
 *         description: Project not found
 */

projectRouter.get(
  "/projects/:id/gallery",
  AuthMiddleware.isLogged,
  ProjectController.getProjectGallery
);

/**
 * @swagger
 * /project-statuses:
 *   get:
 *     tags: [Projects]
 *     summary: Get all project statuses
 *     description: Retrieve a list of all project statuses
 *     operationId: getAllProjectStatuses
 *     responses:
 *       200:
 *         description: A list of project statuses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */

projectRouter.get(
  "/project-statuses",
  AuthMiddleware.isLogged,
  ProjectController.getProjectStatuses
);

export default projectRouter;
