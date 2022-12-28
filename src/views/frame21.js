import React from 'react'

import { Helmet } from 'react-helmet'

import './frame21.css'

const Frame21 = (props) => {
  return (
    <div className="frame21-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame21-frame2">
        <span className="frame21-text">
          <span>Bouquets from local stores in Israel</span>
        </span>
        <img
          alt="Florista2743"
          src="/playground_assets/florista2743-xqy5.svg"
          className="frame21-florista"
        />
        <img
          alt="Rectangle20222743"
          src="/playground_assets/rectangle20222743-vtj-200h.png"
          className="frame21-rectangle2022"
        />
        <span className="frame21-text2">
          <span>
            <span>thanks for the REQUEST!</span>
            <br></br>
            <span> email sent with instructions</span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Frame21
