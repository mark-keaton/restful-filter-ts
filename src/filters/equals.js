'use strict'

module.exports = value => {
  return {
    operator: '$eq', 
    operatorSQL: '=', 
    value: value
  }
}