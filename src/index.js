import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Frame from './views/frame'
import Frame1 from './views/frame1'
import Frame2 from './views/frame2'
import Frame3 from './views/frame3'
import Frame21 from './views/frame21'
import Frame4 from './views/frame4'
import Frame5 from './views/frame5'
import Frame6 from './views/frame6'
import Frame7 from './views/frame7'
import Frame8 from './views/frame8'
import Frame404 from './views/frame404'
import Frame9 from './views/frame9'
import Frame10 from './views/frame10'
import Frame11 from './views/frame11'
import Frame12 from './views/frame12'
import Frame13 from './views/frame13'
import Frame14 from './views/frame14'
import Frame15 from './views/frame15'
import Frame22 from './views/frame22'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Frame} exact path="/frame" />
        <Route component={Frame1} exact path="/frame1" />
        <Route component={Frame2} exact path="/frame2" />
        <Route component={Frame3} exact path="/frame3" />
        <Route component={Frame21} exact path="/frame21" />
        <Route component={Frame4} exact path="/frame4" />
        <Route component={Frame5} exact path="/frame5" />
        <Route component={Frame6} exact path="/frame6" />
        <Route component={Frame7} exact path="/frame7" />
        <Route component={Frame8} exact path="/frame8" />
        <Route component={Frame404} exact path="/frame404" />
        <Route component={Frame9} exact path="/frame9" />
        <Route component={Frame10} exact path="/frame10" />
        <Route component={Frame11} exact path="/frame11" />
        <Route component={Frame12} exact path="/frame12" />
        <Route component={Frame13} exact path="/frame13" />
        <Route component={Frame14} exact path="/frame14" />
        <Route component={Frame15} exact path="/frame15" />
        <Route component={Frame22} exact path="/frame22" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
