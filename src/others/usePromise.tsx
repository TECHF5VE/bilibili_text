interface Cache<T = any> {
  data: T;
  error: Error | typeof initError;
  promise:Promise<T>;
}

const cache: { [key: string]: Cache } = {};

const initData = Symbol('init data');
const initError = Symbol('no data');

export default function usePromise<T extends any[], Data = any>(
  fn: (...args: T) => Promise<Data>,
  ...args: T
): Data {
  const key = fn.name + args.toString();
  if (!cache[key]) {
    cache[key] = {
      data: initData,
      error: initError,
      promise: fn(...args)
        .then(data => (cache[key].data = data))
        .catch(error => (cache[key].error = error))
    };
  }
  if (cache[key].data===initData&&cache[key].error===initError){
    throw cache[key].promise;
  }
  if(cache[key].error!==initError){
    throw cache[key].error;
  }
  return cache[key].data;
}