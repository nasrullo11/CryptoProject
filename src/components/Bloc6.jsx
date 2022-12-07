import React from 'react'
import "../css/bloc6.css"
import { Icon } from '@iconify/react';

const Bloc6 = () => {
  return (
    <div>
        <div className="bloc6">
            <div className="sm-bloc6_1">
                <div className="text">
                    <h1>
                        How Blockchain Works
                    </h1>
                    <p>to find the ones who get it right. We trust our future with experts everyday</p>
                </div>
                <div className="card">
                    <div className="sm-card">
                        <div className="ms-card">
                        <Icon icon="game-icons:james-bond-aperture" color="white" width="48" height="48" />
                        </div>
                        <div className="ms-card1">
                            <div className="sms-card ms-card2">
                                <Icon icon="carbon:bare-metal-server-02" color="#3c434f" width="48" height="48" />
                            </div>
                            <div className="sms-card ms-card2">
                                <Icon icon="icon-park-outline:target-one" color="#3c434f" width="48" height="48" />
                            </div>
                            <div className="sms-card ms-card2">
                                <Icon icon="material-symbols:back-hand-outline" color="#3c434f" width="48" height="48" />
                            </div>
                            <div className="sms-card ms-card2">
                                <Icon icon="ion:finger-print-outline" color="#3c434f" width="48" height="48"/>
                            </div>
                        </div>
                    </div>
                    <div className="sm-text">
                        <h1>The Request is broadcast to all nodes in the network</h1>
                        <p> Assumenda enim esseexplicabo, in incidunt itaque labore quae quaerat qui sequi suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="chiziq">
                    <span className='s1'></span>
                    <span className='s2'></span>
                    <span className='s3'></span>
                    <span className='s4'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bloc6