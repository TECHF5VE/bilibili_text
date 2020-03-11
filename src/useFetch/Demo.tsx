import useFetch from '.';
import { Button } from 'antd';
import React from 'react';
import { request } from 'http';

export default function Demo() {
  const { data, revalidate } = useFetch({
    path: 'user',
    method: 'post',
    request: { firstName: 'vyg', lastName: 'hug' }
    }
  )
  console.log(data);
  console.log(request);
  
  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
      <Button onClick={revalidate}>refresh</Button>
    </>
  );
}
