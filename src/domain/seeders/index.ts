import mongoose from "mongoose";
import { UserSeeder } from "./UserSeeder";
import { ProjectSeeder } from "./ProjectSeeder";
import { RoleSeeder } from "./RoleSeeder";
import connectDB from "../../config/db";
import logger from "../../utils/helpers/logger";
import { ResourceSeeder } from "./ResourceSeeder";
import { PermissionSeeder } from "./PermissionSeeder";
import { EquipmentSeeder } from "./EquipmentSeeder";
import { MaterialSeeder } from "./MaterialSeeder";
import { EmployeeSeeder } from "./EmployeeSeeder";
import { AdminSeeder } from "./AdminSeeder";
import { JobSeeder } from "./JobSeeder";
import { ZoneSeeder } from "./ZoneSeeder";
import { AssetSeeder } from "./AssetSeeder";
import { ReportSubjectSeeder } from "./ReportSubjectSeeder";
import { ProjectGallerySubjectSeeder } from "./ProjectGallerySubjectSeeder";
import { ProjectGallerySeeder } from "./ProjectGallerySeeder";
import { DailyReportSeeder } from "./DailyReportSeeder";
import { DamageEquipmentReportSeeder } from "./DamageEquipmentReportModelSeeder";
import { InjuryEmployeeReportSeeder } from "./InjuryEmployeeReportSeeder";
import { TaskSeeder } from "./TaskSeeder";
import { TimeCardEmployeeSeeder } from "./TimeCardEmployeeSeeder";
import { OperatorSeeder } from "./OperatorSeeder";


const seedDatabase = async () => {
  try {
    await connectDB(true);

    // await RoleSeeder.seed();
    // await ResourceSeeder.seed();
    // await JobSeeder.seed();

    // await UserSeeder.seed();
    // await AdminSeeder.seed();
    await EmployeeSeeder.seed();
    // await OperatorSeeder.seed();
    // await PermissionSeeder.seed();

    // await MaterialSeeder.seed();
    // await EquipmentSeeder.seed();

    // await ProjectSeeder.seed();
    // await AssetSeeder.seed();

    // await ReportSubjectSeeder.seed();
    // await ProjectGallerySubjectSeeder.seed();
    // await ProjectGallerySeeder.seed();

    // await DailyReportSeeder.seed();
    // await DamageEquipmentReportSeeder.seed();
    // await InjuryEmployeeReportSeeder.seed();

    // await TaskSeeder.seed();
    // await TimeCardEmployeeSeeder.seed();

    logger.info("Database seeding completed successfully");
  } catch (error) {
    logger.error(`Error seeding database: ${error}`);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
