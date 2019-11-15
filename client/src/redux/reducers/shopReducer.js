import Types from "../actions/types";
const INITIAL_STATE = {
  collections: {},
  isFetching: true,
  errorMessage: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case Types.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      };
    case Types.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
