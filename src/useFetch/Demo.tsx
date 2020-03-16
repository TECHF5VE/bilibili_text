import useFetch from '.';
import { Button } from 'antd';
import React from 'react';

export default function Demo() {
  const { data, revalidate } = useFetch({
    path: 'example/user',
    method: 'post',
    request: { firstName: 'vyg', lastName: 'hug' }
    }
  )
  console.log(data);
  
  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
      <Button onClick={revalidate}>refresh</Button>
    </>
  );
}
