import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setShowSidebar } from "../../features/shared/sharedSlice";
import useGetActivePath from "../../hooks/useGetActivePath";
import { adminRouteLinks } from "../../lib/enums";
import { logo } from "../../lib/getAssets";
import { DashboardSvg } from "../../lib/getSvg";
import NavigateItem from "./NavigateItem";
function Sidebar() {
  const { activePath } = useGetActivePath();
  const { showSidebar } = useSelector((state) => state.shared);
  const dispatch = useDispatch();

  return (
    <aside className="relative">
      <div
        className={`w-[280px] bg-black-950 py-9 shrink-0 h-full flex flex-col gap-16 fixed lg:relative top-0 left-0 ${
          showSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } duration-300 z-[99]`}
      >
        <Link
          to="/"
          className="max-w-max mx-auto sticky px-4 top-0"
          onClick={() => handleDropdown("dashboard")}
        >
          <img src={logo} className="w-full max-w-[183px]" />
        </Link>
        <div className="h-full overflow-auto no-scrollbar px-4">
          {/* nav items  */}
          <div className="flex flex-col gap-4 text-base text-black-600">
            {/* Dashboard */}
            <NavigateItem
              menu={adminRouteLinks?.dashboard}
              isActive={activePath == "dashboard"}
              icon={<DashboardSvg isActive={activePath == "dashboard"} />}
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black-rgb duration-200 z-[60] ${
          showSidebar ? "block lg:hidden" : "hidden"
        }`}
        onClick={() => dispatch(setShowSidebar(false))}
      ></div>
    </aside>
  );
}

export default Sidebar;
