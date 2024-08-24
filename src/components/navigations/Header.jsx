import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setShowSidebar } from "../../features/shared/sharedSlice";
import { logoIcon } from "../../lib/getAssets";
import HeaderBreadcrumb from "../shared/HeaderBreadcrumb";

function Header({ breadcumbs = [], isShow = false }) {
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-12 py-4 bg-white shrink-0 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => dispatch(setShowSidebar(true))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                  fill="#272727"
                />
              </svg>
            </button>
            <img src={logoIcon} className="w-8 h-auto object-contain" />
          </div>
          <HeaderBreadcrumb
            breadcumbs={breadcumbs}
            className={`${isShow ? "flex" : "hidden md:flex"}`}
          />
          <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
            <button
              id="hs-dropdown-left-but-right-on-lg"
              type="button"
              className="hs-dropdown-toggle inline-flex items-center gap-3"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-12 h-12 border rounded-full overflow-hidden bg-white-300">
                  <img
                    src={auth?.profileImage}
                    alt="auth"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <div className="hidden  md:flex flex-col text-left text-black-900">
                  <h4 className="text-sm sm:text-base  font-semibold">
                    {/* {auth?.name} */}
                    Alex Andrew
                  </h4>
                  <span className="text-sm">Admin</span>
                </div>
              </div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8751 8.99999L11.9951 12.88L8.1151 8.99999C7.7251 8.60999 7.0951 8.60999 6.7051 8.99999C6.3151 9.38999 6.3151 10.02 6.7051 10.41L11.2951 15C11.6851 15.39 12.3151 15.39 12.7051 15L17.2951 10.41C17.6851 10.02 17.6851 9.38999 17.2951 8.99999C16.9051 8.61999 16.2651 8.60999 15.8751 8.99999Z"
                  fill="#171717"
                />
              </svg>
            </button>

            <div
              className="hs-dropdown-menu  transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-0 end-0 right-0 w-48 bg-white shadow-md p-4 mt-2 divide-y divide-gray-300"
              aria-labelledby="hs-dropdown-left-but-right-on-lg"
            >
              <Link className="flex items-center gap-2 py-3 px-4" to={"/"}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 8C15.5 9.93386 13.9339 11.5 12 11.5C10.0661 11.5 8.5 9.93386 8.5 8C8.5 6.06614 10.0661 4.5 12 4.5C13.9339 4.5 15.5 6.06614 15.5 8ZM4.5 18C4.5 17.5186 4.73716 17.06 5.21364 16.6202C5.69352 16.1773 6.38208 15.7882 7.18469 15.4666C8.79071 14.8233 10.7275 14.5 12 14.5C13.2725 14.5 15.2093 14.8233 16.8153 15.4666C17.6179 15.7882 18.3065 16.1773 18.7864 16.6202C19.2628 17.06 19.5 17.5186 19.5 18V19C19.5 19.2739 19.2739 19.5 19 19.5H5C4.72614 19.5 4.5 19.2739 4.5 19V18Z"
                    fill="#171717"
                    stroke="#1B1B1B"
                  />
                </svg>

                <span>My Profile</span>
              </Link>
              <button
                type="button"
                className="flex items-center gap-2 py-3 px-4 text-errors-300 cursor-pointer"
                data-hs-overlay="#logoutModal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.10425 5H11.1042C11.6542 5 12.1042 4.55 12.1042 4C12.1042 3.45 11.6542 3 11.1042 3H5.10425C4.00425 3 3.10425 3.9 3.10425 5V19C3.10425 20.1 4.00425 21 5.10425 21H11.1042C11.6542 21 12.1042 20.55 12.1042 20C12.1042 19.45 11.6542 19 11.1042 19H5.10425V5Z"
                    fill="#F83B3B"
                  />
                  <path
                    d="M20.7542 11.65L17.9642 8.86C17.6442 8.54 17.1042 8.76 17.1042 9.21V11H10.1042C9.55425 11 9.10425 11.45 9.10425 12C9.10425 12.55 9.55425 13 10.1042 13H17.1042V14.79C17.1042 15.24 17.6442 15.46 17.9542 15.14L20.7442 12.35C20.9442 12.16 20.9442 11.84 20.7542 11.65Z"
                    fill="#F83B3B"
                  />
                </svg>

                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <HeaderBreadcrumb
        breadcumbs={breadcumbs}
        className={`${isShow ? "hidden" : "flex pt-4 md:hidden px-4 sm:px-6"}`}
      />
    </header>
  );
}

export default Header;
