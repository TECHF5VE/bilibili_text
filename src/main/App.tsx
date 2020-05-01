import * as React from 'react';
import Body from "./Body";
import "./base.scss";
import { Router, Switch, Route } from 'web-router';
import LaterList from './LaterList';
import SignIn from './SignIn';
import SignOn from './SignOn';
import PlayPage from './PlayPage';


export default function App() {
  return <Router>
      <Switch>
        <Route path="/whachLater/">
          {<LaterList />}
        </Route>
        <Route path="/homepage/">{<Body />}</Route>
        <Route path="/signIn/">{<SignIn />}</Route>
        <Route path="/signOn/">{<SignOn />}</Route>
        <Route path="/playPage/">{<PlayPage title="hamomo" src="http://www.hamomo.top/videos/小女孩.mp4"/>}</Route>
        {/* <Route path="/Personal homePage/">{homePage()}</Route> */}
        <Route>
          {<Body />}
        </Route>
      </Switch>
    </Router>
    
}



















