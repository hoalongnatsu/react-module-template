import { Action } from "redux";
import { Object } from "@core/interfaces";

export default function error(state: Object<boolean> = {}, action: Action<string>) {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]: requestState === "FAILURE",
  };
}
