function palindrome(str) {
  const reversed = str.toString().split("").reverse().join("")
  if (str === reversed) {
    return true
  }
  return false
}
console.log(palindrome("hi"))
