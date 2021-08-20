const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      for (const i in collection) {
        callback(collection[i], i, collection)
      }
      return collection
    },

    map: function (collection, callback) {
      const arr = []
      for (const i in collection) {
        arr.push(callback(collection[i], i, collection))
      }
      return arr
    },

    reduce: function (collection, callback, acc) {
      let arr = collection
      if (!acc) {
        acc = collection[0]
        arr = collection.slice(1)
      }
      for (const val of arr) {
        acc = callback(acc, val, arr)
      }
      return acc
    },

    find: function (collection, predicate) {
      for (const element of collection) {
        if (predicate(element)) {
          return element
        }
      }
    },

    filter: function (collection, predicate) {
      const arr = []
      for (const element of collection) {
        if (predicate(element)) {
          arr.push(element)
        }
      }
      return arr
    },

    size: function (collection) {
      return Object.keys(collection).length
    },

    first: function (array, n) {
      return (n ? array.slice(0, n) : array[0])
    },

    last: function (array, n) {
      return (n ? array.slice(array.length - n) : array[array.length - 1])
    },

    compact: function (array) {
      const arr = []
      for (const element of array) {
        if (element) {
          arr.push(element)
        }
      }
      return arr
    },

    sortBy: function (array, callback) {
      const arr = [...array]
      return arr.sort(function (a, b) { return callback(a) - callback(b) })
    },

    flatten: function (array, shallow) {
      const arr = []
      recursion(array, shallow)
      function recursion(newArr, depth) {
        if (!depth) {
          for (const element of newArr) {
            if (!Array.isArray(element)) {
              arr.push(element)
            }
            else {
              recursion(element, false)
            }
          }
        }
        else {
          for (const element of newArr) {
            if (Array.isArray(element)) {
              for (const el of element) {
                arr.push(el)
              }
            }
            else {
              arr.push(element)
            }
          }
        }
      }
      return arr
    },

    uniq: function (array, isSorted, callback) {
      const arr = [...array]
      if (!callback) {
        if (!isSorted) {
          let i = 0
          while (i < arr.length) {
            let comp = arr[i]
            let j = i + 1
            while (j < arr.length) {
              if (comp === arr[j]) {
                arr.splice(j, 1)
              }
              j++
            }
            i++
          }
        }
        else {
          let k = 0
          while (k < arr.length) {
            if (arr[k] === arr[k + 1]) {
              arr.splice(k + 1, 1)
              k--
            }
            k++
          }
        }
      }
      else {
        let m = 0
        while (m < arr.length) {
          let comp = callback(arr[m])
          let n = m + 1
          while (n < arr.length) {
            if (comp === callback(arr[n])) {
              arr.splice(n, 1)
              n--
            }
            n++
          }
          m++
        }
      }
      return arr
    },
    
    keys: function(object){
      const arr = []
      for(const key in object){
        arr.push(key)
      }
      return arr
    },

    values: function(object){
      const arr = []
      for(const key in object){
        arr.push(object[key])
      }
      return arr
    },

    functions: function (object) {
      const arr = []
      for(const key in object){
        if(typeof object[key] === 'function'){
          arr.push(key)
        }
      }
      return arr.sort()
    }
  }
})()
