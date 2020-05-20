import React from 'react';

async function fetcher(path: string, request: string) {
  const myInit = {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: request,
    method: 'post'
  };
  const response = await fetch(`/mock/${path}/post.json`);
  console.log(myInit);
  return response.json();
}
export default function usePost(parmer: { path: string; request: object }) {
  const [data, setData] = React.useState(null);
  const [suppress, setSuppress] = React.useState(true);
  const parser = suppress
    ? null
    : [parmer.path, JSON.stringify(parmer.request)];
  if (!suppress) {
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
