import React from "react";
import { Link } from "react-router-dom";

function HeaderBreadcrumb({ breadcumbs = [], className = "flex" }) {
  return (
    <ul className={`${className} items-center flex-wrap gap-y-2 gap-x-3.5`}>
      {breadcumbs?.map((item, index) => (
        <li key={index} className="flex  items-center gap-2">
          <Link
            to={item?.path}
            className={`flex items-center gap-2 text-xs sm:text-base md:text-xl ${
              index == breadcumbs?.length - 1 || breadcumbs?.length == 1
                ? "text-black-900 font-semibold"
                : "text-black-700"
            }`}
          >
            <span>{item?.name}</span>
          </Link>
          {index !== breadcumbs?.length - 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M4.83789 9.6775L7.50956 7L4.83789 4.3225L5.66039 3.5L9.16039 7L5.66039 10.5L4.83789 9.6775Z"
                fill="#CECECE"
              />
            </svg>
          )}
        </li>
      ))}
    </ul>
  );
}

export default HeaderBreadcrumb;
