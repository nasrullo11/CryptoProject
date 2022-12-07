import React from 'react'
import "../css/bloc3.css"
import art1 from "../img/art1.png"
import art2 from "../img/art2.png"

const Bloc3 = () => {
  return (
    <div id='about'>
        <div className="bloc3">
          <div className="sm-bloc3_1">
            <div className="text text2">
                <img src={art1} alt="" />
                <div className="sm-text">
                  <h1>We trust our futures with experts everyday.</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi consequuntur eius minus. Adipisci at dolore eligendi excepturi in ipsa natus porro praesentium recusandae totam. Nemo officiis optio sit!</p>
                </div>
            </div>
            <div className="text">
                <div className="sm-text">
                  <h1 className='h1'>Are you an Forex Trading Expert?</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi consequuntur eius minus. Adipisci at dolore eligendi excepturi in ipsa natus porro praesentium recusandae totam. Nemo officiis optio sit!</p>
                </div>
                <img src={art2} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Bloc3