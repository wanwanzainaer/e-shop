import Types from "./types";

export const toggleCartHidden = () => {
  return { type: Types.TOGGLE_CART_HIDDEN };
};

export const addItem = item => {
  return {
    type: Types.ADD_ITEM,
    payload: item
  };
};

export const clearItemFromCart = item => {
  return { type: Types.CLEAR_ITEM_FROM_CART, payload: item };
};

export const removeItem = item => {
  return {
    type: Types.REMOVE_ITEM,
    payload: item
  };
};

export const clearCart = () => {
  return { type: Types.CLEAR_CART };
};
