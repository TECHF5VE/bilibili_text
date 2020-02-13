import * as React from 'react';
import Header from './Header';
import Body from "./Body";
import Up from "./Up";
import "./base.scss";
import Foot from './Foot';
import Navigation from './Navigation';
import Picture from './Picture';
// import Todolist from './Todolist';

// ===严格相等的理解：他的明确的语义为： a value is only equal to itself。两种针对数值的特殊情况我们暂不考虑，所以我将===理解为内存地址一致。

import * as Immutable from 'immutable';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TodoList from './Body/Fourth/Left/Body/Upcontext/Component/TodoList';



// 原生JS的写法
const object1 = { a: { b: 1 } };
const temp1 = object1;
temp1.a.b = 2;
console.log(object1.a.b);  // 打印 2
console.log(object1 === temp1);  //  打印 true
// 通过===的比较可以知道，temp与object1的内存地址是一致的，所以在这种写法中，=（赋值）操作会将原来的对象的地址给新的对象
// 所以对象始终只有一个，temp已经完全覆盖了object1，所有对temp的操作也就是对object1操作
// 优势：1.节省内存资源；2.对简单的逻辑来说更容易实现，响应速度更快（因为只将内存地址赋值给新的对象，没有新建对象的操作）
// 劣势：1.当需要调用object1的数据时（未改变之前的数据），发现已经通过temp改过了，所以若想保存之前的数据，只能deepCopy，对内存资源的浪费很大


// 使用immutable.js的写法
const object2 = Immutable.fromJS({ a: { b: 1 } });
const temp2 = object2.setIn(['a', 'b'], 2);   // 使用 setIn 赋值，赋值之后返回一个新的对象
console.log(object2.getIn(['a', 'b']));  // 打印 1
console.log(temp2.getIn(['a', 'b']));  // 打印 2
console.log(object2 === temp2);  //  打印 false
// 这种写法在修改一个对象时，会返回一个新的对象，原来的对象依旧存在
// 优点：1.因为两个对象同时存在，所以需要object2的值时将会很容易得到；2.对复杂的逻辑比较友好（需要用到object2的数据）
// 劣势：1.会一定程度的消耗内存资源，但是通过 Structural Sharing 相较于原生JS的资源消耗而言，Immutable的消耗非常有限
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

    return <BrowserRouter>

    <Switch>
      <Route path="/whachLater/*" component={defaultTop} />
      <Route component={Bodys} />
    </Switch>
    </BrowserRouter>
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



















