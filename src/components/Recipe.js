import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({recipe}) => {
  const {setRecipeId, modalRecipe, setModalRecipe} = useContext(ModalContext)
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  
  const handleOpen = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
    setModalRecipe("")
    setRecipeId("")
  }

  const showIngredients = modalRecipe => {

    return(
      [...new Array(16)].map((e,i) => (
        modalRecipe[`strIngredient${i}`]
        ?(<li key={i}>
          { modalRecipe[`strIngredient${i}`]}
          { modalRecipe[`strMeasure${i}`] }
        </li>)
        :null
        
      )).filter(e => e !== null)
    )
  }


  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">
          {recipe.strDrink}
        </h2>
        <img src={recipe.strDrinkThumb} alt={recipe.strDrink} className="card-img-top"/>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setRecipeId(recipe.idDrink)
              handleOpen()
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{modalRecipe.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>
                {modalRecipe.strInstructions}
              </p>
              <img className="img-fluid my-4" src={modalRecipe.strDrinkThumb} alt={modalRecipe.strDrink}/>
              <h3>Ingredientes y Cantidades</h3>
              <ul>
                {
                  showIngredients(modalRecipe)
                }
              </ul>
            </div>
         </Modal>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
