import isDev from 'src/isDev';
import React from 'react';

async function fetcher(path: string, request: string) {
  const myInit = {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: request,
    method: 'post'
  };
  const response = isDev
    ? await fetch(`/mock/${path}/post.json`)
    : await fetch(`${path}`, myInit);
  console.log(myInit);
  return response.json();
}
export default function usePost(Request: { path: string; request: object }) {
  const [data, setData] = React.useState(null);
  const [suppress, setSuppress] = React.useState(true);
  const parser = suppress
    ? null
    : [Request.path, JSON.stringify(Request.request)];
  if(!suppress){
    fetcher(parser[0], parser[1]).then(res => setData(res));
    setSuppress(true);
  }
  const revalidate = React.useCallback(() => {
    setSuppress(false);
  }, []);
  return {
    data,
    revalidate
  };
}
