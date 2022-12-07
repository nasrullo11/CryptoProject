import React from 'react'
import "../css/bloc7.css"
import team1 from "../img/team1.jpg"
import team2 from "../img/team2.jpg"
import team3 from "../img/team3.jpg"
import { Icon } from '@iconify/react';

const Bloc7 = () => {
  return (
    <div id='faq'>
        <div className="bloc7">
            <div className="sm-bloc7_1">
                <div className="text">
                    <h1>We Have a Best Team</h1>
                    <p>to find the ones who get it right. We trust our future with experts everyday</p>
                </div>
                <div className="card">
                    <div className="sm-card">
                        <img src={team1} alt="" width="350" height="237.5" />
                        <h1>Rose Tellor</h1>
                        <p>Vice Chairman</p>
                    </div>
                    <div className="sm-card">
                        <img src={team2} alt="" width="350" height="237.5" />
                        <h1>Jonathan Smith</h1>
                        <p>Chief Operating Officer</p>
                    </div>
                    <div className="sm-card">
                        <img src={team3} alt="" width="350" height="237.5" />
                        <h1>Josseph Butlar</h1>
                        <p>Head of Marketing</p>
                    </div>
                </div>
            </div>
            <div className="sm-bloc7_2">
                <div className="text">
                    <h1>Frequently Asked Question</h1>
                    <p>
                        When looking at its layout. The point of using Lorem Ipsum <br />
                        is that it has a more-or-less normal distribution
                    </p>
                </div>
                <div className="card">
                    <div className="sm-card sm-card1">
                        <div className="ms-card"><span>What is ICO Trade?</span><Icon icon="material-symbols:arrow-forward-ios-rounded" color="white" width="10" height="20" /></div>
                        <div className="ms-card"><span>What are token holder benifits?</span><Icon icon="material-symbols:arrow-forward-ios-rounded" color="white" width="10" height="20" /></div>
                        <div className="ms-card"><span>What is Leverage?</span><Icon icon="material-symbols:arrow-forward-ios-rounded" color="white" width="10" height="20" /></div>
                        <div className="ms-card"><span>What is cryptocurrency?</span><Icon icon="material-symbols:arrow-forward-ios-rounded" color="white" width="10" height="20" /></div>
                    </div>
                    <div className="sm-card">
                        <div className="ms-card"><span>How can i Contribute to the trade?</span><Icon icon="material-symbols:arrow-forward-ios-rounded" color="white" width="10" height="20" /></div>
                        <div className="ms-card"><span>How can i deposite currency?</span><Icon icon="material-symbols:arrow-forward-ios-rounded" color="white" width="10" height="20" /></div>
                        <div className="ms-card"><span>How can I withdraw currency?</span><Icon icon="material-symbols:arrow-forward-ios-rounded" color="white" width="10" height="20" /></div>
                        <div className="ms-card"><span>Is there any learning curve for begginers? </span><Icon icon="material-symbols:arrow-forward-ios-rounded" color="white" width="10" height="20" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bloc7