import PlusProblemScheme from './schemes/PlusProblemScheme'
import MinusProblemScheme from './schemes/MinusProblemScheme'
import MultipleProblemScheme from './schemes/MultipleProblemScheme'
import DivideProblemScheme from './schemes/DivideProblemScheme'
import RemainderProblemScheme from './schemes/RemainderProblemScheme'
import DivideAndRemainderProblemScheme from './schemes/DivideAndRemainderProblemScheme'

const randomChoice = (arr) => arr[Math.floor(arr.length * Math.random())]

export default class ProblemSchemeGenerator {
  constructor(config) {
    this.config = config
  }

  getLeft() {
    return randomChoice(this.config.leftRange())
  }

  getRight(left, calcType) {
    return randomChoice(this.config.rightRange(left, calcType))
  }

  generate() {
    const left = this.getLeft()
    const calcType = (
      typeof this.config.calcTypes === 'string') ?
        this.config.calcTypes : randomChoice(this.config.calcTypes)

    switch (calcType) {
      case '+': {
        return new PlusProblemScheme(left, this.getRight(left, calcType))
      }
      case '-': {
        return new MinusProblemScheme(left, this.getRight(left, calcType))
      }
      case '*': {
        return new MultipleProblemScheme(left, this.getRight(left, calcType))
      }
      case '//': {
        return new DivideProblemScheme(left, this.getRight(left, calcType))
      }
      case '%': {
        return new RemainderProblemScheme(left, this.getRight(left, calcType))
      }
      case '/%': {
        return new DivideAndRemainderProblemScheme(left, this.getRight(left, calcType))
      }
    }
  }
}
