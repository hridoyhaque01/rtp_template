import React from "react";

function Select({
  label = "",
  labelClass = "",
  wrapper = "flex-col",
  className = "input",
  icon,
  children,
  ...rest
}) {
  return (
    <div className={`flex gap-2 md:gap-4 ${wrapper}`}>
      <label className={`label ${labelClass}`} htmlFor="">
        {label}
      </label>
      <select
        data-hs-select='{
          "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
          "toggleClasses": `hs-select-disabled:pointer-events-none min-w-[130px] hs-select-disabled:opacity-50 relative bg-white-300 p-4 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border-none rounded-lg text-start text-sm focus:outline-none dark:bg-neutral-900 dark:focus:outline-none",
          "dropdownClasses": "mt-1 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
          "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50",
          "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"></span></div>",
          "extraMarkup": "<div class=\"absolute top-1/2 end-4 -translate-y-1/2\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M2.51301 4.07619L1.33301 5.25619L7.99967 11.9229L14.6663 5.25619L13.4863 4.07619L7.99967 9.56285L2.51301 4.07619Z\" fill=\"#222222\"/></svg></div>"
        }'
        className=""
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}

export default Select;
