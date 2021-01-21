import React from 'react'
import ReactDom from 'react-dom'
import './bootstrap.min.css'
import './index.css'

import App from './components/App'

ReactDom.render(
  <App/>,
  document.getElementById('root')
)

module?.hot.accept()