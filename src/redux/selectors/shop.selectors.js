import { createSelector } from "reselect";

const selectCollections = state => state.shop;

export const selectShopCollections = createSelector(
  [selectCollections],
  shop => shop.collections
);
