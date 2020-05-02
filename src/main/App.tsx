import * as React from 'react';
import Body from "./Body";
import "./base.scss";
import { Router, Switch, Route } from 'web-router';
import LaterList from './LaterList';
import SignIn from './SignIn';
import SignOn from './SignOn';
import PlayPage from './PlayPage';
import  SignContext  from './Body/Header/Top/Right/SignContext';


export default function App() {
  const [success,setSuccess]=React.useState(false)
  return <SignContext.Provider value={{success,setSuccess}}>
  <Router>
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
    </SignContext.Provider>
}



















