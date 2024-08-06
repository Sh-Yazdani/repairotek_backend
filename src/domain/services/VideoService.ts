import { VideoDoc } from "../docs/Video";
import BaseService from "./BaseService";
import VideoRepository from "../repositories/VideoRepository";
import {
  VideoValidationSchema,
  VideoPatchValidationSchema,
} from "../validations/VideoValidation";

class VideoService extends BaseService<VideoDoc> {
  private videoRepository = this.repository as typeof VideoRepository;
  constructor() {
    super(VideoRepository, VideoValidationSchema, VideoPatchValidationSchema);
  }
}
export default new VideoService();
