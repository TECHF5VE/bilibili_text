import * as React from "react";
import * as style from "./style.scss";
import UpContext from "./Compent";

export default function Body() {
  return <div className={style.main}>
    <div className={style.line}>
      <UpContext />
      <UpContext />
     
      <UpContext />
      <UpContext />
    </div>
    <div className={style.line}>
      <UpContext />
   
      <UpContext />
      <UpContext />
      <UpContext />
    </div>
  </div>

}
