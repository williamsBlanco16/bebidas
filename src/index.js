import react from 'react'
import ReactDom from 'react-dom'


ReactDom.render(
  react.createElement('div',null,'hola mundo version 2'),
  document.getElementById('root')
)

module?.hot.accept()