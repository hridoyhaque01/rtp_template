import { useEffect, useState } from "react";
import Pagination from "../components/shared/Pagination";

function useGetPagination(data) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data?.length / rowsPerPage);

  useEffect(() => {
    if (totalPages < currentPage) {
      setCurrentPage(totalPages);
    } else if (totalPages > currentPage && currentPage == 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const pagination = (
    <Pagination
      currentPage={currentPage || 1}
      setCurrentPage={setCurrentPage || 1}
      totalRows={data?.length || 1}
      rowsPerPage={rowsPerPage || 1}
      setRowsPerPage={setRowsPerPage || 1}
      currentRowsLength={currentRows?.length || 1}
      totalPages={totalPages || 1}
    />
  );

  return {
    currentRows,
    pagination,
  };
}

export default useGetPagination;
