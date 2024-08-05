import { StatusProject } from "../../utils/constant/StatusProject";
import logger from "../../utils/helpers/logger";
import { ProjectDoc } from "../docs/Project";
import { ProjectGalleryDoc } from "../docs/ProjectGallery";
import ProjectGalleryModel from "../models/ProjectGalleryModel";
import ProjectModel from "../models/ProjectModel";
import BaseRepository from "./BaseRepository";

class ProjectRepository extends BaseRepository<ProjectDoc> {
  constructor() {
    super(ProjectModel);
  }
  async getById(id: string): Promise<ProjectDoc | null> {
    try {
      return await this.model
        .findById(id)
        .populate("adminId")
        .populate("zoneId")
        .populate("employees")
        .populate("materials")
        .populate("equipment")
        .populate("equipment")
        .exec();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
  async getAll(): Promise<ProjectDoc[]> {
    try {
      return await this.model.find().populate("adminId").populate("zoneId");
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
  async getProjectEmployees(projectId: string): Promise<ProjectDoc | null> {
    try {
      return await this.model.findById(projectId).populate("employees");
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
  async getProjectMaterials(projectId: string): Promise<ProjectDoc | null> {
    try {
      return await this.model.findById(projectId).populate("materials");
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }
  async getProjectEquipment(projectId: string): Promise<ProjectDoc | null> {
    try {
      return await this.model.findById(projectId).populate("equipment");
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }

  async getGallery(projectId: string): Promise<ProjectGalleryDoc[] | null> {
    const gallery = await ProjectGalleryModel.find({ projectId })
      .populate("mediaSubjectId")
      .populate("projectId")
      .populate("userId");

    logger.info(gallery);
    return gallery;
  }

  // async getProjectStatuses(
  // ): Promise<String[] | null> {
  //   const statuses = await StatusProject;
  //   logger.info(statuses);
  //   return statuses;
  // }
}

export default new ProjectRepository();


