import React, { useState } from "react";
import TableAccordion from "./components/Accordion";
import "./App.css";
import fetchData from "./assets/data";

function App() {
  const tableData = fetchData();

  return (
    <div className="App">
      <div className="table-container">
        {tableData.map((data) => (
          <TableAccordion key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
