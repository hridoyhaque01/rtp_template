import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function DatePicker({
  value = null,
  setValue = () => {},
  id = "",
  wrapper = "",
  label = "",
  labelClass = "",
  symble = "*",
  symbleClass = "",
  inputClass = "",
  ...rest
}) {
  const [initValue, setInitValue] = useState(null);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    setInitValue(newValue);
  };

  useEffect(() => {
    setInitValue(value);
  }, []);

  return (
    <div className={`flex flex-col gap-2 sm:gap-4 ${wrapper}`}>
      <label className={`label ${labelClass}`} htmlFor="">
        {label}
      </label>
      <Datepicker
        useRange={false}
        asSingle={true}
        value={initValue}
        popoverDirection="down"
        onChange={handleValueChange}
        toggleClassName="absolute right-0 md:right-2 top-1/2 -translate-y-1/2"
        containerClassName="relative w-full customDatepicker border-none light"
        inputClassName="w-full p-4 bg-transparent outline-none border-none text-sm text-black-900 placeholder:text-black-800 focus:outline-none focus:border-none focus:shadow-none focus:ring-0  focus:ring-transparent bg-white-300 rounded"
        {...rest}
      />
    </div>
  );
}

export default DatePicker;
