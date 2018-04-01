import React from 'react'
import ReactDOM from 'react-dom'
import Generator from './Generator'
import { plusConfig } from './configs'
import Config from './components/Config'
import Table from './components/Table'


// View
class Solver {
  constructor(problemScheme) {
    this.problemScheme = problemScheme
  }

  ask() {
    console.log(this.problemScheme.getDisplay())
    const userAnswer = '23'
    const formedUserAnswer = userAnswer.replace('\n', '')

    if (formedUserAnswer == this.problemScheme.getAnswer()) {
      console.log("CORRECT!!")
    } else {
      console.log(`boo. Answer is ${this.problemScheme.getAnswer()}`)
    }
  }
}

// Use


ReactDOM.render(
  <div>
    <Config />
  </div>,
  document.getElementById('root')
)

