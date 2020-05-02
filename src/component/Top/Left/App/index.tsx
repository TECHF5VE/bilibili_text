import * as React from 'react';
import { Popover} from 'antd';
import * as style from './style.scss';
import AppContent from './AppContent';

export default function Game() {
    return (
      <Popover title={null} content={<AppContent />} placement="bottomLeft">
        <a className={style.b}>下载app</a>
      </Popover>
    );
  }