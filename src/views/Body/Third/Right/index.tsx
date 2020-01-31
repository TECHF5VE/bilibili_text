import React from "react";
import * as style from "./style.scss";
import RightX from "./RightX";
import { Tabs } from "antd";
import Left from "./Left";
import Center from "./Center";

const { TabPane } = Tabs;

export default function Right() {
  return <div className={style.main}>
    <Tabs defaultActiveKey="1" className={style.line}>
    <TabPane tab="Tab 1" key="1">
      <Left />
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      <Center />
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      <RightX />
    </TabPane>
  </Tabs>
  </div>
}