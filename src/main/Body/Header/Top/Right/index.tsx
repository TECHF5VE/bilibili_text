import * as React from 'react';
import * as style from './style.scss';
import Upload from './Upload';
import OpenGitHub from './OpenGitHub';
import { Link } from 'web-router';
import { Avatar } from 'antd';
//import {Popover} from 'antd';
export default function Right() {
  // const {Success,setSuccess}=React.useContext()
  // const xiaLa=(
  //   <div>
  //     <div>个人中心</div>
  //     <Link to="" onClick={()=>setSuccess(false)}><div>退出登录</div></Link>
  //   </div>
  // )
  //if (Success) {
    return (
      <div className={style.a}>
        <div className={style.signIn}>
          <Avatar size="large" icon="user" />
          <Link to="/signIn/">
            <span className={style.span}>登录</span>
          </Link>
          <span>·</span>
          <Link to="/signOn/">
            <span>注册</span>
          </Link>
        </div>

        <Link to="/whachLater/" target="_blank" className={style.b}>
          稍后再看
        </Link>
        <a className={style.b}>收藏</a>
        <a className={style.b}>大会员</a>
        <a className={style.b}>创作中心</a>
        <Upload />
        <OpenGitHub />
      </div>
    );
 // }
  //  else {
  //   return (
  //     <div className={style.a}>
  //       <div className={style.signIn}>
  //       <span className={style.span}>syntou</span>
  //       <button><Popover content={xiaLa}>
  //         <Avatar size="large" icon="user" />
  //        </Popover>
  //        </button>
  //       </div>

  //       <Link to="/whachLater/" target="_blank" className={style.b}>
  //         稍后再看
  //       </Link>
  //       <a className={style.b}>收藏</a>
  //       <a className={style.b}>大会员</a>
  //       <a className={style.b}>创作中心</a>
  //       <Upload />
  //       <OpenGitHub />
  //     </div>
  //   );
  // }
}
