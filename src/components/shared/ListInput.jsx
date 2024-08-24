import React, { useEffect, useRef, useState } from "react";
import { success, trash } from "../../lib/getAssets";
import { errorNotify } from "../../lib/toastify";

function ListInput({
  label = "",
  labelClass = "",
  wrapper = "",
  innerWrapper = "",
  listClass = "",
  contentWrapper = "",
  setter = () => {},
  defaultValues = [],
  className = "",
  type = "text",
  icon = null,
  title = "",
  ...rest
}) {
  const [lists, setLists] = useState([]);
  const listRef = useRef(null);

  const handleRemoveQualification = (index) => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);
    setter(newLists);
  };

  const handleAddList = () => {
    const value = listRef.current.value;
    if (value?.trim()?.length > 0) {
      setLists((prev) => [...prev, value]);
      setter((prev) => [...prev, value]);
      listRef.current.value = null;
    } else {
      errorNotify("Enter something");
    }
  };

  useEffect(() => {
    if (defaultValues?.length > 0) setLists(defaultValues);
  }, []);

  return (
    <div className={`flex flex-col gap-2 sm:gap-4 ${wrapper}`}>
      <h2 className="title">{title}</h2>
      <div className={`flex flex-col gap-2 ${contentWrapper}`}>
        {lists?.length > 0 && (
          <ul className={`flex flex-col gap-1 ${listClass}`}>
            {lists?.map((item, index) => (
              <li
                className="flex items-start gap-2 px-3 py-2 bg-white-300 rounded"
                key={index}
              >
                <button
                  type="button"
                  className="flex items-center justify-center w-6 aspect-square shrink-0 group relative"
                  onClick={() => handleRemoveQualification(index)}
                >
                  <img
                    src={success}
                    alt=""
                    className="w-full aspect-square object-contain absolute opacity-100 visible group-hover:opacity-0 group-hover:invisible duration-300"
                  />
                  <img
                    src={trash}
                    alt="trash"
                    className="w-5 aspect-square object-contain absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300"
                  />
                </button>
                <span className="text-sm sm:text-base text-black-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div
          className={`${label ? "flex flex-col gap-2" : ""} ${innerWrapper}`}
        >
          <label className={`label ${labelClass}`} htmlFor="">
            {label}
          </label>
          <div className="relative w-full">
            <input
              type={type}
              ref={listRef}
              className={`input relative ${className} ${icon ? "pl-10" : ""}`}
              {...rest}
            />

            {icon && (
              <div className="w-5 h-5 flex items-center justify-center rounded-full overflow-hidden absolute top-1/2 -translate-y-1/2 left-4 z-50">
                <img
                  src={icon}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
        <button
          type="button"
          className="btn_black px-5 py-2 rounded"
          onClick={handleAddList}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ListInput;
