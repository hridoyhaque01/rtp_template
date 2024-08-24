import React from "react";
import ConfirmationModal from "../components/modals/ConfirmationModal";
import useGetPagination from "../hooks/useGetPagination";
import { facebook, instagram, linkedin, x } from "../lib/getAssets";
import { EditSvg, EyeSvg, TrashSvg } from "../lib/getSvg";
import { TableDataError, TableNoData, TableSkeleton } from "./TableHelpers";

function TeamTable({
  data = [],
  isLoading = false,
  isError = false,
  className = "",
}) {
  const { currentRows, pagination } = useGetPagination(data);
  return (
    <div
      className={`flex flex-col gap-4 sm:gap-6 md:gap-8 h-full ${className}`}
    >
      <div className="flex-1 overflow-auto">
        <table className="min-w-full relative ">
          <thead className="sticky top-0">
            <tr className="bg-red-100 text-left divide-x text-base sm:text-lg divide-white-400">
              <th className="p-4 font-bold text-black-900">Image</th>
              <th className="p-4 font-bold text-black-900">Name</th>
              <th className="p-4 font-bold text-black-900">Designation</th>
              <th className="p-4 font-bold text-black-900">Social Link</th>
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
                  <td className="p-4">
                    <div className="w-12 aspect-square">
                      <img
                        src={item?.image}
                        alt="team"
                        className="w-full h-full object-contain rounded"
                      />
                    </div>
                  </td>
                  <td className="p-4 truncate">{item?.name}</td>
                  <td className="p-4 truncate">{item?.designation}</td>
                  <td className="p-4 truncate">
                    <div className="flex items-center gap-4">
                      <a
                        href={item?.facebookUrl}
                        target="_blank"
                        rel="noreferrer"
                        className=""
                      >
                        <img
                          src={facebook}
                          alt=""
                          className="w-5 aspect-square object-contain"
                        />
                      </a>
                      <a
                        href={item?.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className=""
                      >
                        <img
                          src={instagram}
                          alt=""
                          className="w-5 aspect-square object-contain"
                        />
                      </a>
                      <a
                        href={item?.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className=""
                      >
                        <img
                          src={linkedin}
                          alt=""
                          className="w-5 aspect-square object-contain"
                        />
                      </a>
                      <a
                        href={item?.twitterUrl}
                        target="_blank"
                        rel="noreferrer"
                        className=""
                      >
                        <img
                          src={x}
                          alt=""
                          className="w-5 aspect-square object-contain"
                        />
                      </a>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button type="button">
                        <EyeSvg />
                      </button>
                      <button type="button">
                        <EditSvg />
                      </button>
                      <button
                        type="button"
                        data-hs-overlay="#confirmationModal"
                      >
                        <TrashSvg />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div>
        {pagination}
        <ConfirmationModal />
      </div>
    </div>
  );
}

export default TeamTable;
