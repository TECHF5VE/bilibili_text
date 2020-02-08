import * as React from 'react';
import Header from './Header';
import Body from "./Body";
import Up from "./Up";
import "./base.scss";
import Foot from './Foot';
import Navigation from './Navigation';
import Picture from './Picture';



export default function App(this: any) {

    return <div >
        <Picture />
        <Header />
        <Up />
        <Navigation />
        <Body />
        <Foot />
    </div>;
}














