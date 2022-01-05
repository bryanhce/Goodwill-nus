import React from "react";
import "./Dashboard.css";
import LineGraph from "../LineGraph/LineGraph";
import NumberBox from "../NumberBox/NumberBox";

const Dashboard = () => {
  var totalBullets = 123;
  var totalStrikedBullets = 97;
  var percentageStriked = ((totalStrikedBullets / totalBullets) * 100).toFixed(
    1
  );

  return (
    <div>
      <div className="dashboard-boxes">
        <NumberBox
          className="total"
          header={"Total No. of Task Bullets"}
          number={totalBullets}
        />
        <NumberBox
          className="total"
          header={"Total No. of Tasks Striked"}
          number={totalStrikedBullets}
        />
        <NumberBox
          className="total"
          header={"Percentage of Tasks Striked"}
          number={percentageStriked + "%"}
        />
      </div>
      <div className="dashboard-charts">
        <LineGraph />
      </div>
    </div>
  );
};

export default Dashboard;
