import BaseService from "@core/class/BaseService";
import { Object } from "@core/interfaces";

class AuthService extends BaseService {

  login = (body: Object<string>) => {
    return this.post("/admin/login", body);
  }

}

export default new AuthService("/api/auth", false);
