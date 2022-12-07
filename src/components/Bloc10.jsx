import "../css/bloc10.css"
import "../css/bloc1.css"
import { useState } from "react"
import { useEffect } from "react"
import { axios2 } from './axios'
import { currencyFormat } from "../utils"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {cryptoListAction} from "./actions/cryptoListAction";

const Bloc10 = () => {

  const [coins, setCoins] = useState([])
  const dispatch = useDispatch()
    const navigate = useNavigate()
  const cryptoList = useSelector((state) => state.cryptoList.crypto)

  useEffect(() => {
    dispatch(cryptoListAction())
  }, [])

  const handleNavigate = (id) => {
      navigate(`/coin/${id}`, {
          state: {
              crypto_id: id,
          }
      })
  }

  return (
    <div>
       <div className="bloc10">
          <div className="sm-bloc10_1">
            <h1>Cryptocurrency Prices by Market Cap</h1>
            <table>
              <tr>
                <td>#</td>
                <td>Coin</td>
                <td>Price</td>
                <td>24h</td>
                <td>atl</td>
                <td>Mkt &nbsp; Cap  </td>
                <td>Total Volume</td>
              </tr>
                {
                    cryptoList?.map(cryptos => {
                      return(
                        <tr key={cryptos.id}>
                          <td>
                            {cryptos.market_cap_rank}
                            <img src={cryptos.image} alt="" className="coin-img"/>
                          </td>
                          <td>
                            <div onClick={() => handleNavigate(cryptos.id)}>
                              {cryptos.name} 
                              ({cryptos.symbol})
                            </div>
                            </td>
                          <td>{currencyFormat(cryptos.current_price)}</td>
                          <td>
                            <span>
                              {cryptos.price_change_24h}
                            </span>
                          </td>
                          <td>
                            {cryptos.atl}
                          </td>
                          <td>
                            {cryptos.market_cap}
                          </td>
                          <td>
                            {cryptos.total_volume}
                          </td>
                        </tr>
                      )
                    })
                }
            </table>
          </div>
        </div>
        <div className="ftext">
        <div className="text">
              <div className="sm-text">
                <h1>What is Crypto Market Cap?</h1>
                <p>Crypto market cap is the total value of all the coins of a particular cryptocurrency that have been mined or are in circulation. Market capitalization is used to determine the ranking of cryptocurrencies. The higher the market cap of a particular crypto coin, the higher its ranking and share of the market. Crypto market cap is calculated by multiplying the total number of coins in circulation by its current price. For instance, to calculate the market cap of Ethereum, all you need to do is multiply the total number of Ethereum in circulation by the current price of one Ethereum and you will get its market cap.</p>
              </div>
              <div className="sm-text">
                <h1>How to compare Cryptocurrencies Market Cap?</h1>
                <p>As a financial metric, market cap allows you to compare the total circulating value of one cryptocurrency with another. Large cap cryptocurrencies such as Bitcoin and Ethereum have a market cap of over $10 billion. They typically consist of protocols that have demonstrated track records, and have a vibrant ecosystem of developers maintaining and enhancing the protocol, as well as building new projects on top of them. While market cap is a simple and intuitive comparison metric, it is not a perfect point of comparison. Some cryptocurrency projects may appear to have inflated market cap through price swings and the tokenomics of their supply. As such, it is best to use this metric as a reference alongside other metrics such as trading volume, liquidity, fully diluted valuation, and fundamentals during your research process.</p>
                </div>
              <div className="sm-text">
                <h1>How does CoinGecko Calculate Cryptocurrency Prices?</h1>
                <p>The price is calculated using a global volume-weighted average price formula which is based on the pairings available on different exchanges of a particular crypto asset. For examples and more detailed information on how we track cryptocurrency prices and other metrics, see our methodology page here.</p>
              </div>
              <div className="sm-text">
                <h1>Why are Cryptocurrency Prices Different on Exchanges?</h1>
                <p>You may notice that cryptocurrencies listed on different exchanges have different prices. The reasons for this are complex, but simply put cryptocurrencies are traded on different exchanges and across different markets with varying economic conditions, liquidity, trading pairs, and offerings (e.g. derivatives / leverage) which all influence price in their own way.</p>
              </div>
              <div className="sm-text">
                <h1>Where to Check Cryptocurrency Prices?</h1>
                <p>You can track over 10,000 crypto prices on CoinGecko across more than 50 currencies. Popular cryptocurrency pairs include BTC to USD, ETH to USD, and SLP to PHP. You can also track metrics such as 24 hour trading volume, market capitalization, price chart, historical performance chart, the circulating supply, and more. Sign up to use CoinGecko’s crypto portfolio to track the performance of your portfolio. You may also check out GeckoTerminal (currently in beta), our comprehensive multichain on-chain charting tool featuring live charts, current trades, market sentiment and more as it happens in real time! CoinGecko also has a mobile app that enables you to track cryptocurrencies on Android and IOS.</p>
              </div>
              <div className="sm-text">
                <h1>What is 24h Volume in the Table Above?</h1>
                <p>The 24h trading volume refers to the amount a cryptocurrency has been bought and sold on all exchanges within the last 24 hours on the spot market. For instance, if the 24h volume for Ethereum is $15 billion, it means that $15 billion worth of Ether had changed hands across all exchanges in the last 24 hours.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Bloc10