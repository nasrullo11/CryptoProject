import React from 'react'
import "../css/bloc2.css"
import icon1 from "../img/icon1.svg"
import icon2 from "../img/icon2.svg"
import { Outlet, Link } from "react-router-dom";
const Bloc2 = () => {
  return (
    <div>
        <div className="bloc2">
          <div className="sm-bloc2_1">
            <div className="text">
              <h1>Use Blockchain</h1>
              <p>to find the ones who get it right. We trust our future with experts everyday</p>
                <Link to="/bloc">
                  <button>
                      read whitepaper
                  </button>
                </Link>
            </div>
            <div className="card">
              <div className="sm-card">
                <img src={icon1} alt="" width="110"/>
                <h1>Reputation, Decentralized</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus animi deserunt dignissimos dolorum iste labore laborum non numquam.</p>
              </div>
              <div className="sm-card">
                <img src={icon2} alt="" width="110"/>
                <h1 className='h1'>Start Using Real Expertise</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus animi deserunt dignissimos dolorum iste labore laborum non numquam.</p>
              </div>
            </div>
          </div>
        </div>

        <Outlet />
    </div>
  )
}

export default Bloc2