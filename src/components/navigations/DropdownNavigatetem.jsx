import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const DropdownNavigatetem = forwardRef(
  (
    {
      setter = () => {},
      menu = {},
      icon,
      isActive = false,
      isSubmenuOpen = false,
    },
    submenuRef
  ) => {
    return (
      <div className="w-full overflow-hidden capitalize shrink-0 text-xl">
        <div
          className={`flex items-center gap-2 w-full rounded-lg py-5 px-4 cursor-pointer select-none  hover:bg-blue-500 hover:text-white duration-300 group ${
            isActive && "bg-blue-500 text-white font-bold"
          }`}
          onClick={() => setter(menu?.name?.toLowerCase())}
        >
          {icon}

          <span className="flex-1">{menu?.name}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`${isSubmenuOpen && "rotate-180"} duration-300`}
          >
            <path
              d="M7.41 8.29688L12 12.8769L16.59 8.29688L18 9.70687L12 15.7069L6 9.70687L7.41 8.29688Z"
              fill="#A7A7A7"
              className={` group-hover:fill-white duration-300 ${
                isActive ? "fill-white" : "fill-black-600"
              }`}
            />
          </svg>
        </div>
        {/* submenu  */}
        <div
          ref={(ref) => (submenuRef.current[menu?.name] = ref)}
          style={{
            maxHeight: isSubmenuOpen
              ? `${submenuRef.current[menu?.name]?.scrollHeight}px`
              : "0",
          }}
          className="duration-300"
        >
          <div className="flex flex-col gap-1 duration-300 pt-4">
            {menu?.links?.map((menu, index) => (
              <NavLink
                to={menu?.path}
                className={({ isActive }) =>
                  `py-3 pl-8 rounded-lg ${
                    isActive ? "text-white font-bold" : ""
                  }`
                }
                key={index}
              >
                {menu?.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default DropdownNavigatetem;
