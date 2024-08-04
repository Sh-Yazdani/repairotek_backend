import mongoose from "mongoose";
import logger from "../utils/helpers/logger";

const connectDB = async () => {
  let dbUrl: string =
    process.env.ENV_MODE === "production"
      ? process.env.DB_URL_PRODUCTION!
      : process.env.DB_URL!;
  if (process.env.ENV_MODE) {
    dbUrl =
      process.env.ENV_MODE === "develop"
        ? process.env.DB_URL!
        : process.env.DB_URL_PRODUCTION!;
  }

  try {
    mongoose.set("strictQuery", false);
    const dbConnection = await mongoose.connect(dbUrl);
    logger.info(
      `Successfully connected to MongoDB.
       Host: ${dbConnection.connection.host}
       dbName: ${dbConnection.connection.db.databaseName}`,
    );
  } catch (error: any) {
    logger.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
