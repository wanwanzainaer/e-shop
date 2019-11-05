import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";

const Shop = ({ match }) => {
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

export default Shop;
