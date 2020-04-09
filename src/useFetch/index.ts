import Api from './api';
import { useState, useCallback } from 'react';
import useSWR, { responseInterface } from 'swr';

type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'option';

interface Request<
  Path extends keyof Api,
  Method extends keyof Api[Path],
  R = 'request' extends keyof Api[Path][Method] ? 'request' : never
> {
  path: Path;
  method: HttpMethod;
  request: R extends keyof Api[Path][Method] ? Api[Path][Method][R] : never;
}

type Response<
  Path extends keyof Api,
  Method extends keyof Api[Path],
  R = 'response' extends keyof Api[Path][Method] ? 'response' : never
> = responseInterface<
  R extends keyof Api[Path][Method] ? Api[Path][Method][R] : never,
  Error
>;

async function fetcher<Path extends keyof Api, Method extends keyof Api[Path]>(
  path: Path,
  method: Method & HttpMethod,
  request: string
): Promise<Response<Path, Method>['data']> {
  const isGet = ['head', 'get'].includes(method);
  const isDev = process.env.NODE_ENV === 'development';
  if (isDev) {
    // fetch mock data when dev
    const response = await fetch(`/mock/${path}/${method}.json`);
    return response.json();
  }
  const apiPath = `/api/${path}`;
  if (isGet) {
    const params = new URLSearchParams(JSON.parse(request));
    const response = await fetch(`${apiPath}?${params.toString()}`, { method });
    return response.json();
  } else {
    const response = await fetch(apiPath, {
      body: request,
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
    return response.json();
  }
}

export default function useFetch<
  Path extends keyof Api,
  Method extends keyof Api[Path]
>({ path, method, request }: Request<Path, Method>): Response<Path, Method> {
  const isGet = ['head', 'get'].includes(method);
  const [suppress, setSuppress] = useState(!isGet);
  // anyway, the message that only can be json.stringified can be requested
  const swr = useSWR(
    suppress ? null : [path, method, JSON.stringify(request)],
    fetcher,
    {
      suspense: isGet,
      revalidateOnFocus: isGet
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
  if (isGet) {
    return swr;
  } else {
    // do not use { ...swr, revalidate } because you can take a try 🙂
    return {
      data: swr.data,
      error: swr.error,
      isValidating: swr.isValidating,
      mutate: swr.mutate,
      revalidate
    };
  }
}
