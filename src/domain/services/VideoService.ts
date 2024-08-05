import { VideoDoc } from "../docs/Video";
import VideoRepository from "../repositories/VideoRepository";
import {
  VideoCreationValidationSchema,
  VideoPatchValidationSchema,
} from "../validations/VideoValidation";
import BaseService from "./BaseService";
class VideoService extends BaseService<VideoDoc> {
  constructor() {
    super(
      VideoRepository,
      VideoCreationValidationSchema,
      VideoPatchValidationSchema,
    );
  }
}
export default new VideoService();
