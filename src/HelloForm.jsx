import React from 'react'
import { useState } from 'react'
import { Text, Color } from 'scenegraph'

const HelloForm = ({ selection, dialog }) => {

  const [name, setName] = useState('')

  const onInputChange = (e) => {
    setName(e.target.value)
    console.log('onInputChanged()')
  }

  const onDoneClick = () => {
    const newText = new Text()

    newText.text = name
    
    newText.styleRanges = [
      {
        length: newText.text.length,
        fill: new Color('red'),
        fontSize: 50
      }
    ]

    selection.insertionParent.addChild(newText)

    newText.moveInParentCoordinates(100, 100)

    dialog.close()
  }

  return (
    <section
      style={{ width: 300 }}
    >
      <h1>React Plugin</h1>

      <label>
        <span>What is your name?</span>
        <input onChange={onInputChange} />
      </label>

      <p>{`Hello ${name}`}</p>

      <footer>
        <button
          uxp-variant="cta"
          onClick={onDoneClick}
        >
          Done
        </button>
      </footer>
    </section>
  )
}

export default HelloForm
