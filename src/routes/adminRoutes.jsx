import AdminLayout from "../components/layout/AdminLayout";
import { adminRouteLinks } from "../lib/enums";
import Dashboard from "../pages/Dashboard";
import PrivateRouter from "./PrivateRouter";

const { dashboard = {} } = adminRouteLinks || {};

export const adminRoutes = {
  path: "/admin",
  element: (
    <PrivateRouter>
      <AdminLayout />
    </PrivateRouter>
  ),
  children: [
    // dashboard
    {
      path: dashboard?.path,
      element: <Dashboard />,
    },
  ],
};
