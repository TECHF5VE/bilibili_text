import * as React from 'react';
import { Input } from 'antd';
import * as style from "./style.scss";

const { Search } = Input;
export default function Center() {
  return <div className={style.b}>
    <Search className={style.a} placeholder="input search text" onSearch={value => console.log(value)} enterButton={true} />
  </div>
}