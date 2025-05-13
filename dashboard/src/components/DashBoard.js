import React from "react";
import { Route, Routes } from "react-router-dom";

import Summary from "./Summary";
import Orders from "./Orders";
import App from "./App";
import Funds from "./Funds";
import Holdings from "./Holdings";
import WatchList from "./WatchList";
import Positions from "./Positions";

// import { GeneralContextProvider } from "./GeneralContext";

const  DashBoard = () =>{
  return (
    <div className="dashboard-container">
       <WatchList />

      
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />}/>
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashBoard;
