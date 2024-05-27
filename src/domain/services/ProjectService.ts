import { ProjectDoc } from "../docs/Project";
import BaseService from "./BaseService";
import ProjectRepository from "../repositories/ProjectRepository";
import ProjectValidationSchema from "../validations/ProjectValidation";
import logger from "../../utils/helpers/logger";
import { ProjectGalleryDoc } from "../docs/ProjectGallery";

class ProjectService extends BaseService<ProjectDoc> {
  private projectRepository = this.repository as typeof ProjectRepository;
  constructor() {
    super(ProjectRepository, ProjectValidationSchema);
    this.projectRepository = this.repository as typeof ProjectRepository;
  }
  async getProjectGallery(
    projectId: string
  ): Promise<ProjectGalleryDoc[] | null> {
    const gallery = await this.projectRepository.getGallery(projectId);
    logger.info(gallery);
    return gallery;
  }
}
export default new ProjectService();
