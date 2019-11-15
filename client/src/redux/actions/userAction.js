import Types from "./types";
export const setCurrentUser = user => {
  return {
    type: Types.SET_CURRENT_USER,
    payload: user
  };
};

export const googleSignInStart = () => {
  return {
    type: Types.GOOGLE_SIGN_IN_START
  };
};

export const signInSuccess = user => {
  return {
    type: Types.SIGN_IN_SUCCESS,
    payload: user
  };
};

export const signInFailure = errorMessage => {
  return {
    type: Types.SIGN_IN_FAILURE,
    payload: errorMessage
  };
};

export const emailSignInStart = emailAndPassword => {
  return {
    type: Types.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  };
};

export const checkUserSession = () => {
  return {
    type: Types.CHECK_USER_SESSION
  };
};

export const signOutStart = () => {
  return {
    type: Types.SIGN_OUT_START
  };
};
export const signOutSuccess = () => {
  return {
    type: Types.SIGN_OUT_SUCCESS
  };
};
export const signOutFailure = err => {
  return {
    type: Types.SIGN_OUT_FAILURE,
    payload: err
  };
};

export const signUpStart = emailAndPasswordAndDisplayName => {
  return {
    type: Types.SIGN_UP_START,
    payload: emailAndPasswordAndDisplayName
  };
};
export const signUpSuccess = ({ user, additionalData }) => {
  return {
    type: Types.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
  };
};
export const signUpFailure = err => {
  return {
    type: Types.SIGN_UP_FAILURE,
    payload: err
  };
};
