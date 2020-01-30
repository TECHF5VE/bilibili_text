import * as React from 'react';
import * as style from './style.scss';
import Upload from './Upload';
import OpenGitHub from './OpenGitHub';

export default function Right() {
  return (
    <div className={style.a}>
      <a href="" className={style.b}>
        图片
      </a>
      <a href="" className={style.b}>
        消息
      </a>
      <a href="" className={style.b}>
        动态
      </a>
      <a href="" className={style.b}>
        收藏
      </a>
      <a href="" className={style.b}>
        历史
      </a>
      <a href="" className={style.b}>
        大会员
      </a>
      <a href="" className={style.b}>
        创作中心
      </a>
      <Upload />
      <OpenGitHub />
    </div>
  );
}
