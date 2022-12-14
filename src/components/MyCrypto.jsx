import "../css/bloc10.css"
import "../css/bloc1.css"
import { useState } from "react"
import { useEffect } from "react"
import { currencyFormat } from "../utils"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {cryptoListAction} from "./actions/cryptoListAction";
import {userCryptoAction} from "./actions/userCryptoAction";

const MyCrypto = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { response } = useSelector((state) => state.auth)
    const { userCrypto, loading } = useSelector((state) => state.userCrypto)

    useEffect(() => {
        dispatch(userCryptoAction(response?.access))
    }, [response])

    if (loading) return <div>Loading...</div>

    return (
        <div>
            <div className="bloc10">
                <div className="sm-bloc10_1">
                    <h1>My CryptoCurrencies</h1>
                    <table>
                        <tr>
                            <td>#</td>
                            <td>Coin</td>
                            <td>Quantity</td>
                        </tr>
                        {
                            userCrypto?.map(cryptos => {
                                return(
                                    <tr key={cryptos.id}>
                                        <td>
                                            {cryptos.id}
                                        </td>
                                        <td>
                                            <div className='crypto-name'>
                                                {cryptos.crypto_name}
                                            </div>
                                        </td>
                                        <td>{cryptos.crypto_quantity}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyCrypto