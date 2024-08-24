import React from "react";

function Tabs({
  tabs = [],
  activeIndex = "",
  setter = () => {},
  className = "",
  dropdownClass = "inline-flex md:hidden",
  tabClass = "hidden md:flex",
}) {
  return (
    <div className={className}>
      <div
        className={`hs-dropdown relative ${dropdownClass} [--placement:bottom-right]`}
      >
        <button
          id="hs-dropdown-left-but-right-on-lg"
          type="button"
          className="hs-dropdown-toggle inline-flex items-center gap-1 text-lg md:text-xl font-bold"
        >
          {tabs[0]}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M6.77083 7.49961L10.0042 10.7329L13.2375 7.49961C13.5625 7.17461 14.0875 7.17461 14.4125 7.49961C14.7375 7.82461 14.7375 8.34961 14.4125 8.67461L10.5875 12.4996C10.2625 12.8246 9.7375 12.8246 9.4125 12.4996L5.5875 8.67461C5.2625 8.34961 5.2625 7.82461 5.5875 7.49961C5.9125 7.18294 6.44583 7.17461 6.77083 7.49961Z"
              fill="black"
            />
          </svg>
        </button>

        <div
          className="hs-dropdown-menu  transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-0 end-0 right-0 w-48 bg-white shadow-md p-2 mt-2 divide-y divide-gray-300 rounded"
          aria-labelledby="hs-dropdown-left-but-right-on-lg"
        >
          {tabs?.map((tab, index) => (
            <button
              type="button"
              className={`py-2 px-3 w-full inline-flex items-center gap-x-2 text-lg md:text-xl whitespace-nowrap outline-none disabled:opacity-50 disabled:pointer-events-none ${
                activeIndex === index
                  ? "active font-bold text-black-900"
                  : "text-black-700"
              }`}
              key={index}
              onClick={() => setter(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <nav className={`gap-x-1 ${tabClass}`}>
        {tabs?.map((tab, index) => (
          <button
            type="button"
            className={`py-4 px-3 inline-flex items-center gap-x-2 border-b-2 text-lg md:text-xl whitespace-nowrap outline-none disabled:opacity-50 disabled:pointer-events-none ${
              activeIndex === index
                ? "active font-bold border-red-700 text-black-900"
                : "text-black-700 border-transparent"
            }`}
            key={index}
            onClick={() => setter(index)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Tabs;
