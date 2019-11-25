import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/actions/shopAction";
import Spinner from "../../components/spinner/Spinner";

const CollectionContainer = lazy(() =>
  import("../../pages/collection/CollectionContainer")
);
const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/CollectionOverviewContainer")
);
// import CollectionOverview from "../../components/collection-overview/CollectionOverview";

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
};
// const mapStateToProps = createStructuredSelector({
//   isloading: selectIsCollectionFetching
// });

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
export default connect(null, mapDispatchToProps)(Shop);
