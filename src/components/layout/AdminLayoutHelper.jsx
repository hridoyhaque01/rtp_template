import React from "react";
import Header from "../navigations/Header";

function AdminLayoutHelper({ breadcrumb = [], isShow = false, children }) {
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <Header isShow={isShow} breadcumbs={breadcrumb} />
      <div className="flex-1 w-full p-4 sm:p-6 overflow-auto">{children}</div>
    </div>
  );
}

export default AdminLayoutHelper;
