import * as React from "react";

import * as style from "./style.scss";
import img from "./Up.png";
import { Tabs,Button } from 'antd';
import Down from "./Down"

const { TabPane } = Tabs;
const operations = <Button>新番时间表 ></Button>;


export default function Up(props:any){
    return <div >
     <a href="#" > <img src={img}/></a>
 <a href="#" className={style.a}> {props.tag}</a>
 <Tabs tabBarExtraContent={operations}>
    <TabPane tab="最近" key="1">
      <Down />
    </TabPane>
    <TabPane tab="周一" key="2">
      <Down />
    </TabPane>
    <TabPane tab="周二" key="3">
    <Down />
    </TabPane>
  </Tabs>,
    </div>
}