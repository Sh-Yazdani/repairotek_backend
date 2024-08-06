import { CountryDoc } from "../docs/Country";
import { generateModel } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     Country:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the admin
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the admin was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the admin was last updated
 *         geonameId:
 *           type: number
 *           description: Unique Geoname ID of the country
 *         code:
 *           type: string
 *           description: Unique code of the country
 *         name:
 *           type: string
 *           description: Name of the country
 *         capital:
 *           type: string
 *           description: Capital city of the country
 *         population:
 *           type: number
 *           description: Population of the country
 *         area:
 *           type: number
 *           description: Total area of the country
 *         languages:
 *           type: array
 *           items:
 *             type: string
 *           description: Languages spoken in the country
 *         currency:
 *           type: string
 *           description: Currency used in the country
 *         flagUrl:
 *           type: string
 *           description: URL of the country's flag
 *       required:
 *         - geonameId
 *         - code
 *         - name
 *         - capital
 *         - population
 *         - area
 *         - languages
 *         - currency
 *         - flagUrl
 */

const CountryModel = generateModel<CountryDoc>("Country", {
  geonameId: { type: Number, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  capital: { type: String, required: true },
  population: { type: Number, required: true },
  area: { type: Number, required: true },
  languages: { type: [String], required: true },
  currency: { type: String, required: true },
  // timezone: { type: String, required: true },
  flagUrl: { type: String, required: true },
});

export default CountryModel;
