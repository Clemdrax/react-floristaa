import React from 'react'

import { Helmet } from 'react-helmet'

import './frame404.css'

const Frame404 = (props) => {
  return (
    <div className="frame404-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame404-frame404">
        <span className="frame404-text">
          <span>Oops..</span>
        </span>
        <span className="frame404-text2">
          <span>Error 404</span>
        </span>
        <img
          alt="Florista1535"
          src="/playground_assets/florista1535-o2tb.svg"
          className="frame404-florista"
        />
      </div>
    </div>
  )
}

export default Frame404
