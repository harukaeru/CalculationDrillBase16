import React, { Component } from 'react'
import Generator from '../Generator'
import configs, { plusConfig } from '../configs'
import Table from './Table'

const store = {}

const clear = () => {
  const answers = document.querySelectorAll(".answer")
  answers.forEach(answer => {
    answer.value = ""
  })
}

export default class Config extends Component {
  constructor(props) {
    super(props)

    const generator = new Generator(plusConfig)
    this.state = {
      problemSchemes: _.range(0, 100).map(() => generator.generate())
    }
    window.changeProblems = this.changeProblems.bind(this)
  }

  changeProblems(config) {
    const generator = new Generator(config)
    const problemSchemes = _.range(0, 100).map(() => generator.generate())

    this.setState({ problemSchemes })
    clear()

  }

  render() {
    return <div className="config">
      {configs.map((config, i) => <button className="btn" key={`config-${i}`} onClick={() => this.changeProblems(config)}>
        {config.name}
      </button>)}
      <Table problemSchemes={this.state.problemSchemes} />
    </div>
  }
}
