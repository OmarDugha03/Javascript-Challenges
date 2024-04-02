function capitalize(string) {
  const title = []
  const t = string.split(" ")
  for (let f of t) {
    title.push(f[0].toUpperCase() + f.slice(1))
  }
  return title.join(" ")
}
console.log(capitalize("this is a try"))
