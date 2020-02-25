import React from 'react';

export interface ICounterContext {
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}

const CounterContext = React.createContext<ICounterContext>(null);
export default CounterContext;
