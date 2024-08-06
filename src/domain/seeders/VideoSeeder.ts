import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import VideoModel from "../models/VideoModel";

export class VideoSeeder {
  
  static removeAllVideos = async () => {
    try {
      await VideoModel.deleteMany({});
      logger.info("All videos removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove videos: " + error.message);
    }
  };

  static insertVideos = async (batchSize = 10) => {
    try {
      const videos = [];

      for (let i = 0; i < batchSize; i++) {
        videos.push({

        });
      }

      await VideoModel.insertMany(videos);
      logger.info(batchSize + " videos seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed videos: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllVideos();
    await this.insertVideos();
  };
}
