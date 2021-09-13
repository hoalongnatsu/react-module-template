import { ModuleConfig } from "@core/interfaces";
import { sample } from "@modules/Sample/config/constants";

const config: ModuleConfig = {
  name: "Sample",
  baseUrl: "/sample",
  routes: [
    {
      path: "/sample-page",
      page: "SamplePage",
      title: "Sample Page",
      exact: true,
      reducer: {
        name: sample,
        resource: "sample"
      }
    }
  ],
  requireAuthenticated: false
}

export default config;
