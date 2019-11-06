import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";
import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollectionsData } from "../../redux/actions/shopAction";
const Shop = ({ match, updateCollectionsData }) => {
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    let unsub = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollectionsData(collectionMap);
    });
    return function cleanUp() {
      unsub();
    };
  }, [updateCollectionsData]);

  console.log(match);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverview}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={Collection}
      />
    </div>
  );
};

export default connect(
  null,
  { updateCollectionsData }
)(Shop);
