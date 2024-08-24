import React, { useEffect, useState } from "react";

function NumberInput({
  defaultValue = "",
  max = -1,
  classes = "",
  setter = () => {},
  onChange = () => {},
  label = "",
  labelClass = "",
  ...rest
}) {
  const [value, setValue] = useState("");

  function isNumber(value) {
    return /^-?\d+(\.\d+)?$/.test(value);
  }

  const handleInput = (event) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, "");
    const name = event.target.name;
    const amount = Number(inputValue || "0");
    const maxNumber = Number(max);
    if (maxNumber != -1 && amount <= maxNumber) {
      setValue(inputValue);
      setter(inputValue);
      onChange(event, name, inputValue);
    } else if (maxNumber == -1) {
      setValue(inputValue);
      setter(inputValue);
      onChange(event, name, inputValue);
    }
  };

  useEffect(() => {
    if (defaultValue && isNumber(defaultValue)) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="flex flex-col gap-2">
      <label className={`label ${labelClass}`} htmlFor="">
        {label}
      </label>
      <input
        type="text"
        className={`input ${classes}`}
        value={value}
        onChange={handleInput}
        {...rest}
      />
    </div>
  );
}

export default NumberInput;
