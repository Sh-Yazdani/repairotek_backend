import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ImageModel from "../models/ImageModel";

export class ImageSeeder {
  
  static removeAllImages = async () => {
    try {
      await ImageModel.deleteMany({});
      logger.info("All images removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove images: " + error.message);
    }
  };

  static insertImages = async (batchSize = 10) => {
    try {
      const images = [];

      for (let i = 0; i < batchSize; i++) {
        images.push({

        });
      }

      await ImageModel.insertMany(images);
      logger.info(batchSize + " images seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed images: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllImages();
    await this.insertImages();
  };
}
