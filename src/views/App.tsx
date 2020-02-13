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
        {/* <Todolist /> */}
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
// import * as React from "react";
// import useChange from "./Up/useChange";

// const word = ['df', 'cfvf', 'sdd'];

// export default function App() {
//   const [value, handleChange] = useChange(word);

//   return <input value={value} onChange={handleChange} />

// }
// import * as React from 'react';
// interface ICounter{
// value: number;
// setValue: React.Dispatch<React.SetStateAction<number>> ;
// }
// const CounterContext = React.createContext<ICounter>(null);
// function CounterProvider({ children }: React.PropsWithChildren<{}>) {
//   const [value, setValue] = React.useState(0);
//   React.useEffect(()=>{
//     console.log(value) ;
//   },[value]);
//   return (
//   <CounterContext.Provider value={{ value, setValue }}>
//     {children}
//   </ CounterContext.Provider>
// );
// }
// function CounterConsumer() {
//   const { value, setValue } = React.useContext(CounterContext);
//   return (
//     <div>
//       <p>{value}</ p>
//       <button onClick={() =>setValue(v=>v + 1)}>click</ button>
// </div >
// );
// }
// export default function App() {
//   return (
//   <CounterProvider>
//     <CounterConsumer />
//   </ CounterProvider>
// );
// }



















