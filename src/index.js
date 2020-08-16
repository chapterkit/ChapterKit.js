import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

const App = function() {
  return (
    <div>Hello World</div>
  )
}

const view = App('chapterkit')

const element = document.getElementById('app')
ReactDOM.render(view, element)