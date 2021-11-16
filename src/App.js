/** @format */
import './App.css'
import './animateslide.min.css'
import React from 'react'
import HeaderComponent from './commonComponents/header'
import FooterComponent from './commonComponents/footer'
import { Switch, Route } from 'react-router-dom'
import IfsServices from './services/ifsServices'
import LandingPageComponent from './landingPageComponent'
import ItRecuritment from './services/itRecurit'
import Careers from './careers/careers'

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <HeaderComponent />
        </div>
        <Switch>
          <Route
            exact
            path={['/', '/#home']}
            component={LandingPageComponent}
          />
          <Route exact path="#" />
          <Route exact path="/itRecurit" component={ItRecuritment} />
          <Route exact path="/careers" component={Careers} />
          {/* <Route exact path='/contactUs' component={IfsServices} /> */}
        </Switch>
        <FooterComponent />
      </div>
    )
  }
}
export default App
