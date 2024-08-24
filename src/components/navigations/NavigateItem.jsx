import React from "react";
import { Link } from "react-router-dom";

function NavigateItem({
  isActive = false,
  menu = {},
  setter = () => {},
  icon,
}) {
  return (
    <Link
      to={menu?.path}
      className={`${
        isActive && "bg-blue-500 text-white font-bold"
      } hover:bg-blue-500 hover:text-white flex items-center text-xl gap-2 w-full rounded-lg py-5 px-4 duration-200 group`}
      onClick={() => setter(menu?.name?.toLowerCase())}
    >
      {icon}
      <span>{menu?.name}</span>
    </Link>
  );
}

export default NavigateItem;
