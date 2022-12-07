import React from 'react'
import "../css/bloc5.css"
import art3 from "../img/art3.png"

const Bloc5 = () => {
  return (
    <div>
        <div className="bloc5">
            <div className="sm-bloc5_1">
                <div className="text">
                    <h1>
                        Why you will choose Kryptix as your trading platform?
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga incidunt iste laudantium rem voluptatem. Ad animi deserunt dolorem est, excepturi illo, ipsa iste porro quasi, sit tempora vitae voluptate. consectetur adipisicing elit. Cupiditate fuga incidunt iste laudantium rem voluptatem. Ad animi deserunt dolorem est.
                    </p>
                    <button>GET NOTIFIED</button>
                </div>
                <img src={art3} alt="" width="415px" height="394px"/>
            </div>
        </div>
    </div>
  )
}

export default Bloc5