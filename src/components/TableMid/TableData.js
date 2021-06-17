import React from "react";
import {tableData} from '../data/Data'
import Table from './Table'
import "./tableData.css";
const TableData = () => {
  return (
    <div className="main">
      <div id="table-container">
        <table id="table">
          <tr className="table-data-row table-head">
            <td>
              <span>#</span>
            </td>
            <td>
              <span>Platform</span>
            </td>
            <td>
              <span>Last Traded Price</span>
            </td>
            <td>
              <span>Buy / Sell Price</span>
            </td>
            <td>
              <span>Difference</span>
            </td>
            <td>
              <span>Savings</span>
            </td>
          </tr>

          {tableData.map((data) => {
            return <Table tableData={data} key={data.id}/>;
          })}
        </table>
      </div>
    </div>
  );
};
export default TableData;
