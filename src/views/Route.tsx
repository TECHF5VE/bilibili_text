import * as React from 'react';
import Body from "./Body";
import "./base.scss";
import { Router, Switch, Route } from 'web-router';
import LaterList from './LaterList';
import SignIn from './SignIn';
import SignOn from './SignOn';
import PlayPage from './PlayPage';
import Header from 'src/component/Header';
import Up from 'src/component/Up';
import Foot from 'src/component/Foot';

export default function RoutePage() {
  return <Router>
    <Switch>
      <Route path="/whachLater/">
        <Header />
        <Up />
        <LaterList />
        <Foot />
      </Route>
      <Route path="/homepage/"><Body /></Route>
      <Route path="/signIn/">
        <SignIn />
        <Foot />
      </Route>
      <Route path="/signOn/">
        <SignOn />
        <Foot />
      </Route>
      <Route path="/playPage/"><PlayPage title="hamomo" src="http://www.hamomo.top/videos/小女孩.mp4" /></Route>
      <Route>
        <Body />
      </Route>
    </Switch>
  </Router>
}
