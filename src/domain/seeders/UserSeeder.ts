import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import UserModel from "../models/UserModel";
import RoleModel from "../models/RoleModel";

export class UserSeeder {
  static removeAllUsers = async () => {
    try {
      await UserModel.deleteMany({});
      logger.info("All users removed successfully.");
    } catch (error: any) {
      logger.error(`Failed to remove users: ${error.message}`);
    }
  };

  static insertUsers = async (batchSize = 20) => {
    try {
      const roles = await RoleModel.find({});
      if (roles.length === 0)
        throw new Error("No roles found in the database.");

      const users = Array.from({ length: batchSize }, () => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        gender: faker.person.sex(),
        email: faker.internet.email(),
        address: faker.location.secondaryAddress(),
        telephone: faker.phone.number(),
        mobile: faker.phone.number(),
        profilePhoto: faker.image.avatar(),
        roleId: faker.helpers.arrayElement(roles).id,
        password: faker.internet.password(),
        lastActivity: faker.number.int(),
        nationalId: faker.number.int({ min: 1000000000, max: 9999999999 }),
        permissions: [], 
      }));
      
 

      await UserModel.insertMany(users);
      logger.info(`${batchSize} users seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed users: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllUsers();
    // await this.insertUsers();
  };
}
