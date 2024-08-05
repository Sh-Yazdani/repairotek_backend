import { VideoDoc } from "../docs/Video";
import VideoModel from "../models/VideoModel";
import BaseRepository from "./BaseRepository";

class VideoRepository extends BaseRepository<VideoDoc> {
  constructor() {
    super(VideoModel);
  }
}
