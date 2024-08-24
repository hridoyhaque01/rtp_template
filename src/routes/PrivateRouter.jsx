import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRouter({ children }) {
  const { auth } = useSelector((state) => state.auth);
  const location = useLocation();
  const isAuthRoute = location?.pathname?.includes("auth");
  const isAdminRoute = location?.pathname?.includes("admin");
  const token = auth?.accessToken;

  if (!token && isAdminRoute) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else if (token && isAuthRoute) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}

export default PrivateRouter;
