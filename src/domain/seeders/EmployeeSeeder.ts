import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import EmployeeModel from "../models/EmployeeModel";
import RoleModel from "../models/RoleModel";
import JobModel from "../models/JobModel";
import DepartmentModel from "../models/unUse/DepartmentModel";
import { ContractType } from "../../utils/constant/ContractType";
import { MaritalStatus } from "../../utils/constant/MaritalStatus";
import { generateCode } from "../../utils/functions/generateCode";

export class EmployeeSeeder {
  static removeAllEmployees = async () => {
    try {
      await EmployeeModel.deleteMany({});
      logger.info("All employees removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove employees: " + error.message);
    }
  };

  static insertEmployees = async (batchSize = 10) => {
    try {
      const role = await RoleModel.findOne({ name: "Employee" });
      const jobs = await JobModel.find({});

      if (!role || !jobs.length) {
        logger.error(
          "Please ensure that role and jobs are populated before seeding employees."
        );
        return;
      }

      const employees = [];

      for (let i = 0; i < batchSize; i++) {
        // const job = faker.helpers.arrayElement(jobs).id;
        const job = jobs[Math.floor(Math.random() * jobs.length)];

        employees.push({
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          gender: faker.person.sex(),
          email: faker.internet.email(),
          address: faker.location.secondaryAddress(),
          telephone: faker.phone.number(),
          mobile: faker.phone.number(),
          profilePhoto: faker.image.avatar(),
          roleId: role.id,
          password: faker.internet.password(),
          lastActivity: faker.date.recent().getTime(),
          nationalId: faker.number.int({ min: 1000000000, max: 9999999999 }), // Assuming national ID is a 10-digit number
          permissions: [],
          employeeCode: generateCode("EMP"),
          // hireDate: faker.date.past(),
          // jobId: job.id,
          // skillDescription: faker.lorem.sentence(),
          // description: faker.lorem.paragraph(),
          // dateOfBirth: faker.date.past({
          //   years: 30,
          //   refDate: "2024-01-01T00:00:00.000Z",
          // }), // Random date of birth in the past 30 years
          // maritalStatus: faker.helpers.arrayElement(MaritalStatus),
          yearsOfExperience: faker.number.int({ min: 1, max: 40 }),
          contractType: faker.helpers.arrayElement(ContractType),
          bankAccountInfo: `
            Credit Card Number:${faker.finance.creditCardNumber(
              "63[7-9]#-####-####-###L"
            )}
            Accunt Number:${faker.finance.accountNumber()}
           `,
          insuranceNumber: faker.number
            .int({ min: 1000000000, max: 9999999999 })
            .toString(), // Assuming insurance number is a 10-digit number
        });
      }

      await EmployeeModel.insertMany(employees);
      logger.info(batchSize + " employees seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed employees: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllEmployees();
    await this.insertEmployees();
  };
}
