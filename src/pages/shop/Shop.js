import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/selectors/shop.selectors";

import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";
import WithSpinner from "../../components/withSpinner/withSpinner";

import { fetchCollectionsStartAsync } from "../../redux/actions/shopAction";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);
const Shop = ({ match, fetchCollectionsStartAsync, isloading }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
    // Google firebase Observable pattern
    // let unsub = collectionRef.onSnapshot(async snapshot => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollectionsData(collectionMap);
    //   setState({ loading: false });
    // });
    // return function cleanUp() {
    //   unsub();
    // };
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner
            isLoading={isloading}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner
            isLoading={isloading}
            {...props}
          />
        )}
      />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  isloading: selectIsCollectionFetching
});

export default connect(
  mapStateToProps,
  { fetchCollectionsStartAsync }
)(Shop);
