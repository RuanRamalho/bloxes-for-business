import React from 'react';
// import { Row } from 'react-bootstrap';
import GlobalStyle from './theme/globalStyles';
import Menu from './components/Menu';
import Header from './components/Header';
import News from './components/News';

function App() {
  return (
    <>
      <GlobalStyle />

      <Menu />
      <Header />

      <News />
    </>
  );
}

export default App;
