import SHOP_DATA from "../../pages/shop/shop_data";
import Types from "../actions/types";
const INITIAL_STATE = {
  collections: SHOP_DATA
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_COLLECTIONS_DATA:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};
