import React from "react";
import * as style from "./style.scss";
import { Input, Button, Icon, Alert, } from "antd";
import { Link, Redirect } from "web-router";
import IsSignOn from "../SignOn/isSignOn";
import IsSignIn from "./isSignIn";
import usePost from "src/useFetch/usePost";
import Loading from "src/component/Loading/SignLoading";
import Header from "./Header";
import Foot from "src/component/Foot";
import SignContext from "src/component/Top/Right/SignContext";

export default function SignIn() {
  const storage = window.localStorage;
  const [remPassword, setRemPassword] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(null);
  const [passwords, setPasswords] = React.useState('');
  const { setSuccess } = React.useContext(SignContext);
  const [display, setDisplay] = React.useState(false);
  const { isSignOn, setIsSignOn } = React.useContext(IsSignOn);
  const { setIsSignIn } = React.useContext(IsSignIn);

  // 登录请求
  const { data, revalidate } = usePost({
    path: 'user/login',
    request: { username: inputValue, password: passwords }
  });
  // 判断是否有账号密码缓存
  React.useEffect(() => {
    if (storage.getItem("userName") != null && (storage.getItem("remPassword") === 'true')) {
      setInputValue(storage.userName);
      setPasswords(storage.password);
      setRemPassword(storage.getItem("remPassword") === 'true')
    } else {
      setInputValue(storage.userName);
    };
    setTimeout(() => {
      setIsSignOn(false)
    }, 2000)
  }, [setIsSignOn, storage]);
  // 忘记密码的提示
  const alertWord = React.useCallback(() => {
    alert("还找不回来");
  }, [])
  // 记住用户名
  const handleValue = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])
  // 记住密码
  const handlePassword = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords(e.target.value)
  }, [])
  // 记住用户名和密码
  const handleBlur = React.useCallback(() => {
    storage.userName = inputValue;
    storage.password = passwords;
  }, [inputValue, passwords, storage.password, storage.userName])
  // 记住密码勾选
  const handleCheck = React.useCallback(() => {
    if (remPassword) {
      setRemPassword((state) => !state);
      const valueTrue = !remPassword
      storage.remPassword = valueTrue;
    } else {
      setRemPassword(true);
      const valueTrue = !remPassword;
      storage.remPassword = valueTrue;
    }
  }, [remPassword, storage.remPassword]);

  // 控制是否提示
  const handleDisplay = React.useCallback(() => {
    setDisplay(true);
  }, [])

React.useEffect(()=>{
  if (!(typeof (data?.success) === 'undefined')) {
    setTimeout(() => {
      setDisplay(false);
    }, 2000)
  }
})

  if (data?.success) {
    setSuccess(true);
    setIsSignIn(true);
    return <Redirect to='/' />
  }
  return <div className={style.box}>
    <Header tag="登 录" />
    <div className={style.main}>
      <Loading data={data} display={display} />
      {isSignOn && <Alert className={style.alert} message='注册成功，请登录' type="success" showIcon />}
      <span className={style.title}>密码登录</span>
      <Input placeholder="电话号码" size="large" className={style.input} onChange={handleValue} value={inputValue} onBlur={handleBlur} />
      {inputValue && isNaN(inputValue) && <p className={style.p}>请输入数字</p>}
      {inputValue && (inputValue.length > 11) && <p className={style.p}>请输入正确的电话号码</p>}
      <Input type="password" placeholder="密码" size="large" className={style.input} onChange={handlePassword} value={passwords} onBlur={handleBlur} />
      {passwords.length < 6 && passwords.length > 0 && <p className={style.p}>密码长度不足</p>}
      <div className={style.word}>
        <div className={style.rememberPassword}>
          <div className={style.span} onClick={handleCheck}>{remPassword && <Icon type="check" />}</div>记住密码</div>
        <a className={style.lostPw} onClick={alertWord}>忘记密码？！</a>
      </div>
      <div className={style.button}>
        <Button type="primary" className={style.buttonOne} onClick={() => [revalidate(), handleDisplay()]}>登 录</Button>
        <Button className={style.buttonOne}><Link to="/signOn/">注 册</Link></Button>
      </div>
    </div>
    <Foot />
  </div>
}