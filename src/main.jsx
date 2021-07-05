require('./react-shim')
const React = require('react')
const ReactDOM = require('react-dom')

const App = require('./HelloForm.jsx')

let dialog

const main = (selection) => {

  if (!dialog) {
    dialog = document.createElement('dialog')
    ReactDOM.render(<App dialog={dialog} selection={selection} />, dialog)
    document.body.appendChild(dialog)
  }
  
  return dialog.showModal()
}

module.exports = {
  commands: {
    main
  }
}
