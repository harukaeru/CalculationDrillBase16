import React, { Component } from 'react'

const checkAnswer = (ev, i, problemScheme, table) => {
  if (ev.key == 'Enter'){
    const answer = problemScheme.getAnswer()

    const userAnswer = ev.target.value.replace(/[\s,]/, '').toUpperCase()
    if (userAnswer === answer) {
      problemScheme.result = 'correct'
    } else {
      problemScheme.result = 'incorrect'
    }
    const nextElem = document.getElementById(`answer-${i+1}`)
    if (nextElem) {
      nextElem.focus()
    }
    table.forceUpdate()
  }
}

class Table extends Component {
  render() {
    const { problemSchemes } = this.props
    return <table>
      <tbody>
        <tr><th>問題</th><th>解答</th><th>正誤</th></tr>
        {problemSchemes && problemSchemes.map((problemScheme, i) => <tr className="core" key={i}>
          <td className="problem">{problemScheme.getDisplay()}</td>
          <td className="your-answer">
            <input className="answer" id={`answer-${i}`} type="text" onKeyPress={(ev) => checkAnswer(ev, i, problemScheme, this)} />
          </td>
          {problemScheme.result && <td className={`answer ${problemScheme.result}`}>
            {problemScheme.result === 'correct' ? <span className="correct">◯</span> : <span className="incorrect">{`✕  ${problemScheme.getAnswer()}`}</span>}
          </td>}
        </tr>)}
      </tbody>
    </table>
  }
}

export default Table
