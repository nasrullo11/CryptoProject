import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  
  const data = [
    { name: "2:00", react: 32, cost: 37, vue: 60 },
    { name: "", react: 90, cost: 11, vue: 27 },
    { name: "4:00", react: 20, cost: 22, vue: 54 },
    { name: "", react: 10, cost: 50, vue: 27 },
    { name: "6:00", react: 51, cost: 31, vue: 54 },
    { name: "", react: 60, cost: 17, vue: 28 },
    { name: "8:00", react: 60, cost: 60, vue: 28 },
    { name: "", react: 60, cost: 17, vue: 28 },
    { name: "10:00", react: 90, cost: 51, vue: 27 },
    { name: "", react: 60, cost: 80, vue: 28 },
    { name: "12:00", react: 90, cost: 71, vue: 27 },
    { name: "", react: 60, cost: 17, vue: 28 },
    { name: "14:00", react: 90, cost: 91, vue: 27 },
    { name: "", react: 60, cost: 17, vue: 28 },
    { name: "16:00", react: 90, cost: 61, vue: 27 },
    { name: "", react: 60, cost: 17, vue: 28 },
    { name: "18:00", react: 90, cost: 31, vue: 27 },
    { name: "20:00", react: 90, cost: 81, vue: 27 },
    { name: "", react: 60, cost: 17, vue: 28 },
  ];
  
  const RechartsExample = () => {
    return (
      <LineChart width={800} height={400} data={data}>
        <Line
          type="monotone"
          dataKey="cost"
          stroke="white"
          strokeWidth={3}
        />
        <CartesianGrid stroke="white" strokeDasharray="5 5"/>
        <XAxis dataKey="name" textAnchor=""/>
        <YAxis/>
        <Tooltip active/>
      </LineChart>
    );
  };
  
  export default RechartsExample;