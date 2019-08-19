const Thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback)
    }
  }
}

function f(a, cb) {
  cb(a)
}

let ft = Thunk(f)
ft('1')(console.log)