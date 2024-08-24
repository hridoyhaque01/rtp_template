import React from "react";
import { useNavigate } from "react-router-dom";
import useGetPagination from "../hooks/useGetPagination";
import { routeLinks } from "../lib/enums";
import { TableDataError, TableNoData, TableSkeleton } from "./TableHelpers";

function CvTable({
  data = [],
  isLoading = false,
  isError = false,
  className = "",
}) {
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate(routeLinks.applicants.path, {
      state: {
        payload: item,
      },
    });
  };
  const { currentRows, pagination } = useGetPagination(data);
  return (
    <div
      className={`flex flex-col gap-4 sm:gap-6 md:gap-8 h-full ${className}`}
    >
      <div className="flex-1 overflow-auto">
        <table className="min-w-full relative ">
          <thead className="sticky top-0">
            <tr className="bg-red-100 text-left divide-x text-base sm:text-lg divide-white-400">
              <th className="p-4 font-bold text-black-900">Jobs Title</th>
              <th className="p-4 font-bold text-black-900">Category</th>
              <th className="p-4 font-bold text-black-900">Amount</th>
              <th className="p-4 font-bold text-black-900">Publish Date</th>
              <th className="p-4 text-center font-bold text-black-900">
                Action
              </th>
            </tr>
          </thead>
          {isLoading ? (
            <TableSkeleton repeat={5} />
          ) : isError ? (
            <TableDataError colSpan={5} />
          ) : data?.length === 0 ? (
            <TableNoData colSpan={5} />
          ) : (
            <tbody className="divide-y divide-neutral-200  text-black-900 text-sm sm:text-base md:text-lg">
              {currentRows?.map((item, index) => (
                <tr className="" key={index}>
                  <td className="p-4 truncate">{item?.name}</td>
                  <td className="p-4 truncate">{item?.category}</td>
                  <td className="p-4 truncate">34</td>
                  <td className="p-4 truncate">
                    {new Date(item?.timestamp * 1000)?.toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleNavigate(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8.29492 16.59L12.8749 12L8.29492 7.41L9.70492 6L15.7049 12L9.70492 18L8.29492 16.59Z"
                            fill="#212121"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div>{pagination}</div>
    </div>
  );
}

export default CvTable;
