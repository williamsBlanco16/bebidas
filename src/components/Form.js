import React, {useContext, useState} from 'react';
import {CategoriaContext} from '../context/CategoriaContext'
import { RecipeContext } from '../context/RecipeContex';

const Form = () => {
  const { categories } = useContext(CategoriaContext)
  const { saveSearch } = useContext(RecipeContext)

  const [search, setSearch] = useState({});

  const handlerChange = e => {
    e.preventDefault()

    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    saveSearch(search)
  }
  return (  
    <form
      onSubmit={handleSubmit}
      className="col-12"
    >
      <fieldset className="text-center">
        <legend>Busca Bebida Por Categoria O Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input 
            type="text"
            name="name"
            className="form-control"
            placeholder="Buscar Por Ingrediente"
            onChange={handlerChange}
          />
        </div>
        <div className="col-md-4">
          <select 
            name="categoria"
            className="form-control"
            onChange={handlerChange}
          >
            <option value=""> Selecciona Categoria</option>
            {
              categories.map(category => (
                <option
                  key={category.strCategory}
                  value={category.strCategory}
                >{category.strCategory}</option>
              ))
            }
          </select>
        </div>
        <div className="col-md-4">
          <input 
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
