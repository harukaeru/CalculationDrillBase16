import _LeftRightProblemScheme from './_LeftRightProblemScheme'
import { to16 } from '../utils'

export default class DivideProblemScheme extends _LeftRightProblemScheme {
  getDisplay() {
    return `${to16(this.left)} \/\/ ${to16(this.right)} =`
  }

  getAnswer() {
    return to16(Math.floor(this.left / this.right))
  }
}
