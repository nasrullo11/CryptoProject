import React from 'react'
import "../css/bloc4.css"
import { Icon } from '@iconify/react';

const Bloc4 = () => {
  return (
    <div>
        <div className="bloc4">
            <div className="sm-bloc4_1">
                <div className="text">
                    <h1>Why Blockchain</h1>
                </div>
                <div className="card">
                    <div className="sm-card">
                        <Icon icon="ri:group-line" color="white" width="58.5" height="48" />
                        <h1>Public</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus animi deserunt dignissimos dolorum.</p>
                    </div>
                    <div className="sm-card">
                        <Icon icon="fluent-mdl2:alarm-clock" color="white" width="58.5" height="48" />
                        <h1>Trustless</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus animi deserunt dignissimos dolorum.</p>
                    </div>
                    <div className="sm-card">
                        <Icon icon="bi:bricks" color="white" width="58.5" height="48" />
                        <h1>Permanent</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus animi deserunt dignissimos dolorum.</p>
                    </div>
                    <div className="sm-card">
                    <   Icon icon="material-symbols:person-pin-circle-rounded" color="white" width="58.5" height="48" />
                        <h1>Decentralized</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus animi deserunt dignissimos dolorum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bloc4