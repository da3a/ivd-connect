import React from 'react';
import logo from './logo.svg';

import BasePage from "./components/BasePage"
import { AppProvider } from "./AppContext"

function App() {
  return (
    <AppProvider>
      <BasePage />
    </AppProvider>
  );
}

export default App;
