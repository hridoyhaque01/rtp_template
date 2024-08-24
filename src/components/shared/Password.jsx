import React, { useEffect, useRef, useState } from "react";

function Password({
  label = "",
  labelClass = "",
  wrapper = "",
  innerWrapper = "",
  className = "",
  type = "text",
  icon = null,
  id = "password",
  ...rest
}) {
  const [isShowIcon, setIsShowIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const ref = useRef();

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleInput = () => {
      const password = ref.current?.value;
      setIsShowIcon(password?.length > 0);
    };
    ref.current?.addEventListener("input", handleInput);
    return () => {
      ref.current?.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <div className={`flex flex-col gap-2 ${wrapper}`}>
      <label className={`label ${labelClass}`} htmlFor="">
        {label}
      </label>
      <label
        htmlFor={id}
        className={`flex items-center justify-between gap-1 bg-white-300 p-4 rounded-lg cursor-text ${innerWrapper}`}
      >
        <input
          type={showPassword ? "text" : "password"}
          className="input bg-transparent p-0"
          autoComplete="false"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={ref}
          {...rest}
          id={id}
        />
        <button
          type="button"
          className={
            isShowIcon ? "" : "opacity-0 invisible pointer-events-none"
          }
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                fill="#404040"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 6.46999C14.76 6.46999 17 8.70999 17 11.47C17 11.98 16.9 12.47 16.76 12.93L19.82 15.99C21.21 14.76 22.31 13.22 23 11.46C21.27 7.07999 17 3.96999 12 3.96999C10.73 3.96999 9.51 4.16999 8.36 4.53999L10.53 6.70999C11 6.56999 11.49 6.46999 12 6.46999ZM2.71 3.12999C2.32 3.51999 2.32 4.14999 2.71 4.53999L4.68 6.50999C3.06 7.79999 1.77 9.49999 1 11.47C2.73 15.86 7 18.97 12 18.97C13.52 18.97 14.97 18.67 16.31 18.15L19.03 20.87C19.42 21.26 20.05 21.26 20.44 20.87C20.83 20.48 20.83 19.85 20.44 19.46L4.13 3.12999C3.74 2.73999 3.1 2.73999 2.71 3.12999ZM12 16.47C9.24 16.47 7 14.23 7 11.47C7 10.7 7.18 9.96999 7.49 9.32999L9.06 10.9C9.03 11.08 9 11.27 9 11.47C9 13.13 10.34 14.47 12 14.47C12.2 14.47 12.38 14.44 12.57 14.4L14.14 15.97C13.49 16.29 12.77 16.47 12 16.47ZM14.97 11.14C14.82 9.73999 13.72 8.64999 12.33 8.49999L14.97 11.14Z"
                fill="#404040"
              />
            </svg>
          )}
        </button>
      </label>
    </div>
  );
}

export default Password;
