import Types from "./types";
export const setCurrentUser = user => {
  console.log(user);
  return {
    type: Types.SET_CURRENT_USER,
    payload: user
  };
};
