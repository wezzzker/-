import React from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import GamesTable from "../components/Tables/GamesTable";
import PublishersTable from "../components/Tables/PublishersTable";

//

//

const HomePage = () => {
  return (
    <div className="h-[400px] w-full ">
      <div className="w-full flex justify-around">
        <div className="bg-white pb-16 px-3 rounded-lg">
          {" "}
          <GamesTable />
        </div>
        <div className="bg-white pb-16 px-3 rounded-lg">
          {" "}
          <PublishersTable />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
