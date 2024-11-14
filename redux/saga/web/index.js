import { all, call, put, takeLatest } from "redux-saga/effects";
import { ApiClient } from "../../../utilities/api";
import {
  onErrorStopLoad,
  stopLoading,
} from "../../slices/web";
import  ApiPath  from "../../../constants/apiPath";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

// Worker saga will be fired on USER_FETCH_REQUESTED actions



function* webSaga() {


      //       (action.params = { params: dataToSend })
  function* userSubscribe(action) {
    try {
      const dataToSend = { ...action.payload };
      delete dataToSend.cb
      console.log(dataToSend,"dataToSend")
      const resp = yield call(
        ApiClient.post,
        (action.url = ApiPath.Web.Subscribe),
        (action.payload = action.payload)
      );
      console.log(resp,"res")
      if (resp.status) {
        yield call(action.payload.cb, (action.res = resp.data));
        yield call(stopLoading());
      }
    } catch (e) {
      yield put(onErrorStopLoad());
      toast.error(e?.msg);
    }
  }

  function* updateUser(action) {
    try {
      const dataToSend = { ...action.payload };
      delete dataToSend.cb
      const resp = yield call(
        ApiClient.post,
        (action.url = ApiPath.Web.UPDATE_USER),
        (action.payload = action.payload)
      );
      if (resp.status) {
        yield call(action.payload.cb, (action.res = resp.data));
        const token =  (JSON.parse(Cookies.get("authToken") ?? '{}'))?.token ?? ""
        Cookies.set('authToken',JSON.stringify({token: token, dob:resp.data.data.dob }))
        yield call(stopLoading());
      }
    } catch (e) {
      yield put(onErrorStopLoad());
      toast.error(e?.msg);
    }
  }

  // function* getConversationByMobile(action) {
  //   try {
  //     const dataToSend = { ...action.payload };
  //     delete dataToSend.cb
  //     const resp = yield call(
  //       ApiClient.get,
  //       (action.url = ApiPath.WebApiPath.GET_INCOMING_BY_MOBILE + dataToSend.id),
  //       (action.params = { params: dataToSend })
  //     );
  //     if (resp.status) {
  //       yield call(action.payload.cb, (action.res = resp.data));
  //       yield call(stopLoading());
  //     }
  //   } catch (e) {
  //     yield put(onErrorStopLoad());
  //     toast.error(e?.msg);
  //   }
  // }



  yield all([
    takeLatest("web/userSubscribe", userSubscribe),
    takeLatest("web/updateUser", updateUser),

  ]);
}

export default webSaga;
