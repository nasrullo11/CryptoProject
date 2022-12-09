import React, {useEffect} from 'react'
import "../css/bloc10.css"
import "../css/coindetails.css"
import { Icon } from '@iconify/react';
import RechartsExample from '../components/Chart';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {currencyDetailAction} from "../components/actions/currencyDetailAction";
import { useState } from 'react';

const CryptoDetail = () => {
    const [by , bys] = useState(true)
    const byc = () => {
      bys(cyt => !cyt)
    }
    const dispatch = useDispatch()
    const location = useLocation()
    const { crypto_id } = location.state
    const { currencyDetail, loading } = useSelector((state) => state.currencyDetail)

    useEffect(() => {
        dispatch(currencyDetailAction(crypto_id))
    }, [crypto_id])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!currencyDetail) return null

  return (
    <div>
       <div className="bloc10">
          <div className="sm-bloc10_2">
            <div className="logo">
                <img height="28" width="28" src={currencyDetail?.image.small} alt="" />
                <span> &nbsp; {currencyDetail?.name} ({currencyDetail?.symbol.toUpperCase()}) <span>{currencyDetail?.market_data.market_cap_change_percentage_24h_in_currency.usd}%</span></span>
            </div>
            <span className='by'>${currencyDetail?.market_data.current_price.usd}<button className="btn01" onClick={byc}>buy/sell</button></span>
            <div className="icon">
                <span className="span">
                    <Icon icon="mdi:share-outline" color="white" width="20" />
                </span>
                <span className="span">
                    <Icon icon="fluent:alert-32-regular" color="white" width="20" />
                </span>
                <span className="span">
                    <Icon icon="ic:baseline-star-border" color="white" width="20" />
                </span>
                <span>On 1,182,009 watchlists</span>
            </div>
            <div className="lg">
                <div className="sm-lg">

                </div>
                <div className="sm-lg1">
                    <span>$16,880.81</span>
                    <span>24H Range</span>
                    <span>$17,111.05</span>
                </div>
            </div>
            <div className="card1">
                <div className="sm-card1">
                    <span>Market Cap </span>
                    <span>$327,036,175,607 </span>
                </div>
                <div className="sm-card1">
                    <span>Market Cap </span>
                    <span>$327,036,175,607 </span>
                </div>
                <div className="sm-card1">
                    <span>Market Cap </span>
                    <span>$327,036,175,607 </span>
                </div>
                <div className="sm-card1">
                    <span>Market Cap </span>
                    <span>$327,036,175,607 </span>
                </div>
                <div className="sm-card1">
                    <span>Market Cap </span>
                    <span>$327,036,175,607 </span>
                </div>
                <div className="sm-card1">
                    <span>Market Cap </span>
                    <span>$327,036,175,607 </span>
                </div>
            </div>
          </div>
        </div>
        <div className="chart">
          <div className="sm-chart">
            <h1>Bitcoin Price Chart (BTC/USD)</h1>
            <p>Last updated 04:56PM UTC. Currency in USD.</p>
            <div className="date">
              <div className="sm-date">
                  <span>24h</span>
                  <span>7d</span>
                  <span>14d</span>
                  <span>30d</span>
                  <span>90d</span>
                  <span>180d</span>
                  <span>1y</span>
                  <span>Max</span>
              </div>
            </div>
            <div className="sms-chart">
              <RechartsExample />
            </div>
            <div className="date2">
                <div className="sm-date2">
                  <span>1h</span>
                  <span>24h</span>
                  <span>7d</span>
                  <span>14d</span>
                  <span>30d</span>
                  <span>1y</span>
                  <span>0.1</span>
                  <span>0.1</span>
                  <span>0.1</span>
                  <span>0.1</span>
                  <span>0.1</span>
                  <span>0.1</span>
                </div>
                <div className="sm-date3">
                </div>
            </div>
          </div>
        </div>
        <div className="ftext">
            <div className="text">
              <div className="sm-text">
                <h1>BTC Price Today</h1>
                <p>. BTC price is up 0.1% in the last 24 hours. It has a circulating supply of 19 Million BTC coins and a total supply of 21 Million. If you are looking to buy or sell Bitcoin, </p>
              </div>
              <div className="sm-text">
                <h1>What is Bitcoin?</h1>
                <p>As a financial metric, market cap allows you to compare the total circulating value of one cryptocurrency with another. Large cap cryptocurrencies such as Bitcoin and Ethereum have a market cap of over $10 billion. They typically consist of protocols that have demonstrated track records, and have a vibrant ecosystem of developers maintaining and enhancing the protocol, as well as building new projects on top of them. While market cap is a simple and intuitive comparison metric, it is not a perfect point of comparison. Some cryptocurrency projects may appear to have inflated market cap through price swings and the tokenomics of their supply. As such, it is best to use this metric as a reference alongside other metrics such as trading volume, liquidity, fully diluted valuation, and fundamentals during your research process.</p>
              </div>
            </div>
        </div>
      <div className={by ? "modas flm" : "modas"} onClick={byc}>
        <div className="sm-modas" onClick={e => e.stopPropagation()}>
          <h1><img height="68" width="68" src={currencyDetail?.image.small} alt="" />
          <span> &nbsp; {currencyDetail?.name} ({currencyDetail?.symbol.toUpperCase()}) </span></h1>
          <p>1 {currencyDetail?.name} ({currencyDetail?.symbol.toUpperCase()}) cost: ${currencyDetail?.market_data.current_price.usd}</p>
          <div className="pic">
            <div className="sm-pic">
              <h1>Buy</h1>
              <input type="text" />
              <input type="text"  />
              <button className="btn01" onClick={byc}>Buy</button>
            </div>
            <div className="sm-pic">
              <h1>Sell</h1>
              <input type="text" />
              <input type="text" />
              <button className="btn01" onClick={byc}>Sell</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoDetail