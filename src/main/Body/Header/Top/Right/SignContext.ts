import React from "react";

interface ISignContext{
    success:boolean,
    setSuccess:React.Dispatch<React.SetStateAction<boolean>>
  }
  const SignContext=React.createContext<ISignContext>(null);
  export default  SignContext;