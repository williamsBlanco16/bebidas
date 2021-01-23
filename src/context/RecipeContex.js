import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react'

export const RecipeContext = createContext()

const RecipeProvider = ({children}) => {
  const [recipes, setRecipes] = useState([])
  const [search, saveSearch] = useState({
    name: '',
    category: ''
  });
  const { name, category } = search
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`

  const searchvalid = name && category

  useEffect(() => {
    const getRecipe = async () => {
      const response = await axios.get(URL)
      setRecipes(response.data.drinks)
    }
    searchvalid && getRecipe()
  },[URL, searchvalid])

  return(
    <RecipeContext.Provider value={{
      saveSearch,
      recipes
    }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider