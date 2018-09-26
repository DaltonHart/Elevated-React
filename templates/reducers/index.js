module.exports = `
import { ADD_BASE } from "../constants/action-types";

const initialState = {
  bases: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASE:
      state.bases.concat(action.payload);
      return { ...state, bases: [...state.bases, action.payload] };
    default:
      return state;
  }
};
export default rootReducer; `