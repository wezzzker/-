import React, { useEffect, useState } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { useQuery } from "react-query";
import { gamesColums } from "/src/services/gamesServices";
import Pagination from "../Pagination";
import Tools from "../Tools";
import { ColumnApi } from "ag-grid-enterprise";

//////////////////////
const GamesTable = () => {
  //////////
  const [currenPage, setCurrentPage] = useState(1);
  const [gridApi, setGridApi] = useState(null);
  async function fetchGames(page) {
    const res = axios.get(
      `http://localhost:5000/api/games?page=${currenPage}&limit=5`
    );
    const data = (await res).data;
    return data;
  }
  const { data, isError, isLoading } = useQuery(
    ["games", currenPage],
    fetchGames,
    {
      keepPreviousData: true,
    }
  );
  const datasource = {
    async getRows(params) {
      params.successCallback(data.result);
    },
  };
  // const def = { flex: 2 };

  const onGridReday = (params) => {
    setGridApi(params);
    params.columnApi.autoSizeAllColumns();
    params.api.setServerSideDatasource(datasource);
  };
  if (isError) return <p></p>;
  if (isLoading) return <p></p>;
  return (
    <div>
      <div className="flex gap-20 items-center mb-[15px]">
        <h2 className="text-lg font-semibold ">Games</h2>
        <Tools />
      </div>
      <div className="ag-theme-alpine w-[650px]" style={{ height: "261px" }}>
        <AgGridReact
          columnDefs={gamesColums}
          onGridReady={onGridReday}
          rowData={data.result}
          // defaultColDef={def}
        />
        <Pagination
          currentPage={currenPage}
          count={data.count}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default GamesTable;
