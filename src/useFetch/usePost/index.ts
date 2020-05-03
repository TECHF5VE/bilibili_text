import useSWR from 'swr';
import isDev from 'src/isDev';
import { useCallback, useState } from 'react';

// post request ,If you want to use "post", please export this instead of using the above ,this is true
async function fetcher(path: string, request: string) {
  const myInit = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: request,
    method: 'post'
  };
  const response = isDev
    ? await fetch(`/mock/${path}/post.json`)
    : await fetch(`${path}`, myInit);
  return response.json();
}
export default function usePost(Request: { path: string; request: {} }) {
  const [suppress, setSuppress] = useState(true);
  const swr = useSWR(
    suppress ? null : [Request.path, JSON.stringify(Request.request)],
    fetcher,
    {
      suspense: false,
      revalidateOnFocus: false
    }
  );
  const revalidate = useCallback(() => {
    if (suppress) {
      setSuppress(false);
      return Promise.resolve(true);
    }
    return swr.revalidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suppress, swr.revalidate]);
  return {
    data: swr.data,
    error: swr.error,
    isValidating: swr.isValidating,
    revalidate
  };
}
