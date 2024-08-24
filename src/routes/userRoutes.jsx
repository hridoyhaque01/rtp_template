import AuthLayout from "../components/layout/AuthLayout";
import { userRouteLinks } from "../lib/enums";
import Home from "../pages";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import PrivateRouter from "./PrivateRouter";

const { home, login, register, forgotPassword, resetPassword } =
  userRouteLinks || {};

export const userRoutes = {
  path: "/",
  element: (
    <PrivateRouter>
      <AuthLayout />
    </PrivateRouter>
  ),
  children: [
    {
      path: home?.path,
      element: <Home />,
    },
    {
      path: login?.path,
      element: <Login />,
    },
    {
      path: register?.path,
      element: <Register />,
    },
    {
      path: forgotPassword?.path,
      element: <ForgotPassword />,
    },
    {
      path: resetPassword?.path,
      element: <ResetPassword />,
    },
  ],
};
