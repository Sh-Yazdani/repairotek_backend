import { VideoDoc } from "../../domain/docs/Video";
import VideoService from "../../domain/services/VideoService";
import { ImageDoc } from "../../domain/docs/Image";
import BaseController from "./BaseController";
import { Multer } from "multer";
import { setupFileUpload } from "../../config/multer";
import ImageService from "../../domain/services/ImageService";
import { Request, Response, NextFunction } from "express";
import ImageModel from "../../domain/models/ImageModel";
import { unlink, existsSync, mkdirSync, renameSync } from "fs";
import { join } from "path";
import { log } from "console";
const UPLOAD_DIR = "uploads";

class VideoController extends BaseController<VideoDoc> {
  private videoService = this.service as typeof VideoService;
  public uploader: Multer;
  constructor() {
    super(VideoService);
    this.uploader = setupFileUpload();
  }

  create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const createData = req.body;
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No image file uploaded" });
      }

      if (!existsSync(UPLOAD_DIR)) {
        mkdirSync(UPLOAD_DIR, { recursive: true });
      }
      const file = req.file;
      // Generate a unique filename
      const filename = `${Date.now()}-${file.originalname}`;
      const filepath = join(UPLOAD_DIR, filename);
      renameSync(file.path, filepath);

      let imageData: Partial<ImageDoc>;
      const { title, location, description, duration } = req.body;
      const time = req.body.time ? new Date(req.body.time) : new Date();
      const newImage: ImageDoc = new ImageModel({
        title: title,
        description: description || "",
        location: location,
        url: `/uploads/images/${req.file.filename}`,
        time: new Date(),
      });

      const savedImage = await newImage.save();

      res.status(201).json(savedImage);
    } catch (error) {
      console.error("Error uploading image:", error);
      res.status(500).json({ error: "Server error during image upload" });
    }
  };
}

export default new VideoController();
