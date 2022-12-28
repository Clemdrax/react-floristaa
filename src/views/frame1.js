import React from 'react'

import { Helmet } from 'react-helmet'

import './frame1.css'

const Frame1 = (props) => {
  return (
    <div className="frame1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="frame1-frame">
        <span className="frame1-text">
          <span>Bouquets from local stores in Israel</span>
        </span>
        <img
          alt="Florista1532"
          src="/playground_assets/florista1532-t5g.svg"
          className="frame1-florista"
        />
        <div className="frame1-group1861">
          <div className="frame1-frame1">
            <div className="frame1-group1854">
              <span className="frame1-text02">
                <span>E-mail</span>
              </span>
            </div>
          </div>
          <span className="frame1-text04">
            <span>Login</span>
          </span>
          <div className="frame1-frame2">
            <img
              alt="Vector1903"
              src="/playground_assets/vector1903-4zf.svg"
              className="frame1-vector"
            />
            <div className="frame1-group18541">
              <span className="frame1-text06">
                <span>Wrong password</span>
              </span>
              <span className="frame1-text08">!</span>
            </div>
          </div>
          <div className="frame1-frame3">
            <span className="frame1-text09">
              <span>TO COME IN</span>
            </span>
          </div>
          <div className="frame1-frame4">
            <span className="frame1-text11">
              <span>I AM A FLORIST</span>
            </span>
          </div>
          <span className="frame1-text13">
            <span>Don&apos;t have an account? Register</span>
          </span>
          <span className="frame1-text15">
            <span>Forgot your password?</span>
          </span>
          <span className="frame1-text17">
            <span>Password</span>
          </span>
        </div>
        <img
          alt="Ellipse1321903"
          src="/playground_assets/ellipse1321903-wnq-200h.png"
          className="frame1-ellipse132"
        />
      </div>
    </div>
  )
}

export default Frame1
