import React from 'react';
import { GlobalStyle } from './style/Global';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <GlobalStyle />
    </div>
  );
}

export default App;
