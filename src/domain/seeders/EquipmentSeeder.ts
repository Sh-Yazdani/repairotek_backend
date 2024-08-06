import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import EquipmentModel from "../models/EquipmentModel";
import { generateCode } from "../../utils/functions/generateCode";

const roadConstructionEquipments = [
  "Bulldozer",
  "Excavator",
  "Grader",
  "Paver",
  "Roller",
  "Backhoe",
  "Dump Truck",
  "Concrete Mixer",
  "Asphalt Paver",
  "Road Roller",
];

export class EquipmentSeeder {
  static removeAllEquipments = async () => {
    try {
      await EquipmentModel.deleteMany({});
      logger.info("All equipment removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove equipment: " + error.message);
    }
  };

  static insertEquipments = async (batchSize = 10) => {
    try {
      const equipment = [];

      for (let i = 0; i < roadConstructionEquipments.length; i++) {
        // const equipment =
        //   roadConstructionEquipments[i % roadConstructionEquipments.length];
        equipment.push({
          equipmentCode: generateCode("EQP"),
          name: roadConstructionEquipments[i],
          equipmentModel: faker.vehicle.type(),
          description: `
                  VRM: ${faker.vehicle.vrm()},
                  Color: ${faker.vehicle.color()}, 
                  Fuel: ${faker.vehicle.fuel()},
                  Model: ${faker.vehicle.model()}
                  `,
          pricePerHour: parseFloat(
            faker.commerce.price({ min: 100, max: 200, dec: 2 })
          ),
          count: faker.number.int({ min: 1, max: 100 }),
          Manufacturer: faker.vehicle.manufacturer(),
          VIN: faker.vehicle.vin(),
        });
      }

      await EquipmentModel.insertMany(equipment);
      logger.info(`${batchSize} equipment seeded successfully.`);
    } catch (error: any) {
      logger.error("Failed to seed equipment: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllEquipments();
    await this.insertEquipments();
  };
}
