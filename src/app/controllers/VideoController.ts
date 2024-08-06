import { Request, Response, NextFunction } from "express";
import { VideoDoc } from "../../domain/docs/Video";
import VideoService from "../../domain/services/VideoService";
import BaseController from "./BaseController";
import { uploadToGCS } from "../middlewares/uploadToGCSMiddleware";


class VideoController extends BaseController<VideoDoc> {
  private videoService = this.service as typeof VideoService;

  constructor() {
    super(VideoService);
  }

  // متدی برای آپلود ویدئو
  public async uploadVideo(req: Request, res: Response, next: NextFunction) {
    try {
      // آپلود به Google Cloud Storage
      await uploadToGCS(req, res, next);

      const file = req.file as Express.MulterFile; // استفاده از as برای تعیین نوع

      // ذخیره اطلاعات ویدئو در پایگاه داده
      const videoData = {
        title: req.body.title,
        url: file.cloudStorageUrl, // حالا TypeScript باید این ویژگی را تشخیص دهد
        location: req.body.location,
        time: new Date(),
        duration: req.body.duration,
        description: req.body.description,
      };

      const video = await this.videoService.create(videoData as VideoDoc);
      res.status(201).json(video);
    } catch (error) {
      next(error);
    }
  }
}

export default new VideoController();
