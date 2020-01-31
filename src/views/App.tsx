import * as React from 'react';
import Header from './Header';
import Body from "./Body";
import Up from "./Up";
import "./base.scss";
import Foot from './Foot';
import Navigation from './Navigation';


export default function App() {
    return <div >
        <Header />
        <Up />
        <Navigation />
        <Body />
        <Foot />
    </div>;
}
