import * as React from 'react';
import { Popover} from 'antd';
import * as style from './style.scss';
import CartoonContent from './CartoonContent';

export default function Cartoon() {
  return (
    <Popover title={null} content={<CartoonContent />} placement="bottomLeft">
      <a className={style.b}>漫画</a>
    </Popover>
  );
}