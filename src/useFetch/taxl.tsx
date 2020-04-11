import React, { Suspense } from 'react'
import Demo from './Demo'
import { Button } from 'antd'

export default function Taxi() {
  return <>
  <Button>refresh</Button>
    <Suspense fallback={<div>loading user...</div>}>
      <Demo />
    </Suspense>
  </>
}