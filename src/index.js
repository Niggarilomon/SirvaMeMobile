import React from 'react';
import { Root } from "native-base";
import Routes from './routes';
import './config/StatusBarConfig';

export default function App() {

  return (
    <Root>
      <Routes />
    </Root>
  );
};

