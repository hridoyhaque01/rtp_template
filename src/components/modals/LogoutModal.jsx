import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { question } from "../../lib/getAssets";

function LogoutModal() {
  const dispatch = useDispatch();
  return (
    <div
      id="logoutModal"
      className="hs-overlay hidden size-full fixed top-0 start-0 z-[9999] overflow-x-hidden overflow-y-auto pointer-events-none"
      role="dialog"
      tabIndex="-1"
      aria-labelledby="logoutModal-label"
    >
      <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 w-full h-full flex items-center justify-center p-6">
        <div className="w-full max-w-[576px] bg-white border border-tertiary-500 rounded-3xl p-10 pointer-events-auto">
          <div className="flex flex-col gap-6">
            <div className="w-full max-w-[240px] mx-auto">
              <img src={question} alt="" className="w-full" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-black-900 font-bold">
                Are you sure?
              </h2>
              <p className="text-black-600 text-sm sm:text-base max-w-[380px] mx-auto mt-2">
                Do you really want to logout?
              </p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <button
                data-hs-overlay="#logoutModal"
                className="btn_black_outline w-full max-w-none"
              >
                Cancel
              </button>
              <button
                data-hs-overlay="#logoutModal"
                className="btn_error w-full max-w-none"
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
