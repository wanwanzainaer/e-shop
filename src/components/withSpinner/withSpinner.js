import React from "react";

import {
  SpinnerContainer,
  SpinnerOverlay
} from "./withSpinner.style";

const WithSpinner = WrapedComponent => ({
  isLoading,
  ...otherProps
}) => {
  console.log(isLoading);
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrapedComponent {...otherProps} />
  );
};

export default WithSpinner;
