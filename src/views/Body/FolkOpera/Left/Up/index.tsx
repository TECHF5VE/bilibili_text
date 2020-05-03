import * as React from "react";

import * as style from "./style.scss";
import img from "src/images/Up.png";
import { Tabs,Button } from 'antd';
import Down from "./Down"

const { TabPane } = Tabs;
const operations = <Button type="primary">新番时间表</Button>;


export default function Up(){
    return <div >
     <a  > <img src={img}/></a>
 <a  className={style.a}> 番剧 </a>
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
  </Tabs>
    </div>
}