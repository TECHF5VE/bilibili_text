import React from 'react';

export interface IIsSignIn {
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsSIgnInContext = React.createContext<IIsSignIn>(null);

export default IsSIgnInContext;
