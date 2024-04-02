function maxChar(str) {
  const charTrack = {}
  let max = 0
  let CharMax = ""
  for (let char of str) {
    if (charTrack[char]) {
      charTrack[char] += 1
    } else {
      charTrack[char] = 1
    }
  }
  for (let key in charTrack) {
    if (charTrack[key] > max) {
      max = charTrack[key]
      CharMax = key
    }
  }
  return `the max char is :  ${CharMax} , reps :  ${max} `
}

console.log(maxChar("three"))
