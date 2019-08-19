type FunInter = (num1: number, num2: number) => number
let add: (num1: number, num2: number) => number

add = (arg1, arg2) => {
  return arg1 + arg2
}

console.log(add(1, 3))
