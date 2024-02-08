import { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from "recharts";

const EventsGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#7D3C98"];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return percent ? (
      <text
        x={x}
        y={y}
        fill="#FFFFFF"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {(percent * 100).toFixed(0)}%
      </text>
    ) : null;
  };

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      ).length;
      return { name: genre, value: filteredEvents };
    });
    return data;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          dataKey="value"
          fill="#FFFFFF"
          label={renderCustomizedLabel}
          labelLine={false}
          outerRadius={150}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" align="center" layout="horizontal" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventsGenresChart;
