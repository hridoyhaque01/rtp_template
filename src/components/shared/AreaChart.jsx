import React, { useState } from "react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AreaChart = ({ title = "", data = [], setter = () => {} }) => {
  const [activeData, setActiveData] = useState("Today");
  const handleActiveData = (data) => {
    setActiveData(data);
    setter(data);
  };
  return (
    <div className="bg-white p-4 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm sm:text-base font-semibold text-black-900">
          {title}
        </h4>
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm md:text-base text-black-500">
            Showing :
          </span>
          <div className="hs-dropdown relative inline-flex [--placement:bottom-right] ">
            <button
              id="hs-dropdown-left-but-right-on-lg"
              type="button"
              className="hs-dropdown-toggle text-xs sm:text-sm md:text-base font-medium text-black-900 flex items-center min-w-[120px] justify-between"
            >
              <span>{activeData}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                className="hs-dropdown-open:rotate-180 duration-300"
              >
                <path
                  d="M18.9785 10.1973L17.5634 8.78223L12.9569 13.3787L8.35035 8.78223L6.93527 10.1973L12.9569 16.2189L18.9785 10.1973Z"
                  fill="#212121"
                />
              </svg>
            </button>

            <ul
              className="hs-dropdown-menu  transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 top-0 end-0 right-0 w-48 bg-white shadow-md p-3 mt-2 divide-y divide-white-300 rounded"
              aria-labelledby="hs-dropdown-left-but-right-on-lg"
            >
              <li
                onClick={() => handleActiveData("Today")}
                className="py-1 hover:bg-white-300 rounded pl-2 cursor-pointer"
              >
                Today
              </li>
              <li
                onClick={() => handleActiveData("Last 7 days")}
                className="py-1 hover:bg-white-300 rounded pl-2 cursor-pointer"
              >
                Last 7 days
              </li>
              <li
                onClick={() => handleActiveData("Last Weak")}
                className="py-1 hover:bg-white-300 rounded pl-2 cursor-pointer"
              >
                Last Weak
              </li>
              <li
                onClick={() => handleActiveData("Last Month")}
                className="py-1 hover:bg-white-300 rounded pl-2 cursor-pointer"
              >
                Last Month
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-hidden flex items-center justify-center">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={data}
            margin={{
              top: 5,
              right: 5,
              bottom: 5,
              left: 5,
            }}
          >
            <defs>
              <linearGradient
                id="gradientColor"
                x1="260.708"
                y1="-60.3982"
                x2="265.14"
                y2="157.039"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5880CC" />
                <stop offset="1" stopColor="white" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#E8E8E8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              fill="url(#gradientColor)"
              stroke="#5880CC "
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="pv"
              fill="none"
              stroke="#54ADAA"
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChart;
