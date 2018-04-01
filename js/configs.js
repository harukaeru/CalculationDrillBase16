import _ from 'lodash'

export const plusConfig = {
  name: '1桁の足し算',
  leftRange: () => _.range(0x1, 0x10),
  rightRange: (left) => _.range(0x1, 0x10),
  calcTypes: ['+']
}

const configs = [
  plusConfig,
  {
    name: '1桁の引き算(解がマイナスは無し)',
    leftRange: () => _.range(0x1, 0x10),
    rightRange: (left) => _.range(0x1, left + 0x1),
    calcTypes: ['-']
  }, {
    name: '1桁の足し算と引き算',
    leftRange: () => _.range(0x1, 0x10),
    rightRange: (left, calcType) => (
      calcType === '+' ? _.range(0x1, 0x10) : _.range(0x1, left + 0x1)
    ),
    calcTypes: ['+', '-']
  }, {
    name: '1桁と2桁の足し算',
    leftRange: () => _.range(0x1, 0x10),
    rightRange: (left) => _.range(0x10, 0x21),
    calcTypes: ['+']
  }, {
    name: '10から20までの2桁の足し算',
    leftRange: () => _.range(0x10, 0x21),
    rightRange: (left) => _.range(0x10, 0x21),
    calcTypes: ['+']
  }, {
    name: 'FFまでの2桁の足し算',
    leftRange: () => _.range(0x1, 0x100),
    rightRange: (left) => _.range(0x1, 0x100),
    calcTypes: ['+']
  }, {
    name: 'FFFまでの3桁の足し算',
    leftRange: () => _.range(0x1, 0x1000),
    rightRange: (left) => _.range(0x1, 0x1000),
    calcTypes: ['+']
  }, {
    name: 'FFFFまでの4桁の足し算',
    leftRange: () => _.range(0x1, 0x10000),
    rightRange: (left) => _.range(0x1, 0x10000),
    calcTypes: ['+']
  }, {
    name: '2桁の引き算(解がマイナスは無し)',
    leftRange: () => _.range(0x1, 0x100),
    rightRange: (left) => _.range(0x1, left + 0x1),
    calcTypes: ['-']
  }, {
    name: '3桁の引き算(解がマイナスは無し)',
    leftRange: () => _.range(0x1, 0x1000),
    rightRange: (left) => _.range(0x1, left + 0x1),
    calcTypes: ['-']
  }, {
    name: '1桁の掛け算',
    leftRange: () => _.range(0x1, 0x10),
    rightRange: (left) => _.range(0x1, 0x10),
    calcTypes: ['*']
  }, {
    name: '2桁の掛け算',
    leftRange: () => _.range(0x1, 0x100),
    rightRange: (left) => _.range(0x1, 0x100),
    calcTypes: ['*']
  }, {
    name: '2桁と1桁の割り算(小数点以下切り捨て)',
    leftRange: () => _.range(0x10, 0x21),
    rightRange: (left) => _.range(0x1, 0x10),
    calcTypes: ['//']
  }, {
    name: '2桁の割り算(小数点以下切り捨て)',
    leftRange: () => _.range(0x10, 0x100),
    rightRange: (left) => _.range(0x1, left + 0x01),
    calcTypes: ['//']
  }, {
    name: '2桁と1桁の剰余(mod)',
    leftRange: () => _.range(0x01, 0x21),
    rightRange: (left) => _.range(0x1, 0x10),
    calcTypes: ['%']
  }, {
    name: '2桁と1桁のあまり付きの割り算(x...yの形式で答えよ)',
    leftRange: () => _.range(0x01, 0x21),
    rightRange: (left) => _.range(0x1, 0x10),
    calcTypes: ['/%']
  }, {
    name: '複合',
    leftRange: () => _.range(0x01, 0x100),
    rightRange: (left) => _.range(0x1, 0x100),
    calcTypes: ['+', '-', '*', '//', '%', '/%']
  }, {
    name: '鬼',
    leftRange: () => _.range(0x01, 0x10000),
    rightRange: (left) => _.range(0x1, 0x10000),
    calcTypes: ['+', '-', '*', '//', '%', '/%']
  }
]

export default configs
