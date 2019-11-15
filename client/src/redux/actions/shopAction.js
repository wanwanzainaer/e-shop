import Types from "./types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = data => {
  return {
    type: Types.FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collectionsMap => ({
  type: Types.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = () => ({
  type: Types.FETCH_COLLECTIONS_FAILURE,
  payload: "Server has some problem"
});
export const fetchCollectionsStartAsync = () => async dispatch => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());
  try {
    const snapshotResponse = await collectionRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(
      snapshotResponse
    );
    console.log(collectionsMap);
    return dispatch(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    return dispatch(fetchCollectionsFailure());
  }
};
