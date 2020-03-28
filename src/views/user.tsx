import fakeApi from "./fakeApi";
import usePromise from "./usePromise";
import React, { Suspense, useState } from "react";
import {details,users,getNextUser} from './mock'

function getUserDetail(id:number){
  return fakeApi(details[id],3000*Math.random());
}

function useUserDetail(id:number){
  return usePromise(getUserDetail,id);
}

export function NewUserDetail({id}:{id:number}){
  const {detail}=useUserDetail(id);
return <div>{detail}</div>
}

function getUser(id: number) {
  return fakeApi(users[id], 3000 * Math.random());
}

function useUser(id: number) {
  return usePromise(getUser, id);
}

export function NewUser({ id }: { id: number }) {
  const { name } = useUser(id);
  return <h1>{name}</h1>;
}

export function UserDetailWrapper({ id }: { id: number }) {
  return (
      <Suspense fallback={<div>loading user detail...</div>}>
        <NewUserDetail id={id} />
      </Suspense>
  );
}

export function UserWrapper({ id }: { id: number }) {
  return (
      <Suspense fallback={<div>loading user...</div>}>
        <NewUser id={id} />
      </Suspense>
  );
}

export default function UserPage() {
  const [id, setId] = useState(0);
  const handleClick = () => {
    setId(getNextUser(id));
  };
  return (
    <>
      <button onClick={handleClick}>next</button>
      <UserWrapper id={id} />
      <UserDetailWrapper id={id} />
    </>
  );
}