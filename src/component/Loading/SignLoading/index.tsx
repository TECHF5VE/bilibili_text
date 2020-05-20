import { Alert, Icon } from "antd"
import React from "react"
import * as style from "./style.scss";

export default function Loading(props: { data: any, display: boolean }) {
  if (!(typeof (props.data?.success) === 'undefined') && props.display) {
    return <Alert className={style.alert} message={props.data?.massege} type="error" showIcon />
  } else if (typeof (props.data?.success) === 'undefined' && props.display) {
    return <Alert message={<div><Icon className={style.alertIcon} type="loading" />正在加载...</div>} type="info" />
  } else {
    return null;
  }
}