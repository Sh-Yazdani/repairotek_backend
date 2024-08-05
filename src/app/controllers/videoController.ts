import { VideoDoc } from "../../domain/docs/Video";
import BaseController from "./BaseController";
import VideoService from "../../domain/services/VideoService";

class VideoController extends BaseController<VideoDoc> {
  private videoService = this.service as typeof VideoService;
  constructor() {
    super(VideoService);
  }
}
