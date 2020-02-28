import React from 'react';
import { Header, Footer } from './components'; 
import { GlobalStyles } from './global';


function App() {
  return (
    <>
    <GlobalStyles />
    <div className="App">
        <Header />
        <Footer />
    </div>
    </>
  );
}

export default App;
