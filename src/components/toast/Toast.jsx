import React, { useEffect, useState } from "react";

export default function Toast({ type, title }) {
  const [width, setWidth] = useState(100);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const animationDuration = 3000;
    const decrementPerMs = width / animationDuration;

    const startTime = Date.now();

    const updateWidth = () => {
      const elapsedTime = Date.now() - startTime;
      const newWidth = Math.max(width - elapsedTime * decrementPerMs, 0);
      setWidth(newWidth);

      if (newWidth > 0) {
        requestAnimationFrame(updateWidth);
      } else {
        setIsVisible(false);
      }
    };

    requestAnimationFrame(updateWidth);
    const timeout = setTimeout(() => setIsVisible(false), 3000);

    return () => {
      cancelAnimationFrame(updateWidth);
      clearTimeout(timeout);
    };
  }, [width]);

  return (
    <>
      {isVisible && (
        <div className="fixed top-8 right-8 bg-white p-4 rounded-sm">
          <div className="w-72 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {type === "info" && (
                <span className="material-symbols-outlined text-xl text-infoColor">
                  info
                </span>
              )}
              {type === "success" && (
                <span className="material-symbols-outlined text-xl text-successColor ">
                  check_circle
                </span>
              )}

              {type === "error" && (
                <span className="material-symbols-outlined text-xl text-errorColor">
                  error
                </span>
              )}
              <span className="text-base">{title}</span>
            </div>

            <button className="text-fadeLight flex items-center">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
          <div
            className="w-full h-1 bg-errorColor absolute left-0 bottom-0"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      )}
    </>
  );
}
