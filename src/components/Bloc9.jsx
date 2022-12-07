import React from 'react'
import "../css/bloc9.css"
import f1 from "../img/fc1.png"
import f2 from "../img/fc2.png"
import f3 from "../img/fc3.png"
import f4 from "../img/fc4.png"
import { Icon } from '@iconify/react';

const Bloc9 = () => {
  return (
    <div>
        <div className="bloc9">
          <div className="sm-bloc9_1">
              <div className="text">
                <h1>
                  KRYPTIX
                </h1>
                <p>Subscribe to our newsletter to receive news, updates, free stuff and new releases by email. We don't do spam.</p>
              </div>
              <div className="text">
                <h3>RESOURCES</h3>
                <div className="sm-text">
                  <span>FREE SCHEDULES</span>
                  <span>TERMS & PRIVACY</span>
                  <span>API REFERENCE</span>
                  <span>HELP DESK</span>
                </div>
              </div>
              <div className="text">
                <h3>ABOUT & CONTACTS</h3>
                <div className="sm-text">
                  <span>OUR VISION</span>
                  <span>FEATURES</span>
                  <span>ABOUT US</span>
                  <span>CONTACT US</span>
                </div>
              </div>
          </div>
          <div className="sm-bloc9_2">
           <div className="sms-bloc2">
           <div className="ms-bloc2_1">
              <img src={f1} alt="" />
              <img src={f2} alt="" />
              <img src={f3} alt="" />
              <img src={f4} alt="" />
            </div>
            <div className="ms-bloc2_2">
              <Icon icon="gg:facebook" color="white" width="15" height="25" />
              <Icon icon="mdi:twitter" color="white" width="15" height="25" />
              <Icon icon="fa6-brands:btc" color="white" width="15" height="25" />
              <Icon icon="ps:youtube" color="white" width="15" height="25" />
              <Icon icon="bxl:linkedin" color="white" width="15" height="25" />
              <Icon icon="ant-design:google-plus-outlined" color="white" width="15" height="25" />
              <span>Language: English  <Icon icon="material-symbols:arrow-drop-down" color="white" width="9" height="15" /></span>
            </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Bloc9