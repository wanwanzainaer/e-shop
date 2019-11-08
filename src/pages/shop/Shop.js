import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";
import WithSpinner from "../../components/withSpinner/withSpinner";

import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollectionsData } from "../../redux/actions/shopAction";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);
const Shop = ({ match, updateCollectionsData }) => {
  const [state, setState] = useState({ loading: true });
  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollectionsData(collectionMap);
      setState({ loading: false });
    });

    // Google firebase Observable pattern
    // let unsub = collectionRef.onSnapshot(async snapshot => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollectionsData(collectionMap);
    //   setState({ loading: false });
    // });
    // return function cleanUp() {
    //   unsub();
    // };
  }, [updateCollectionsData]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner
            isLoading={state.loading}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner
            isLoading={state.loading}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default connect(
  null,
  { updateCollectionsData }
)(Shop);
