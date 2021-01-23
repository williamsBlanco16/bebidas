import React, {createContext, useState} from 'react'

export const RecipeContext = createContext()

const RecipeProvider = ({children}) => {
  const [recipe, setRecipe] = useState([])
  const [search, saveSearch] = useState({
    ingredient: '',
    category: ''
  });

  return(
    <RecipeContext.Provider value={{
      saveSearch
    }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider