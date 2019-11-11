import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionContainer from "../../pages/collection/CollectionContainer";
import CollectionOverviewContainer from "../../components/collection-overview/CollectionOverviewContainer";
// import CollectionOverview from "../../components/collection-overview/CollectionOverview";

import { fetchCollectionsStartAsync } from "../../redux/actions/shopAction";

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(Collection);
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
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};
// const mapStateToProps = createStructuredSelector({
//   isloading: selectIsCollectionFetching
// });

export default connect(
  null,
  { fetchCollectionsStartAsync }
)(Shop);
