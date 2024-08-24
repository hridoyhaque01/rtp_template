import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout, saveAuthData } from "../features/auth/authSlice";
import { errorNotify } from "../lib/toastify";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("kanga_user_auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      const currentTimestamp = moment().unix();
      const checkExpire = auth?.expireAt > currentTimestamp;
      if (auth?.accessToken) {
        if (checkExpire) {
          dispatch(saveAuthData(auth));
        } else {
          dispatch(logout());
          errorNotify("Login Session Expired");
        }
      } else {
        dispatch(logout());
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);
  return authChecked;
}
