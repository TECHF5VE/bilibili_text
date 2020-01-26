import * as React from 'react';
import { Popover} from 'antd';
import * as style from './style.scss';
import GameContent from './GameContent';

export default function Game() {
  return (
    <Popover title={null} content={<GameContent />} placement="bottomLeft">
      <a className={style.b}>游戏中心</a>
    </Popover>
  );
}