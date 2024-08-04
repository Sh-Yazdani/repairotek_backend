import { IndexOptions, Schema, model } from "mongoose";
import { TimeCardEmployeeDoc } from "../docs/TimeCardEmployee";

/**
 * @swagger
 * components:
 *   schemas:
 *     TimeCardEmployee:
 *       type: object
 *       required:
 *         - employeeId
 *         - timeCardDate
 *         - scheduledStartTime
 *         - scheduledEndTime
 *         - actualStartTime
 *         - actualEndTime
 *         - scheduledOverTime
 *         - actualOverTime
 *         - scheduledRestTime
 *         - actualRestTime
 *         - wageRate
 *         - overTimePayRate
 *         - createdBy
 *         - updatedBy
 *       properties:
 *         employeeId:
 *           type: string
 *           description: ID of the employee
 *           example: 60d0fe4f5311236168a109ca
 *         timeCardDate:
 *           type: string
 *           format: date
 *           description: Date of the time card
 *           example: 2024-07-13
 *         scheduledStartTime:
 *           type: string
 *           description: Scheduled start time
 *           example: "09:00"
 *         scheduledEndTime:
 *           type: string
 *           description: Scheduled end time
 *           example: "17:00"
 *         actualStartTime:
 *           type: string
 *           description: Actual start time
 *           example: "08:50"
 *         actualEndTime:
 *           type: string
 *           description: Actual end time
 *           example: "17:10"
 *         scheduledOverTime:
 *           type: number
 *           description: Scheduled overtime in minutes
 *           example: 30
 *         actualOverTime:
 *           type: number
 *           description: Actual overtime in minutes
 *           example: 20
 *         scheduledRestTime:
 *           type: number
 *           description: Scheduled rest time in minutes
 *           example: 60
 *         actualRestTime:
 *           type: number
 *           description: Actual rest time in minutes
 *           example: 50
 *         wageRate:
 *           type: number
 *           description: Hourly wage rate
 *           example: 15.5
 *         overTimePayRate:
 *           type: number
 *           description: Overtime pay rate
 *           example: 20.75
 *         taskId:
 *           type: string
 *           description: ID of the related task
 *           example: 60d0fe4f5311236168a109cb
 *         createdBy:
 *           type: string
 *           description: ID of the user who created the record
 *           example: 60d0fe4f5311236168a109cc
 *         updatedBy:
 *           type: string
 *           description: ID of the user who last updated the record
 *           example: 60d0fe4f5311236168a109cd
 *       timestamps:
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the record was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the record was last updated
 */

/**
 * TimeCardEmployee schema definition
 */

const TimeCardEmployeeSchema = new Schema<TimeCardEmployeeDoc>(
  {
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    timeCardDate: { type: Date, required: true },
    scheduledStartTime: { type: String, required: true },
    scheduledEndTime: { type: String, required: true },
    actualStartTime: { type: String, required: true },
    actualEndTime: { type: String, required: true },
    scheduledOverTime: { type: Number, required: true, default: 0 },
    actualOverTime: { type: Number, required: true, default: 0 },
    scheduledRestTime: { type: Number, required: true, default: 0 },
    actualRestTime: { type: Number, required: true, default: 0 },
    wageRate: { type: Number, required: true },
    overTimePayRate: { type: Number, required: true },
    taskId: {
      type: Schema.Types.ObjectId,
      ref: "Task",
      required: false,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  },
);

/**
 * Virtual function to calculate total scheduled work time
 * @name totalScheduledWorkTime
 * @function
 * @memberof TimeCardEmployeeSchema
 * @instance
 */
TimeCardEmployeeSchema.virtual("totalScheduledWorkTime").get(function (
  this: TimeCardEmployeeDoc,
) {
  const start = new Date(this.scheduledStartTime).getTime();
  const end = new Date(this.scheduledEndTime).getTime();
  const workDuration = (end - start) / (1000 * 60); // work duration in minutes
  return workDuration - this.scheduledRestTime; // actual work time
});

/**
 * Virtual function to calculate total actual work time
 * @name totalActualWorkTime
 * @function
 * @memberof TimeCardEmployeeSchema
 * @instance
 */
TimeCardEmployeeSchema.virtual("totalActualWorkTime").get(function (
  this: TimeCardEmployeeDoc,
) {
  const start = new Date(this.actualStartTime).getTime();
  const end = new Date(this.actualEndTime).getTime();
  const workDuration = (end - start) / (1000 * 60); // work duration in minutes
  return workDuration - this.actualRestTime; // actual work time
});

/**
 * Pre-save validation to ensure valid start and end times
 * @name pre-save
 * @function
 * @memberof TimeCardEmployeeSchema
 * @instance
 */
TimeCardEmployeeSchema.pre<TimeCardEmployeeDoc>("save", function (next) {
  const scheduledStart = new Date(this.scheduledStartTime);
  const scheduledEnd = new Date(this.scheduledEndTime);
  const actualStart = new Date(this.actualStartTime);
  const actualEnd = new Date(this.actualEndTime);

  if (scheduledStart >= scheduledEnd || actualStart >= actualEnd) {
    return next(new Error("Start time cannot be after end time"));
  }
  next();
});

/**
 * Adding index to improve query performance
 * @name index
 * @function
 * @memberof TimeCardEmployeeSchema
 * @instance
 */
TimeCardEmployeeSchema.index({ employeeId: 1, timeCardDate: 1 }, {
  unique: true,
} as IndexOptions);

/**
 * TimeCardEmployee model
 * @typedef {object} TimeCardEmployeeModel
 */
const TimeCardEmployeeModel = model<TimeCardEmployeeDoc>(
  "TimeCardEmployee",
  TimeCardEmployeeSchema,
);

export default TimeCardEmployeeModel;
