import { Object } from "./Object";

export interface RootState {
  error: Object<boolean>;
  loading: Object<boolean>;
  [key: string]: any
};
