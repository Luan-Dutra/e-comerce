import React from 'react';
import { Header } from './components/header/Header';
import { GlobalStyle } from './style/Global';
import { Banner } from './components/Banner/Banner';
import { Banners } from './components/maisBaner/Banners';
//import { Grid } from './appStyle';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Banners />
      <GlobalStyle />
    </>
  );
}

export default App;
