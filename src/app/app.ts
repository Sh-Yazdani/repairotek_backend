import express, { Application } from "express";
import dotenv from "dotenv";
import connentDB from "../config/db";
import cors from "cors";
import indexRouter from "./routes/indexRouter";
import session from "express-session";
import loggerMiddleware from "./middlewares/loggerMiddleware";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import "express-async-errors";
import path from "path";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../config/swagger";
import helmet from "helmet";
import updateLastActivityMiddleware from "./middlewares/updateLastActivityMiddleware";
import { log } from "console";
import { setupFileUpload } from "../config/multer";
import { Multer } from "multer";

dotenv.config();
const app: Application = express();
// const sessionMiddleware = session({
//   //To do
//   // const jwtSecret = process.env.JWT_SECRET || "your_jwt_secret";

//   secret: "mysecretkey",
//   resave: false,
//   saveUninitialized: false,
// });

connentDB();
// const upload: Multer = setupFileUpload();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerMiddleware);

app.use(helmet());
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/swagger-json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});
app.use(
  "/api-docs/swagger-ui",
  express.static(path.join(__dirname, "../../node_modules/swagger-ui-dist")),
);

// app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use(express.static(path.join(__dirname, "../../public")));

app.use("/api/v2", indexRouter);
// app.use(sessionMiddleware);
app.use(errorHandlerMiddleware);

export default app;
