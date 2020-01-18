import * as React from 'react';
import * as style from './style.scss';
import { Icon } from 'antd';

export default function UploadItem(props: any) {
  return (
    <div className={style.item}>
      <Icon type="upload" className={style.icon} />
      <span>{props.tag}投稿</span>
    </div>
  );
}
