import { ImageDoc } from "../../domain/docs/Image";
import BaseController from "./BaseController";
import { Multer } from "multer";
import { setupFileUpload } from "../../config/multer";
import ImageService from "../../domain/services/ImageService";
import { Request, Response, NextFunction } from "express";
import ImageModel from "../../domain/models/ImageModel";
import { unlink } from "fs";
import { join } from "path";

class ImageController extends BaseController<ImageDoc> {
  private imageService = this.service as typeof ImageService;
  public uploader: Multer;
  constructor() {
    super(ImageService);
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

      let imageData: Partial<ImageDoc>;
      try {
        imageData = JSON.parse(req.body.data);
      } catch (error) {
        return res.status(400).json({ error: "Invalid JSON data" });
      }

      if (!imageData.title || !imageData.location) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const newImage: ImageDoc = new ImageModel({
        title: imageData.title,
        description: imageData.description || "",
        location: imageData.location,
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

export default new ImageController();
