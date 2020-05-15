import * as React from 'react';
import "./base.scss";
import SignContext from '../component/Top/Right/SignContext';
import RoutePage from './Route';

export default function App() {
  const [success, setSuccess] = React.useState(false)
  return <SignContext.Provider value={{ success, setSuccess }}>
    <RoutePage />
  </SignContext.Provider>
}
