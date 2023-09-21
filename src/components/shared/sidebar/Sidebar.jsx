import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../../assets/getAssets";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="w-[300px] py-14 h-full font-rubik text-base text-fade sidebar">
      <div className="h-full flex flex-col justify-between">
        {/* logo  */}
        <div className="flex items-start gap-6 px-6">
          <div>
            <img src={logo} alt="" className="" />
          </div>
          <div className="font-raleway">
            <h4 className="text-2xl font-bold">PAM</h4>
            <p className="text-xs">( Purchase account management )</p>
          </div>
        </div>

        {/* nav links  */}
        <div className="flex flex-col gap-1">
          {/* dashboard  */}
          <div>
            <NavLink
              to="/"
              className="inline-flex w-[220px] items-center gap-4 px-11 py-5 rounded-r-2xl"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M19.3525 3.78589V10.0648C19.3525 10.7008 19.2149 11.0166 19.0309 11.1896C18.8393 11.3699 18.4839 11.5039 17.7934 11.5039H14.063C13.3724 11.5039 13.017 11.3699 12.8254 11.1896C12.6415 11.0166 12.5038 10.7008 12.5038 10.0648V3.78589C12.5038 3.14993 12.6415 2.83416 12.8254 2.66112C13.017 2.48087 13.3724 2.3468 14.063 2.3468H17.7934C18.4839 2.3468 18.8393 2.48087 19.0309 2.66112C19.2149 2.83416 19.3525 3.14993 19.3525 3.78589Z"
                    stroke="#8B8C91"
                  />
                  <path
                    d="M9.65716 12.0963V18.3752C9.65716 19.0112 9.51948 19.3269 9.33555 19.5C9.14395 19.6802 8.78857 19.8143 8.09803 19.8143H4.3676C3.67706 19.8143 3.32168 19.6802 3.13008 19.5C2.94615 19.3269 2.80847 19.0112 2.80847 18.3752V12.0963C2.80847 11.4603 2.94615 11.1445 3.13008 10.9715C3.32168 10.7912 3.67706 10.6572 4.3676 10.6572H8.09803C8.78857 10.6572 9.14395 10.7912 9.33555 10.9715C9.51948 11.1445 9.65716 11.4603 9.65716 12.0963Z"
                    stroke="#8B8C91"
                  />
                  <path
                    d="M19.3525 15.7897V18.3752C19.3525 19.0111 19.2149 19.3269 19.0309 19.5C18.8393 19.6802 18.4839 19.8143 17.7934 19.8143H14.063C13.3724 19.8143 13.017 19.6802 12.8254 19.5C12.6415 19.3269 12.5038 19.0111 12.5038 18.3752V15.7897C12.5038 15.1538 12.6415 14.838 12.8254 14.665C13.017 14.4847 13.3724 14.3506 14.063 14.3506H17.7934C18.4839 14.3506 18.8393 14.4847 19.0309 14.665C19.2149 14.838 19.3525 15.1538 19.3525 15.7897Z"
                    stroke="#8B8C91"
                  />
                  <path
                    d="M9.65716 3.78589V6.37134C9.65716 7.0073 9.51948 7.32307 9.33555 7.49611C9.14395 7.67636 8.78857 7.81043 8.09803 7.81043H4.3676C3.67706 7.81043 3.32168 7.67636 3.13008 7.49611C2.94615 7.32307 2.80847 7.0073 2.80847 6.37134V3.78589C2.80847 3.14993 2.94615 2.83416 3.13008 2.66112C3.32168 2.48087 3.67706 2.3468 4.3676 2.3468H8.09803C8.78857 2.3468 9.14395 2.48087 9.33555 2.66112C9.51948 2.83416 9.65716 3.14993 9.65716 3.78589Z"
                    stroke="#8B8C91"
                  />
                </svg>
              </span>
              <span>Dashboard</span>
            </NavLink>
          </div>
          {/* users  */}
          <div>
            <NavLink
              to="/users"
              className="inline-flex w-[220px] items-center gap-4 px-11 py-5 rounded-r-2xl"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M9.42979 22.9648H15.4637C20.492 22.9648 22.5033 20.9535 22.5033 15.9252V9.89128C22.5033 4.863 20.492 2.85168 15.4637 2.85168H9.42979C4.40151 2.85168 2.3902 4.863 2.3902 9.89128V15.9252C2.3902 20.9535 4.40151 22.9648 9.42979 22.9648Z"
                    stroke="#8B8C91"
                    strokeWidth="1.50848"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9665 19.4449C17.0727 19.4449 17.9778 18.5398 17.9778 17.4336V8.38271C17.9778 7.27649 17.0727 6.3714 15.9665 6.3714C14.8603 6.3714 13.9552 7.27649 13.9552 8.38271V17.4336C13.9552 18.5398 14.8502 19.4449 15.9665 19.4449Z"
                    stroke="#8B8C91"
                    strokeWidth="1.50848"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.92696 19.445C10.0332 19.445 10.9383 18.5399 10.9383 17.4337V13.9139C10.9383 12.8077 10.0332 11.9026 8.92696 11.9026C7.82074 11.9026 6.91565 12.8077 6.91565 13.9139V17.4337C6.91565 18.5399 7.81068 19.445 8.92696 19.445Z"
                    stroke="#8B8C91"
                    strokeWidth="1.50848"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Users</span>
            </NavLink>
          </div>
          {/* Campaigns  */}
          <div>
            <NavLink
              to="/campaigns"
              className="inline-flex w-[220px] items-center gap-4 px-11 py-5 rounded-r-2xl"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M9.42979 22.9648H15.4637C20.492 22.9648 22.5033 20.9535 22.5033 15.9252V9.89128C22.5033 4.863 20.492 2.85168 15.4637 2.85168H9.42979C4.40151 2.85168 2.3902 4.863 2.3902 9.89128V15.9252C2.3902 20.9535 4.40151 22.9648 9.42979 22.9648Z"
                    stroke="#8B8C91"
                    strokeWidth="1.50848"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9665 19.4449C17.0727 19.4449 17.9778 18.5398 17.9778 17.4336V8.38271C17.9778 7.27649 17.0727 6.3714 15.9665 6.3714C14.8603 6.3714 13.9552 7.27649 13.9552 8.38271V17.4336C13.9552 18.5398 14.8502 19.4449 15.9665 19.4449Z"
                    stroke="#8B8C91"
                    strokeWidth="1.50848"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.92696 19.445C10.0332 19.445 10.9383 18.5399 10.9383 17.4337V13.9139C10.9383 12.8077 10.0332 11.9026 8.92696 11.9026C7.82074 11.9026 6.91565 12.8077 6.91565 13.9139V17.4337C6.91565 18.5399 7.81068 19.445 8.92696 19.445Z"
                    stroke="#8B8C91"
                    strokeWidth="1.50848"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Campaigns</span>
            </NavLink>
          </div>
          {/* Reports  */}
          <div>
            <NavLink
              to="/reports"
              className="inline-flex w-[220px] items-center gap-4 px-11 py-5 rounded-r-2xl reports"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M2.3902 2.30377V19.3999C2.3902 21.0693 3.73778 22.4169 5.40717 22.4169H22.5033"
                    stroke="#8B8C91"
                    strokeWidth="1.50848"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.4071 17.3887L10.0231 11.9984C10.7874 11.1134 12.145 11.053 12.9696 11.8877L13.925 12.8431C14.7496 13.6677 16.1073 13.6174 16.8716 12.7325L21.4976 7.33209"
                    stroke="#8B8C91"
                    strokeWidth="1.50848"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Reports</span>
            </NavLink>
          </div>
          {/* Analytics  */}
          <div>
            <NavLink
              to="/analytics"
              className="inline-flex w-[220px] items-center gap-4 px-11 py-5 rounded-r-2xl"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M18.4237 12.8126C21.0384 12.8126 22.1245 11.8069 21.1591 8.5084C20.5054 6.2859 18.5946 4.37515 16.3721 3.72147C13.0736 2.75604 12.0679 3.84215 12.0679 6.45686V9.35315C12.0679 11.8069 13.0736 12.8126 15.0849 12.8126H18.4237Z"
                    stroke="#8B8C91"
                    strokeWidth="1.50848"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.1131 15.5278C19.1778 20.184 14.7127 23.563 9.63416 22.7384C5.82273 22.1249 2.75548 19.0577 2.13197 15.2462C1.31739 10.1878 4.67628 5.72266 9.31235 4.77734"
                    stroke="#8B8C91"
                    strokeWidth="1.50848"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Analytics</span>
            </NavLink>
          </div>
          {/* Inbox  */}
          <div>
            <NavLink
              to="/inbox"
              className="inline-flex w-[220px] items-center gap-4 px-11 py-5 rounded-r-2xl"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M18.5149 22.5222H7.62377C4.35644 22.5222 2.17822 20.8885 2.17822 17.0766V9.45287C2.17822 5.64099 4.35644 4.00732 7.62377 4.00732H18.5149C21.7822 4.00732 23.9604 5.64099 23.9604 9.45287V17.0766C23.9604 20.8885 21.7822 22.5222 18.5149 22.5222Z"
                    stroke="#8B8C91"
                    strokeWidth="1.63366"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5149 9.99744L15.106 12.7202C13.9842 13.6133 12.1436 13.6133 11.0218 12.7202L7.62378 9.99744"
                    stroke="#8B8C91"
                    strokeWidth="1.63366"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Inbox</span>
            </NavLink>
          </div>
          {/* Setting  */}
          <div>
            <NavLink
              to="/setting"
              className="inline-flex w-[220px] items-center gap-4 px-11 py-5 rounded-r-2xl"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M3.26733 10.5694V16.8536C3.26733 19.1625 3.26733 19.1625 5.44555 20.6328L11.4357 24.0962C12.3396 24.6189 13.8099 24.6189 14.703 24.0962L20.6931 20.6328C22.8713 19.1625 22.8713 19.1625 22.8713 16.8645V10.5694C22.8713 8.27142 22.8713 8.27142 20.6931 6.80112L14.703 3.33776C13.8099 2.81499 12.3396 2.81499 11.4357 3.33776L5.44555 6.80112C3.26733 8.27142 3.26733 8.27142 3.26733 10.5694Z"
                    stroke="#8B8C91"
                    strokeWidth="1.63366"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.0693 16.9844C14.8738 16.9844 16.3367 15.5215 16.3367 13.717C16.3367 11.9125 14.8738 10.4497 13.0693 10.4497C11.2648 10.4497 9.802 11.9125 9.802 13.717C9.802 15.5215 11.2648 16.9844 13.0693 16.9844Z"
                    stroke="#8B8C91"
                    strokeWidth="1.63366"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Setting</span>
            </NavLink>
          </div>
        </div>

        {/* profile  */}
        <div>ddd</div>
      </div>
    </div>
  );
}

export default Sidebar;
