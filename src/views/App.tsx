import * as React from 'react';
import Header from './Header';
import Body from "./Body";
import Up from "./Up";
import "./base.scss";


export default function App() {
    return <div >
        <Header />
        <Up />
        <Body />
    </div>;
}