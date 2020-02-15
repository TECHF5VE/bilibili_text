import * as React from 'react';
import Header from './Header';
import Body from "./Body";
import Up from "./Up";
import "./base.scss";
import Foot from './Foot';
import Navigation from './Navigation';
import Picture from './Picture';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TodoList from './Body/Fourth/Left/Body/Upcontext/Component/TodoList';
import { CounterContext } from './Body/Fourth/Left/Body/Upcontext/Component/CounterContext';

function Bodys(){
  return <div >
        <Picture />
        <Header />
        <Up />
        <Navigation />
        <Body />
        <Foot />
    </div>
}
function defaultTop(){
  return <>
  <Header />
  <Up/>
  <TodoList />
  </>
}
export default function App() {
  const [list, setList] = React.useState([]);
    return <CounterContext.Provider value={{ list, setList }}>
    <BrowserRouter>
    <Switch>
      <Route path="/whachLater/*" component={defaultTop} />
      <Route component={Bodys} />
    </Switch>
    </BrowserRouter>
    </CounterContext.Provider>
}



















