export default function fakeApi<T>(data: T,timeout=3000){
  return new Promise<T>(resolve=>{
    setTimeout(()=>{
      resolve(data);
    },timeout)
  });
}