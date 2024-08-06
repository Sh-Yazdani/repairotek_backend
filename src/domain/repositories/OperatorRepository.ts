
import { OperatorDoc } from "../docs/Operator";
import OperatorModel from "../models/OperatorModel";
import BaseRepository from "./BaseRepository";

class OperatorRepository extends BaseRepository<OperatorDoc> {
  constructor(){
    super(OperatorModel)
  }
}

export default new OperatorRepository();
