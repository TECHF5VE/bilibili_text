import React from 'react';

export interface IIsSignOn {
  isSignOn: boolean;
  setIsSignOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsSignOn = React.createContext<IIsSignOn>(null);

export default IsSignOn;
