import React from "react";
import * as style from "./style.scss";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function SignIn(){
  const alertWord=React.useCallback(()=>{
    alert("忘了就不登了！！")
  },[])
  return <div className={style.box}>
    <Header tag="登 录" />
    <div className={style.main}>
      <span className={style.title}>密码登录</span>
      <Input placeholder="账号/邮箱" size="large" className={style.input} />
      <Input type="password" placeholder="密码" size="large" className={style.input} />
      <div className={style.word}>
        <div className={style.rememberPassword}>现在还记不住密码呦！！</div>
        <a className={style.lostPw} onClick={alertWord}>忘记密码？！</a>
      </div>
      <div className={style.button}>
        <Button type="primary" className={style.buttonOne}>登 录</Button>
        <Button className={style.buttonOne}><Link to="/signOn/">注 册</Link></Button>
      </div>
    </div>
  </div>
}