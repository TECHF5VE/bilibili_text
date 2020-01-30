import React from "react";
import { Icon, Button } from "antd";
import * as style from "./style.scss";


export default function Right() {
  return<div>
      <Button size="small" icon="sync">换一批</Button>
      <Button size="small" className={style.button}>更多<Icon type="right" /></Button>
    </div>
}