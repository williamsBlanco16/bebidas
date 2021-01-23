import React, { createContext, useState, useEffect } from 'react'
import axios   from 'axios'

export const CategoriaContext = createContext()

const CategoriaProvider = ({children}) => {
  const [categories, setCategories] = useState([]);

  const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

  useEffect(()=>{
    const getCategories = async() => {
      const response = await axios.get(URL)
      setCategories(response.data.drinks);
    }
    getCategories()
  },[URL])
  return(
    <CategoriaContext.Provider value={{
      categories
    }}>
      {children}
    </CategoriaContext.Provider>
  )
}

export default CategoriaProvider;