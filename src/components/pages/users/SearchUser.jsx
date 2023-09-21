import React from "react";
import { Link } from "react-router-dom";

function SearchUser({ searchValue, setSearchValue }) {
  return (
    <div className="flex items-center justify-end gap-6 mb-6">
      <div className="w-full max-w-xs">
        <div className="flex items-center bg-navy-50 pr-4 gap-1 rounded-xl">
          <input
            type="text"
            className="w-full bg-transparent outline-none py-4 pl-4 pr-1 text-sm"
            placeholder="can’t find something? search it here!"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M10.0802 18.1345C14.5052 18.1345 18.0923 14.5474 18.0923 10.1224C18.0923 5.69749 14.5052 2.11035 10.0802 2.11035C5.65528 2.11035 2.06815 5.69749 2.06815 10.1224C2.06815 14.5474 5.65528 18.1345 10.0802 18.1345Z"
                stroke="white"
                strokeOpacity="0.8"
                strokeWidth="1.33535"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.1397 18.7486C17.6115 20.173 18.6887 20.3155 19.5166 19.0691C20.2733 17.9296 19.7748 16.9949 18.4038 16.9949C17.389 16.986 16.8192 17.7783 17.1397 18.7486Z"
                stroke="white"
                strokeOpacity="0.8"
                strokeWidth="1.33535"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="">
        <Link
          to="/add-user"
          className="w-full flex items-center justify-between bg-gradient py-3 px-4 gap-5 text-sm font-medium rounded-xl"
        >
          <span>Add User</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M18.8808 3.08618H9.38609C5.26188 3.08618 2.80322 5.54484 2.80322 9.66905V19.1525C2.80322 23.288 5.26188 25.7466 9.38609 25.7466H18.8695C22.9937 25.7466 25.4524 23.288 25.4524 19.1638V9.66905C25.4637 5.54484 23.005 3.08618 18.8808 3.08618Z"
                fill="white"
              />
              <path
                d="M18.6655 13.5666H14.9832V9.88431C14.9832 9.41977 14.598 9.03455 14.1334 9.03455C13.6689 9.03455 13.2837 9.41977 13.2837 9.88431V13.5666H9.60135C9.13681 13.5666 8.75159 13.9519 8.75159 14.4164C8.75159 14.8809 9.13681 15.2662 9.60135 15.2662H13.2837V18.9485C13.2837 19.413 13.6689 19.7983 14.1334 19.7983C14.598 19.7983 14.9832 19.413 14.9832 18.9485V15.2662H18.6655C19.1301 15.2662 19.5153 14.8809 19.5153 14.4164C19.5153 13.9519 19.1301 13.5666 18.6655 13.5666Z"
                fill="white"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SearchUser;
