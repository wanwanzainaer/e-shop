import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_eK7lCXNmKPryClNmKjV6nLMp00QrKmGCee";

  const onToken = async token => {
    try {
      await axios({
        url: "payment",
        method: "post",
        data: {
          amount: priceForStripe,
          token
        }
      });

      alert("Payment successful");
    } catch (err) {
      console.log("Payment error: ", JSON.parse(err));
      alert("There was an issue with your payment");
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      stripeKey={publishableKey}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
