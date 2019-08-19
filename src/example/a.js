const func1 = Symbol('func1')

export default class Obj {
  [func1] () {
    console.log('私有方法')
  }
}
