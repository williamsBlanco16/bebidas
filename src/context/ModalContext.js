import axios from 'axios'
import React, {createContext, useState, useEffect} from 'react'

export const ModalContext = createContext()

const ModalProvider = ({children}) => {
  const [recipeId, setRecipeId] = useState('')
  const [modalRecipe, setModalRecipe] = useState('')

  useEffect(() => {
    if (!recipeId) return
    const getRecipe = async () => {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      const result = await axios.get(URL)
      setModalRecipe(result.data.drinks[0])
    }
    getRecipe()
  },[recipeId])
  return(
    <ModalContext.Provider value={{
      setRecipeId,
      setModalRecipe,
      modalRecipe
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider