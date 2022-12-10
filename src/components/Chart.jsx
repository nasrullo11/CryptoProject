import moment from "moment/moment";
import { useEffect } from "react";
import { useState } from "react";
import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
import axios from "./axios";
  
  // const data = [
  //   { name: "2:00", react: 32, cost: 37, vue: 60 },
  //   { name: "", react: 90, cost: 11, vue: 27 },
  //   { name: "4:00", react: 20, cost: 22, vue: 54 },
  //   { name: "", react: 10, cost: 50, vue: 27 },
  //   { name: "6:00", react: 51, cost: 31, vue: 54 },
  //   { name: "", react: 60, cost: 17, vue: 28 },
  //   { name: "8:00", react: 60, cost: 60, vue: 28 },
  //   { name: "", react: 60, cost: 17, vue: 28 },
  //   { name: "10:00", react: 90, cost: 51, vue: 27 },
  //   { name: "", react: 60, cost: 80, vue: 28 },
  //   { name: "12:00", react: 90, cost: 71, vue: 27 },
  //   { name: "", react: 60, cost: 17, vue: 28 },
  //   { name: "14:00", react: 90, cost: 91, vue: 27 },
  //   { name: "", react: 60, cost: 17, vue: 28 },
  //   { name: "16:00", react: 90, cost: 61, vue: 27 },
  //   { name: "", react: 60, cost: 17, vue: 28 },
  //   { name: "18:00", react: 90, cost: 31, vue: 27 },
  //   { name: "20:00", react: 90, cost: 81, vue: 27 },
  //   { name: "", react: 60, cost: 17, vue: 28 },
  // ];
  
  const RechartsExample = () => {

    const [ data, setData ] = useState([])

    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1').then(res => {
        for (let i of res.data.prices) {
          setData(data => [
            ...data,
            {
              name: moment.unix(i[0]).format('HH:mm'),
              cost:parseFloat(i[1])
            }
          ])
        }
      })
    }, [])

    const dataMax = Math.ceil(Math.max(...data.map((i) => i.cost)));
    const dataMin = Math.floor(Math.min(...data.map((i) => i.cost)));

    return (
      <LineChart width={1200} height={600} data={data}>
        <Line
          type="monotone"
          dataKey="cost"
          stroke="white"
          strokeWidth={1}
          r={1}
        />
        <CartesianGrid stroke="white" strokeDasharray="10 10"/>
        <XAxis dataKey="name" textAnchor=""/>
        <YAxis type="number" domain={[dataMin, dataMax]}/>
        <Tooltip active/>
      </LineChart>
    );
  };
  
  export default RechartsExample;