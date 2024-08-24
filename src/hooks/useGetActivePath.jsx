import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setActivePath } from "../features/shared/sharedSlice";

export default function useGetActivePath() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { activePath } = useSelector((state) => state.shared);

  useEffect(() => {
    if (location?.pathname === "/") {
      dispatch(setActivePath("dashboard"));
    } else if (location?.pathname?.includes("pages")) {
      dispatch(setActivePath("pages"));
    } else if (location?.pathname?.includes("contents")) {
      dispatch(setActivePath("contents"));
    } else if (location?.pathname?.includes("invoices")) {
      dispatch(setActivePath("invoices"));
    } else if (location?.pathname?.includes("cv-bank")) {
      dispatch(setActivePath("cvbank"));
    } else if (location?.pathname?.includes("appearance")) {
      dispatch(setActivePath("appearance"));
    } else if (location?.pathname?.includes("support")) {
      dispatch(setActivePath("support"));
    } else if (location?.pathname?.includes("settings")) {
      dispatch(setActivePath("settings"));
    } else if (location?.pathname?.includes("help-center")) {
      dispatch(setActivePath("help"));
    }
  }, [dispatch, location?.pathname]);
  return { activePath };
}
