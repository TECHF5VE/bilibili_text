import useFetch from '.';
import { Button } from 'antd';
import React, { Suspense } from 'react';

export function Demo() {
  const { data, revalidate } = useFetch({
    path: 'user/watchLater',
    method: 'get',
    request:{}
    }
  )
  return (
    <><Suspense fallback={<div>loading user...</div>}>
    <Button onClick={revalidate}>refresh</Button>
    
      <pre>{JSON.stringify(data)}</pre>
      </Suspense>
    </>
  );
}
export default function Taxi() {
  return <>
  <Button>refresh</Button>
    <Suspense fallback={<div>loading user...</div>}>
      <Demo />
    </Suspense>
  </>
}
