import React from 'react';
import Header from './Header'
import Form from './Form'
import CategoriaProvider from '../context/CategoriaContext'
import RecipeProvider from '../context/RecipeContex'
import RecipeList from './RecipeList';
import ModalProvider from '../context/ModalContext'

const App = () => {

  return (
    <CategoriaProvider>
      <RecipeProvider>
        <ModalProvider>
          <Header/>
          <div className="container mt-5">
            <div className="row">
              <Form/>
            </div>
            <RecipeList/>
          </div>
        </ModalProvider>
      </RecipeProvider>
    </CategoriaProvider>
  );
}

export default App;
