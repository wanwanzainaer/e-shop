import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./CartDropdown.scss";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => {
          console.log(item);
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <CustomButton>GO To CHECK OUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: selectCartItems(state) };
};

export default connect(mapStateToProps)(Cart);
