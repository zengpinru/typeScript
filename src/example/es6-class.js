class Parent {
  age = 18
  constructor (name) {
    this.name = name
  }
  getName () {
    return this.name
  }
}
const p = new Parent('zeng')
console.log(Parent.prototype)
console.log(p)

// const obj = {
//   name: 'zeng',
//   getName () {
//     return this.name
//   }
// }
// console.log(obj)