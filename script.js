const { add, subtract, multiply, divide } = require('./src/math.js')

if (process.argv[2] == 'add') {
  nums = parseArg(process.argv)
  add(...nums)
}

if (process.argv[2] == 'subtract') {
  nums = parseArg(process.argv)
  subtract(...nums)
}

if (process.argv[2] == 'multiply') {
  nums = parseArg(process.argv)
  multiply(...nums)
}

if (process.argv[2] == 'divide') {
  nums = parseArg(process.argv)
  divide(...nums)
}

function parseArg(arg) {
  arg.splice(0, 3)
  return arg
}
