import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import AdminModel from "../models/AdminModel";
import RoleModel from "../models/RoleModel";

export class AdminSeeder {
  static removeAllAdmins = async () => {
    try {
      await AdminModel.deleteMany({});
      logger.info("All admins removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove admins: " + error.message);
    }
  };

  static insertAdmins = async (batchSize = 1) => {
    try {
      const adminRole = await RoleModel.findOne({ name: "Admin" });
      if (!adminRole) {
        logger.error(
          "Please ensure that Admin roles is populated before seeding Admin User."
        );
        return;
      }

      const admins = [];
      const password = "Admin@1234";
      const hashedPassword = await bcrypt.hash(password as string, 10);
      for (let i = 0; i < batchSize; i++) {
        admins.push(
          {
            firstName: "Shervin",
            lastName: "Sheikh",
            gender: "male",
            email: "shervin.sheikh@gmail.com",
            address: "Apt. 689",
            telephone: "221.974.4101 x383",
            mobile: "1-780-453-5196 x59913",
            profilePhoto: "https://avatars.githubusercontent.com/u/94115880",
            roleId: adminRole.id,
            password: hashedPassword,
            lastActivity: 5583722709516288,
            nationalId: "4120253265",
            permissions: [],
          },
          {
            firstName: "Zahra",
            lastName: "Yazdani",
            gender: "female",
            email: "z.yazdani623@gmail.com",
            address: "Apt. 689",
            telephone: "221.974.4101 x383",
            mobile: "1-780-453-5196 x59913",
            profilePhoto: "https://avatars.githubusercontent.com/u/94115881",
            roleId: adminRole.id,
            password: hashedPassword,
            lastActivity: 5583722709516288,
            nationalId: "4120253267",
            permissions: [],
          },
          {
            firstName: "Carlos",
            lastName: "Conde",
            gender: "male",
            email: "cconde@condeinduservices.com",
            address: "Apt. 689",
            telephone: "221.974.4101 x383",
            mobile: "1-780-453-5196 x59913",
            profilePhoto: "https://avatars.githubusercontent.com/u/94115881",
            roleId: adminRole.id,
            password: hashedPassword,
            lastActivity: 5583722709516288,
            nationalId: "4120253267",
            permissions: [],
          }
        );
      }

      await AdminModel.insertMany(admins);
      logger.info(admins.length + " admins seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed admins: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllAdmins();
    await this.insertAdmins();
  };
}
