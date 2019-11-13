import Types from "../actions/types";

const INITIAL_STATE = {
  currentUser: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };
    case Types.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    case Types.SIGN_OUT_FAILURE:
    case Types.SIGN_IN_FAILURE:
    case Types.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
