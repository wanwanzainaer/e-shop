import Types from "./types";

export const updateCollectionsData = data => {
  return {
    type: Types.FETCH_COLLECTIONS_DATA,
    payload: data
  };
};
