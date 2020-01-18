import * as React from 'react';

import Search from 'antd/lib/input/Search';



export default function Center(){
  return <Search placeholder="input search text" onSearch={value=>console.log(value)} enterButton />
}