import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/selectors/shop.selectors";
import WithSpinner from "../../components/withSpinner/withSpinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);
export default CollectionContainer;
