import * as React from 'react';
import * as style from './style.scss';
import { Icon } from 'antd';

export default function CartoonItem(props: any) {
  return (
    <div className={style.item}>
      <Icon type="area-chart" className={style.icon}/>
      <span>{props.tag}</span>
    </div>
  );
}
