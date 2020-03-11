import React from "react";
import * as style from "./style.scss";
import Header from "../SignIn/Header";
import { Input, Select, Button } from "antd";
import { Link } from "web-router";

const InputGroup = Input.Group;
const { Option } = Select;

export default function SignOn() {
  const addData=React.useCallback(()=>{
    alert("你能注册才怪，我还没弄好呢<!!>")
  },[])
  return <div className={style.box}>
    <Header tag="注 册" />
    <div className={style.main}>
      <Input placeholder="昵称" size="large" className={style.input} />
      <Input placeholder="密码 ( 6~16个字符组成，区分大小写 ) " size="large" className={style.input} />
      <InputGroup compact className={style.input} size="large" >
        <Select defaultValue="中国大陆">
          <Option value="中国大陆">中国大陆</Option>
          <Option value="中国香港">中国香港</Option>
          <Option value="中国台湾">中国台湾</Option>
        </Select>
        <Input style={{ width: '78%' }} placeholder="常用手机号码" />
      </InputGroup>
      <div className={style.word}>
        <Input placeholder="请输入短信验证码" size="large" style={{ width: '70%'}} />
        <Button type="primary" style={{ height:40}} >获取验证码</Button>
      </div>
      <div className={style.description} >我们没有需要遵守的协议。</div>
      <Button style={{ width: '100%', marginTop:10 , height:40}} onClick={addData}>注册</Button>
      <div className={style.link} ><Link to="/signIn/" className={style.link} >已有账号？直接登录</Link></div>
    </div>
  </div>
}