import * as React from 'react';
import Header from './Header';
import Body from "./Body";
import Up from "./Up";
import "./base.scss";
import { Affix } from 'antd';
import img from "./Xiao.png";




export default function App(this: any) {

    return <div >
            <div>
                

        
        <Affix offsetTop={700} onChange={affixed => console.log(affixed)}>
        <img src={img}/>
  </Affix>,
      </div> 
        <Header />
        <Up />
        <Body />
  
    </div>;
}







  


    
  


