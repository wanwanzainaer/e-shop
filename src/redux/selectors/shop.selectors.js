import { createSelector, createStructuredSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectCollections = state => state.shop;

export const selectShopCollections = createSelector(
  [selectCollections],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections =>
      collections.find(
        collection =>
          collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  );
