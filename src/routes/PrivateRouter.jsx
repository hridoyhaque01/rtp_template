import { Navigate, useLocation } from "react-router-dom";

function PrivateRouter({ children }) {
  const user = true;
  const location = useLocation();
  if (user) {
    return <>{children}</>; // Wrap children in JSX syntax
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRouter;
