import BaseService from "@core/class/BaseService";
import { Object } from "@core/interfaces";

class SampleService extends BaseService {

  list = (body: Object<string>) => {
    return this.get("/sample", body);
  }

}

export default new SampleService("/api", false);
