import React from 'react';
import Header from './Header'
import Form from './Form'
import CategoriaProvider from '../context/CategoriaContext'

const App = () => {

  return (
    <CategoriaProvider>
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <Form/>
        </div>
      </div>
    </CategoriaProvider>
  );
}

export default App;
