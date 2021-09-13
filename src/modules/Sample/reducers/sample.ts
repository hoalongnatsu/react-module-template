import { Action } from "redux";

interface SampleState {
}

const initialState: SampleState = {};

export default function chat(state: SampleState = initialState, action: Action<string>) {
  switch (action.type) {
    default:
      return state;
  }
}
