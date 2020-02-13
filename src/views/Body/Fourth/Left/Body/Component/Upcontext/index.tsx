import { CounterContext } from "../CounterContext";
import React from "react";

export default function Component({ children }: React.PropsWithChildren<{}>) {
  const [list, setList] = React.useState([]);
  return (
    <CounterContext.Provider value={{ list, setList }}>
      {children}
    </ CounterContext.Provider >
  )
}