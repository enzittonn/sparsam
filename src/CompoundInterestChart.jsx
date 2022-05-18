import * as React from "react";
import {
  Label,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function renderTooltip({ payload }) {
  if (!payload[0]) {
    return;
  }
  
  return <span>{`kr${payload[0].value.toFixed(2)}`}</span>;
}

function CompoundInterestChart(props) {
  const data = React.useMemo(
    () => {
      const result = [];
      for (let i = 1; i <= props.data.valueYears; i++) {
        let lastFutureValue = props.data.valueStart + props.data.valueMonth * 12;
        if (result.length > 0) {
          lastFutureValue = result[result.length - 1].value + props.data.valueMonth * 12;
        }
        result.push({
          label: `${i}`,
          value: lastFutureValue * Math.pow(1 + props.data.valueAvkastning / 100, 1)
        });
      }
      return result;
    },
    [props.data.valueStart, props.data.valueYears, props.data.valueAvkastning, props.data.valueMonth]
  );
  return (
    <>
      <h2>Utveckling</h2>
      <div style={{ width: "100%", height: 200 }}>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
          >
            <CartesianGrid horizontal="true" vertical="" stroke="#243240" strokeDasharray="3 3" />
            <XAxis dataKey="label">
              <Label value="År" offset={-3} position="insideBottom" />
            </XAxis>
            <YAxis />
            <Tooltip content={renderTooltip} contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
                     itemStyle={{ color: "#fff" }}
                     cursor={false} />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth="5"
                  dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
                  activeDot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 5, r: 10 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <hr />
    </>
  );
}

export default CompoundInterestChart;