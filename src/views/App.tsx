import * as React from 'react';
import Header from './Header';
import Body from "./Body";
import Up from "./Up";
import "./base.scss";
import Foot from './Foot';
import Navigation from './Navigation';
import { Affix } from 'antd';
import img from "./Xiao.png";



export default function App(this: any) {

    return <div >
        <div>
            <Affix offsetTop={600}>
                <img src={img} />
            </Affix>
        </div>
        <Header />
        <Up />
        <Navigation />
        <Body />
        <Foot />
    </div>;
}














