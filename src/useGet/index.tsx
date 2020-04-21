import useSWR from "swr";

// get request ,If you want to use "get", please export this instead of using the above 
async function fetche(path: string) {
  const response = await fetch(`/mock/${path}/get.json`);
  return response.json();
}
export default function useGet(path: string) {
  const { data, error } = useSWR(path, fetche)
  let datas=data
  return {
    datas,
    error
  }
}

