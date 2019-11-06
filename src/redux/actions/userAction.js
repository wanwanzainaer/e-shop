import Types from "./types";
export const setCurrentUser = user => {
  return {
    type: Types.SET_CURRENT_USER,
    payload: user
  };
};
