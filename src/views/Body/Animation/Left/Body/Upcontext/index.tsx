import CounterContext from "./Component/CounterContext";
import React from "react";

export default function UpContext({ children }: React.PropsWithChildren<{}>) {
  const [list, setList] = React.useState([]);
  return (
    <CounterContext.Provider value={{ list, setList }}>
      {children}
    </ CounterContext.Provider >
  )
}