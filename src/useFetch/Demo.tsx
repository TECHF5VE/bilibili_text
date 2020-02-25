import useFetch from '.';
import { Button } from 'antd';
import React from 'react';

export default function Demo() {
  const { data, revalidate } = useFetch({
    path: 'user',
    method: 'post',
    request: { firstName: '', lastName: '' }
  });
  console.log(data);
  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
      <Button onClick={revalidate}>refresh</Button>
    </>
  );
}
