import React, { useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { useQuery } from "react-query";
import axios from "axios";
import {
  // checkPublishers,
  publisherColums,
  publishersDatasource,
  checkPublishers,
} from "../../services/publishersServices";

///////////////////////////////
const PublishersTable = () => {
  async function getPubl() {
    const res = axios.get(`http://localhost:5000/api/publishers`);
    return (await res).data;
  }
  const { data, isLoading, isError } = useQuery("publishers", getPubl);
  const [gridApi, setGridApi] = useState(null);

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Err</p>;

  const datasource = {
    async getRows(params) {
      params.successCallback(data.result);
    },
  };
  const onGridReady = (params) => {
    setGridApi(params);
    params.api.setDatasource(datasource);
  };

  return (
    <div>
      <div className="mb-[15px] h-[45px] flex  items-center">
        <h2 className="text-lg font-semibold">Publishers</h2>
      </div>
      <div className="ag-theme-alpine h-[300px] w-[625px]">
        <AgGridReact
          columnDefs={publisherColums}
          onGridReady={onGridReady}
          rowModelType="infinite"
          infiniteInitialRowCount={5}
          cacheBlockSize={data.count[0].count}
        />
      </div>
    </div>
  );
};

export default PublishersTable;
