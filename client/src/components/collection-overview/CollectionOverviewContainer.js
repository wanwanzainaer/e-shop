import { connect } from "react-redux";
import { compose } from "redux";

import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/selectors/shop.selectors";
import WithSpinner from "../withSpinner/withSpinner";
import CollectionOverview from "../collection-overview/CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
