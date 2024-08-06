import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import MaterialModel from "../models/MaterialModel";
import { generateCode } from "../../utils/functions/generateCode";

export class MaterialSeeder {
  static removeAllMaterials = async () => {
    try {
      await MaterialModel.deleteMany({});
      logger.info("All materials removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove materials: " + error.message);
    }
  };

  static insertMaterials = async (batchSize = 10) => {
    try {
      const materialsList = [
        {
          name: "Asphalt",
          description: "Hot mix asphalt used for paving roads and highways.",
        },
        {
          name: "Concrete",
          description: "High-strength concrete for road construction.",
        },
        {
          name: "Gravel",
          description: "Crushed stone or gravel for road base and subbase.",
        },
        {
          name: "Sand",
          description:
            "Fine aggregate sand used in concrete and asphalt mixtures.",
        },
        {
          name: "Steel",
          description: "Reinforcing steel bars for concrete reinforcement.",
        },
        {
          name: "Bitumen",
          description: "Bitumen used for road surface sealing and binding.",
        },
        {
          name: "Aggregate",
          description: "Coarse aggregates used in asphalt and concrete.",
        },
        {
          name: "Geotextile",
          description:
            "Geotextile fabric for soil stabilization and separation.",
        },
        {
          name: "Cement",
          description: "Portland cement used in concrete production.",
        },
        {
          name: "Lime",
          description: "Lime used for soil stabilization in road construction.",
        },
      ];

      const UnitsMaterial = ["gr", "Kg", "Tone"];
      const materials = [];

      for (let i = 0; i < batchSize; i++) {
        const material = faker.helpers.arrayElement(materialsList);
        materials.push({
          materialCode: generateCode("MTR"),
          name: material.name,
          description: material.description,
          pricePerUnit: parseFloat(
            faker.commerce.price({ min: 50, max: 500, dec: 2 })
          ),
          value: faker.number.float({ min: 0, max: 1000 }),
          unit: faker.helpers.arrayElement(UnitsMaterial),
        });
      }

      await MaterialModel.insertMany(materials);
      logger.info(batchSize + " materials seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed materials: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllMaterials();
    await this.insertMaterials();
  };
}
