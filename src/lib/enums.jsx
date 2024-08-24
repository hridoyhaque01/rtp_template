export const adminRouteLinks = {
  dashboard: {
    name: "Dashboard",
    path: "/admin/dashboard",
  },
};

export const userRouteLinks = {
  home: {
    name: "Home",
    path: "/",
  },
  login: {
    name: "Login",
    path: "/auth/login",
  },
  register: {
    name: "Register",
    path: `/auth/register`,
  },
  forgotPassword: {
    name: "Forgot Password",
    path: "/auth/forgot-password",
  },
  resetPassword: {
    name: "Reset Password",
    path: "/auth/reset-password",
  },
};

export const breadcrumbs = {
  dashboard: [
    {
      name: "Dashboard",
    },
  ],
};
