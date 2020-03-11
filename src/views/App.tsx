import * as React from 'react';
import Header from './Header';
import Body from "./Body";
import Up from "./Up";
import "./base.scss";
import Foot from './Foot';
import Navigation from './Navigation';
import Picture from './Picture';
import { Router, Switch, Route } from 'web-router';
import TodoList from './Body/Animation/Left/Body/Upcontext/Component/TodoList';
import CounterContext from './Body/Animation/Left/Body/Upcontext/Component/CounterContext';
import SignIn from './Body/SignIn';
import SignOn from './Body/SignOn';

function Bodys() {
  return <div >
    <Picture />
    <Header />
    <Up />
    <Navigation />
    <Body />
    <Foot />
  </div>
}
function defaultTop() {
  return <>
    <Header />
    <Up />
    <TodoList />
    <Foot />
  </>
}
function signIn() {
  return <>
    <SignIn />
    <Foot />
  </>
}
function signOn() {
  return <>
    <SignOn />
    <Foot />
  </>
}
export default function App() {
  const [list, setList] = React.useState([]);
  return <CounterContext.Provider value={{ list, setList }}>
    <Router>
      <Switch>
        <Route path="/whachLater/">
          {defaultTop()}
        </Route>
        <Route path="/homepage/">{Bodys()}</Route>
        <Route path="/signIn/">{signIn()}</Route>
        <Route path="/signOn/">{signOn()}</Route>
        <Route>
          {Bodys()}
        </Route>
      </Switch>
    </Router>
  </CounterContext.Provider>
}



















