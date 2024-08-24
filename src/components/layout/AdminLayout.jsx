import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../navigations/Sidebar";

function AdminLayout() {
  return (
    <main className="flex h-screen overflow-hidden bg-white-300">
      <Sidebar />
      <Outlet />
    </main>
  );
}

export default AdminLayout;
