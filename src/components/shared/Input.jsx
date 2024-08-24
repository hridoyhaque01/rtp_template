import React from "react";

function Input({
  label = "",
  labelClass = "",
  wrapper = "",
  className = "",
  type = "text",
  icon = null,
  ...rest
}) {
  return (
    <div className={`flex flex-col gap-2 ${wrapper}`}>
      <label className={`label ${labelClass}`} htmlFor="">
        {label}
      </label>
      <div className="relative w-full">
        <input
          type={type}
          className={`input relative ${className} ${icon ? "pl-10" : ""}`}
          {...rest}
        />

        {icon && (
          <div className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden absolute top-1/2 -translate-y-1/2 left-4 z-50">
            <img src={icon} className="w-full h-full object-contain" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
