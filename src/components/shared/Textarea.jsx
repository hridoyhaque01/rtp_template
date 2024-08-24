import React from "react";

function Textarea({
  label = "",
  labelClass = "",
  wrapper = "",
  className = "",
  type = "text",
  ...rest
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className={`label ${labelClass}`} htmlFor="">
        {label}
      </label>
      <textarea
        type={type}
        className={`input h-[120px] resize-none ${className}`}
        {...rest}
      />
    </div>
  );
}

export default Textarea;
