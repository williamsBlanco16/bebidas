import React, {useContext} from 'react';
import {CategoriaContext} from '../context/CategoriaContext'

const Form = () => {
  const { categories } = useContext(CategoriaContext)
  return (
    <form className="col-12">
      <fieldset>
        <legend>Busca Bebida Por Categoria O Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input 
            type="text"
            name="nombre"
            className="fomr-control"
            placeholder="Buscar Por Ingrediente"
          />
        </div>
        <div className="col-md-4">
          <select 
            name="categoria"
            className="form-control"
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
