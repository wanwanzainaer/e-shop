import Types from "./types";

export const toggleCartHidden = () => {
  return { type: Types.TOGGLE_CART_HIDDEN };
};

export const addItem = Item => {
  return {
    type: Types.ADD_ITEM,
    payload: Item
  };
};
