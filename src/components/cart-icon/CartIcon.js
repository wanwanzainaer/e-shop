import React from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/actions/cartAction";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import CartItem from "../cart-item/CartItem";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  console.log(itemCount);
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state)
  };
};

export default connect(
  mapStateToProps,
  { toggleCartHidden }
)(CartIcon);
