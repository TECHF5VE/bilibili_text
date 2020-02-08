import * as React from 'react';
import * as style from './style.scss';
import Upload from './Upload';
import OpenGitHub from './OpenGitHub';
import { Link } from 'react-router-dom';

export default function Right() {
  return (
    <div className={style.a}>
      <Link to="/whachLater/" className={style.b}>
        稍后再看
      </Link>
      <a  className={style.b}>
        消息
      </a>
      <a  className={style.b}>
        动态
      </a>
      <a  className={style.b}>
        收藏
      </a>
      <a  className={style.b}>
        历史
      </a>
      <a  className={style.b}>
        大会员
      </a>
      <a  className={style.b}>
        创作中心
      </a>
      <Upload />
      <OpenGitHub />
    </div>
  );
}
