import React from "react";

export const DashboardSvg = ({ isActive = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 3V11H11V3H3ZM9 9H5V5H9V9ZM3 13V21H11V13H3ZM9 19H5V15H9V19ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13 13V21H21V13H13ZM19 19H15V15H19V19Z"
        className={` group-hover:fill-white duration-200 ${
          isActive ? "fill-white" : "fill-black-600"
        }`}
      />
    </svg>
  );
};
