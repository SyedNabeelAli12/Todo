import { CHANGE_THEME } from "./action";

const initialState = {
  theme: "light",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
