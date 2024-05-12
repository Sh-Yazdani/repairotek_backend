import UserService from "../../domain/services/UserService";
import crudControllerGenerator from "../../utils/generators/crudControllerGenerator";

const UserController = crudControllerGenerator("User", UserService);
export default UserController;

// class UserService extends BaseService<UserDoc> {
//   constructor() {
//     super(UserRepository, UserValidationSchema);
//   }
// }