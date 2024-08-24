import React from "react";
import NoData from "../components/shared/NoData";
import SomethingWrong from "../components/shared/SomethingWrong";

export function TableSkeleton({ repeat = 8, styles = "" }) {
  const data = ["", "", "", "", "", "", "", "", ""];
  const rows = Array(repeat).fill(repeat);
  return (
    <tbody className="">
      {data?.map((item, index) => (
        <tr className="text-neutral-600" key={index}>
          {rows?.map((item, index) => (
            <td className={`h-12  ${styles}`} key={index}>
              <div className="h-8 rounded bg-neutral-200 animate-pulse"></div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export function TableNoData({ colSpan = 10 }) {
  return (
    <tbody>
      <tr className="border-0">
        <td colSpan={colSpan} className="">
          <NoData></NoData>
        </td>
      </tr>
    </tbody>
  );
}

export function TableDataError({ colSpan = 10 }) {
  return (
    <tbody>
      <tr className="border-0">
        <td colSpan={colSpan} className="">
          <div className="py-10">
            <SomethingWrong></SomethingWrong>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
