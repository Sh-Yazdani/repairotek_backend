import express from "express";
// //todo: remove
// const { index, route404 } = require("../controllers/indexController");
//

import authRouter from "./authRouter";
import countryRouter from "./countryRouter";
import assetRouter from "./assetRouter";
import dailyReportRouter from "./dailyReportRouter";
import damageEquipmentReportRouter from "./damageEquipmentReportRouter";
import projectCostRouter from "./projectCostRouter";
import projectAssignmentRouter from "./projectAssignmentRouter";
import timeCardEmployeeRouter from "./timeCardEmployeeRouter";
import taskRouter from "./taskRouter";
import TokenBlacklistRouter from "./tokenBlacklistRouter";

import userRouter from "./userRouter";
import projectRouter from "./projectRouter";
import employeeRouter from "./employeeRouter";
import equipmentRouter from "./equipmentRouter";
import roleRouter from "./roleRouter";
import provinceRouter from "./provinceRouter";
import injuryEmployeeReportRouter from "./injuryEmployeeReportRouter";
import zoneRouter from "./zoneRouter";
// import userZoneRouter from "./userZoneRouter";
import permissionRouter from "./permissionRouter";
import galleryRouter from "./galleryRouter";
import adminRouter from "./adminRouter";
import projectGallerySubjectRouter from "./projectGallerySubjectRouter";
import resourceRouter from "./resourceRouter";
import IndexController from "../controllers/IndexController";
import materialRouter from "./materialRouter";
import jobRouter from "./jobRouter";
import roadRouter from "./roadRouter";
import operatorRouter from "./operatorRouter";
const indexRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Index
 *   description: Main router including all sub-routers
 */

indexRouter.use(authRouter);
indexRouter.use(adminRouter);
indexRouter.use(injuryEmployeeReportRouter);
indexRouter.use(materialRouter);
indexRouter.use(userRouter);
indexRouter.use(projectRouter);
indexRouter.use(countryRouter);
indexRouter.use(assetRouter);
indexRouter.use(dailyReportRouter);
indexRouter.use(damageEquipmentReportRouter);
indexRouter.use(projectCostRouter);
indexRouter.use(projectAssignmentRouter);
indexRouter.use(timeCardEmployeeRouter);
indexRouter.use(taskRouter);
indexRouter.use(employeeRouter);
indexRouter.use(operatorRouter);
indexRouter.use(equipmentRouter);
indexRouter.use(provinceRouter);
indexRouter.use(roleRouter);
indexRouter.use(roadRouter);
indexRouter.use(jobRouter);
indexRouter.use(zoneRouter);
indexRouter.use(galleryRouter);
indexRouter.use(projectGallerySubjectRouter);
// indexRouter.use(userZoneRouter); // Uncomment and provide relevant details if needed
indexRouter.use(resourceRouter);
indexRouter.use(permissionRouter);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Home page
 *     tags: [Index]
 *     operationId: getHomePage
 *     responses:
 *       200:
 *         description: Welcome message or application landing page
 *       500:
 *         description: Server error
 */
indexRouter.get("/", IndexController.index);

/**
 * @swagger
 * /*:
 *   all:
 *     summary: Route not found
 *     tags: [Index]
 *     operationId: route404
 *     responses:
 *       404:
 *         description: Route not found
 *       500:
 *         description: Server error
 */
indexRouter.use("*", IndexController.route404);

export default indexRouter;

// const verifyToken =require('../middlewares/jwt')
// const upload = require("../middlewares/multer")
// const multer = require("multer");
// const path = require("path");
// router.post("projects/uploadImage", uploadImageProduct);
