import './react-shim.js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './HelloForm.jsx'

let dialog

const main = (selection) => {

  if (!dialog) {
    dialog = document.createElement('dialog')
    ReactDOM.render(<App dialog={dialog} selection={selection} />, dialog)
    document.body.appendChild(dialog)
  }
  
  return dialog.showModal()
}

export const commands = {
  main
}