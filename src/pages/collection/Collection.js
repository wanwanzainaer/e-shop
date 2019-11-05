import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/selectors/shop.selectors";
import CollectionItem from "../../components/collection-item/CollectionItem";

import "./Collection.scss";

const Collection = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>Collection page</h2>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(
      state
    )
  };
};
export default connect(mapStateToProps)(Collection);
