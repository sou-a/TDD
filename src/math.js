function add(...nums) {
  commonBehaivior(...nums)
  const sum = [...nums].reduce(function (num1, num2) {
    return parseInt(num1) + parseInt(num2)
  })
  if (sum > 1000) {
    return 'too big'
  }
  return sum
}

function subtract(...nums) {
  commonBehaivior(...nums)
  const subtract = [...nums].reduce(function (num1, num2) {
    return parseInt(num1) - parseInt(num2)
  })
  if (Math.sign(subtract) === -1) {
    return 'negative number'
  }
  return subtract
}

function multiply(...nums) {
  commonBehaivior(...nums)
  const multiply = [...nums].reduce(function (num1, num2) {
    return parseInt(num1) * parseInt(num2)
  })
  if (multiply > 1000) {
    return 'big big number'
  }
  return multiply
}

function divide(...nums) {
  commonBehaivior(...nums)

  const divide = [...nums].reduce(function (num1, num2) {
    return parseInt(num1) / parseInt(num2)
  })
  const array = divide.toString().split('.')
  if (array[1] && array[1].length > 3) {
    return Number(divide.toFixed(3))
  }
  return divide
}

function commonBehaivior(...nums) {
  if ([...nums].length > 30) {
    throw new Error('Too Many Arguments!')
  }
  for (var i = 0; i < [...nums].length; i++) {
    if (!Number.isFinite(parseInt([...nums][i]))) {
      throw new Error('引数に数字以外のものが含まれています')
    }
  }
}

module.exports = { add, subtract, multiply, divide, commonBehaivior }
