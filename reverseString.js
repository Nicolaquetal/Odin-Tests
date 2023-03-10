function reverseString(a) {
    let res = ""
    for (let e in a){
        
        res = a[e]+res
    }
    return res
  }
  
  module.exports = reverseString;