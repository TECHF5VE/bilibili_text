import useSWR from "swr";
import React from "react";

// get request ,If you want to use "get", please export this instead of using the above 
async function fetche(path: string) {
  const response = await fetch(`/mock/${path}/get.json`);
  return response.json();
}
export default function useGet(path: string) {
  const { data, error } = useSWR(path, fetche)
  return {
    data,
    error
  }
}

// 暂时不得用
export function Examine(props: { datas: any, errors: any, children: any }) {
  return <>
    {
      !props.datas ?
        <div>loading...</div>
        :
        props.errors ?
          <div>failed to load</div>
          :
          <>{props.children}</>
    }
  </>
}