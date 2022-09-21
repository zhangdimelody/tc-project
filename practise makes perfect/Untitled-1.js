// curry
// const curry_fn = curry(fn);
// fn(1, 2, 3) == curry_fn(1)(2)(3);
function curry(fn) {
  return function curried(...arg) {
    // 传进来的参数大于fn 的参数个数，则直接执行
    if (arg.length >= fn.length) { 
      return fn.apply(this, arg)
    }
    // 如果个数小于的话，继续返回一个function，递归调用curried，
    // 并且把后续的参数拼接起来它
    return function (...arg2) {
      return curried.apply(this, arg.concat(arg2))
    }
  };
}

// bind
// func.bind(obj)
function bind(obj) {
  const self = this;
  return function () {
    return self.apply(obj, arguments)
  }
}
// quickSort
function quickSort(arr) {
  let pivot = Math.floor(arr.length / 2)
  let pivotNum = arr.splice(pivot, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivotNum) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
// 冒泡
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length-1; j++) {
      if (arr[j] > arr[j+1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return arr;
}

// Promise all
Promise.all(promiseArr.map(item => { 
  return item.catch(e => { console.log(e) }) })
).then(res => { res })

// new
let obj = new A('abc')
// ---
let obj = {}
obj.__proto__ = A.prototype
A.call(obj, 'abc')

// 最长子串



// script start
// async2 end
// Promise
// script end
// async1 end
// promise1
// promise2
// setTimeout

// 二叉树深度
function getDeep(node) {
  if (node === null) {
    return 0
  } else {
    let leftDepth = getDeep(node.left)
    let rightDepth = getDeep(node.right)
    let childDepth = leftDepth > rightDepth ? leftDepth : rightDepth
    return 1 + childDepth
  }
}