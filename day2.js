// reverse a Number :
function reverse(n) {
  const str = n.toString().split("").reverse().join("")
  if (str[str.length - 1] === "-") {
    return parseInt(str) * -1
  } else {
    return parseInt(str)
  }
}
console.log(reverse(-324))
