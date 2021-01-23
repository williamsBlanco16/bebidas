import React from 'react';
import Header from './Header'
import Form from './Form'
import CategoriaProvider from '../context/CategoriaContext'
import RecipeProvider from '../context/RecipeContex'

const App = () => {

  return (
    <CategoriaProvider>
      <RecipeProvider>
        <Header/>
        <div className="container mt-5">
          <div className="row">
            <Form/>
          </div>
        </div>
      </RecipeProvider>
    </CategoriaProvider>
  );
}

export default App;
