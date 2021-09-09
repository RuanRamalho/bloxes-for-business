import React from 'react';
import GlobalStyle from './theme/globalStyles';
import Header from './components/Header';
import News from './components/News';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <News />
    </>
  );
}

export default App;
