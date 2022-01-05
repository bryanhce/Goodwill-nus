import React from "react";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";

const LineGraph = () => {
  const percentageData = [
    { month: "Jan", percentage: 92 },
    { month: "Feb", percentage: 84 },
    { month: "Mar", percentage: 68 },
    { month: "Apr", percentage: 76 },
    { month: "May", percentage: 63 },
    { month: "Jun", percentage: 88 },
    { month: "Jul", percentage: 97 },
    { month: "Aug", percentage: 73 },
    { month: "Sep", percentage: 81 },
    { month: "Oct", percentage: 87 },
    { month: "Nov", percentage: 61 },
    { month: "Dec", percentage: 70 },
  ];

  return (
    <VictoryChart domainPadding={40}>
      <VictoryAxis label="months" />
      <VictoryAxis
        dependentAxis
        tickFormat={(y) => `${y}%`}
        label="percentage"
        style={{ axisLabel: { padding: 40 } }}
        tickValues={[0, 20, 40, 60, 80, 100]}
      />
      <VictoryBar data={percentageData} x="month" y="percentage"></VictoryBar>
      {/* the x and y need to correspond to the data */}
    </VictoryChart>
  );
};

export default LineGraph;
