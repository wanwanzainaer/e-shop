import React from "react";

import CustomButton from "../custom-button/CustomButton";

import "./CartDropdown.scss";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO To CHECK OUT</CustomButton>
    </div>
  );
};

export default Cart;
