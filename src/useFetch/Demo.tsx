import React from 'react';
import useSWR from 'swr';

async function fetcher(path: string){
  const response = await fetch(`/mock/${path}/get.json`);
    return response.json();
}
export default function Taxi(){
  const { data, error } = useSWR('/user/watchLater', fetcher)
  console.log(data);
  if (error) {return <div>failed to load</div>}
  if (!data) {return <div>loading...</div>}
  return <div>{data.item[1].title}</div> 
}

