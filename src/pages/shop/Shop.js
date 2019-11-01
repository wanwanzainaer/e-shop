import React, { useState } from "react";
import SHOP_DATA from "./shop_data";
import CollectionPreview from "../../components/preview-collection/CollectionPreview";
const Shop = props => {
  const [state] = useState({
    collections: SHOP_DATA
  });
  return (
    <div className="shop-page">
      {state.collections.map(({ id, ...otherCollectionProps }) => {
        return (
          <CollectionPreview key={id} {...otherCollectionProps} />
        );
      })}
    </div>
  );
};

export default Shop;
