import useFetch from '.';
import { Button } from 'antd';
import React from 'react';

export default function Demo() {
  const { data, revalidate } = useFetch({
    path: 'user/login',
    method: 'post',
    request: { userName: 'vyg', password: 123456 }
    }
  )
  console.log(data?.success);
  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
      <Button onClick={revalidate}>refresh</Button>
    </>
  );
}
