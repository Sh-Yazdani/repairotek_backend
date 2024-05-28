
import { DailyReportDoc } from "../docs/DailyReport";
import BaseService from "./BaseService";
import DailyReportRepository from "../repositories/DailyReportRepository";
import DailyReportValidationSchema from "../validations/DailyReportValidation";

class DailyReportService extends BaseService<DailyReportDoc> {
  private dailyReportRepository = this.repository as typeof DailyReportRepository;
  constructor() {
    super(DailyReportRepository, DailyReportValidationSchema);
  }
}
export default new DailyReportService();
