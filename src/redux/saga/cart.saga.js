import { all, call, takeLatest, put } from "redux-saga/effects";

import { clearCart } from "../actions/cartAction";
import Types from "../actions/types";
export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(Types.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
