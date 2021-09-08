import React from 'react';
import GlobalStyle from './theme/globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Olá!</h1>
      {console.log('Olá')}
    </>
  );
}

export default App;
