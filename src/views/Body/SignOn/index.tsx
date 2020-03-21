import React from "react";
import * as style from "./style.scss";
import Header from "../SignIn/Header";
import { Input, Select, Button } from "antd";
import { Link, Redirect, Switch, Route } from "web-router";
import useFetch from "src/useFetch";
import { signIn } from "src/views/App";

const InputGroup = Input.Group;
const { Option } = Select;

export default function SignOn() {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [phoneNumber,setPhoneNumber]=React.useState('');
  // 数据请求
  const { data, revalidate } = useFetch({
    path: 'example/user',
    method: 'post',
    request: { firstName: userName, lastName: password }
  })
  const handleUserName = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }, [])
  const handlePassword = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }, []);

  // eslint-disable-next-line no-unused-expressions
  <Switch>
    <Route path="/signIn/">{signIn()}</Route>
  </Switch>

  if (data?.success) {
    return <Redirect to='/signIn/' />
  }
  return <div className={style.box}>
    <Header tag="注 册" />
    <div className={style.main}>
      <Input placeholder="昵称" size="large" className={style.input} onChange={handleUserName} />
      <Input placeholder="密码 ( 6~16个字符组成，区分大小写 ) " size="large" className={style.input} onChange={handlePassword} />
      <InputGroup compact className={style.input} size="large" >
        <Select defaultValue="中国大陆">
          <Option value="中国大陆">中国大陆</Option>
          <Option value="中国香港">中国香港</Option>
          <Option value="中国台湾">中国台湾</Option>
        </Select>
        <Input style={{ width: '78%' }} placeholder="常用手机号码" />
      </InputGroup>
      <div className={style.word}>
        <Input placeholder="请输入短信验证码" size="large" style={{ width: '70%' }} />
        <Button type="primary" style={{ height: 40 }} >获取验证码</Button>
      </div>
      <div className={style.description} >我们没有需要遵守的协议。</div>
      <Button style={{ width: '100%', marginTop: 10, height: 40 }} onClick={revalidate}>注册</Button>
      <div className={style.link} ><Link to="/signIn/" className={style.link} >已有账号？直接登录</Link></div>
    </div>
  </div>
}