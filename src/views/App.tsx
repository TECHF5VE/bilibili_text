import * as React from 'react';
import "./base.scss";
import RoutePage from './Route';
import IsSignOn from './SignOn/isSignOn';
import IsSignIn from './SignIn/isSignIn';
import SignContext from 'src/component/Top/Right/SignContext';

export default function App() {
  const [success, setSuccess] = React.useState(false);
  const [isSignOn, setIsSignOn] = React.useState(null);
  const [isSignIn, setIsSignIn] = React.useState(null);

  return <SignContext.Provider value={{ success, setSuccess }}>
    <IsSignIn.Provider value={{ isSignIn, setIsSignIn}}>
      <IsSignOn.Provider value={{ isSignOn, setIsSignOn }}>
    <RoutePage />
    </IsSignOn.Provider>
    </IsSignIn.Provider>
  </SignContext.Provider>
}
