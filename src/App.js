import React from 'react';
import { Header,Table, Footer } from './components'; 
import { GlobalStyles } from './global';


function App() {
  return (
    <>
    <GlobalStyles />
    <div className="App">
        <Header />
        <Table />
        <Footer />
    </div>
    </>
  );
}

export default App;
