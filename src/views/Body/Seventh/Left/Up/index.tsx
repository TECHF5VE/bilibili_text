import * as React from "react";
import * as style from "./style.scss";
import img from "./Up.png";
import { Tabs, Button, Icon } from 'antd';
import Down from "./Down"

const { TabPane } = Tabs;



export default function Up() {
  return <div className={style.box}>
    <a> <img src={img} /></a>
    <a href="#" className={style.a}> 漫画</a>
    <Tabs tabBarExtraContent={<div className={style.right}>
      <Button type="primary" size="small" icon="sync">换一批</Button>
      <Button type="primary" size="small" className={style.button}>更多<Icon type="right" /></Button>
    </div>}>
      <TabPane tab="人气推荐" key="1">
        <Down />
      </TabPane>
      <TabPane tab="今日更新推荐" key="2">
        <Down />
      </TabPane>
      <TabPane tab="下载APP" key="3">
        <Down />
      </TabPane>
    </Tabs>

  </div>

}
