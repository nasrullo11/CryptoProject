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
import {useSelector} from "react-redux";
import React from "react";
  
  const RechartsExample = () => {

    const [ data, setData ] = useState([])
    const { currencyDetail, loading } = useSelector((state) => state.currencyDetail)

    useEffect(() => {
      axios.get(`https://api.coingecko.com/api/v3/coins/${currencyDetail?.id}/market_chart?vs_currency=usd&days=1`).then(res => {
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
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!currencyDetail) return null

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