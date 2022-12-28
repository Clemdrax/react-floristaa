import React from 'react'

import { Helmet } from 'react-helmet'

import './frame4.css'

const Frame4 = (props) => {
  return (
    <div className="frame4-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame4-frame">
        <span className="frame4-text">
          <span>Bouquets from local stores in Israel</span>
        </span>
        <img
          alt="Florista1532"
          src="/playground_assets/florista1532-tmex7.svg"
          className="frame4-florista"
        />
        <img
          alt="Rectangle20221532"
          src="/playground_assets/rectangle20221532-b0z-200h.png"
          className="frame4-rectangle2022"
        />
        <span className="frame4-text2">
          <span>You have successfully registered!</span>
        </span>
      </div>
    </div>
  )
}

export default Frame4
