import _LeftRightProblemScheme from './_LeftRightProblemScheme'
import { to16 } from '../utils'

export default class RemainderProblemScheme extends _LeftRightProblemScheme {
  getDisplay() {
    return `${to16(this.left)} % ${to16(this.right)} =`
  }

  getAnswer() {
    return to16(this.left % this.right)
  }
}
