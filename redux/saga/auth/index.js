import { all, call, put, takeLatest } from "redux-saga/effects";
import { ApiClient } from "../../../utilities/api";
import {
  onErrorStopLoad,setUserLogin,setLogout
} from "../../slices/auth";
import ApiPath  from "../../../constants/apiPath";
import { toast } from "react-toastify";
import cookie from 'js-cookie' 
import Cookies from "js-cookie";
import { Router } from "next/router";

// Worker saga will be fired on USER_FETCH_REQUESTED actions

function* socialLogin(action) {
  try {
    const resp = yield call(
      ApiClient.post,
      (action.url = ApiPath.Auth.SOCIAL_LOGIN),
      (action.payload = action.payload)

    );
    console.log("resp")
    if (resp.status) {
      yield put(setUserLogin(resp));
      console.log(resp.data.data,"tuntun")
      Cookies.set('authToken',JSON.stringify({token: resp.data.data.token, dob:resp.data.data.userDetails.dob }))
      yield call(action.payload.cb, (action.res = resp.data));
      // yield call(() => Router.push('/dashboard'));
    }
  } catch (e) {
    yield put(onErrorStopLoad());
    console.log(e, "whyyyyyyyy")
    // toast.error(e?.response?.data?.msg);
  }
}

// function* logout(action) {
//   try {
//     const resp = yield call(ApiClient.get, action.url = ApiPath.AuthApiPath.LOGOUT_USER);
//     if (resp.status) {
//       yield call(action.payload.cb, action.res = resp)
//       localStorage.clear();
//       yield put(setLogout())
//     }
//     else {
//       throw resp
//     }
//   } catch (e) {
//     toast.error(e?.response?.data?.msg);
//   }
// }

function* authSaga() {
  yield all([
    takeLatest("auth/socialLogin", socialLogin),
    // takeLatest("auth/logout", logout),
  ]);
}

export default authSaga;
