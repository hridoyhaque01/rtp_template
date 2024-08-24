import React from "react";
import { RouterProvider } from "react-router-dom";
import LogoutModal from "./components/modals/LogoutModal";
import useAuthCheck from "./hooks/useAuthCheck";
import NotifyContainer from "./lib/toastify";
import { routes } from "./routes/Router";

function App() {
  const Router = routes;
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div>loading....</div>
  ) : (
    <div className="font-inter">
      <RouterProvider router={Router} />
      <NotifyContainer />
      <LogoutModal />
    </div>
  );
}

export default App;
