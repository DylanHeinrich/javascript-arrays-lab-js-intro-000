var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens = [...kittens, name]
  return kittens
}

function destructivelyPrependKitten(name){
  kittens = [name, ...kittens]
  return kittens
}

function destructivelyRemovelastKitten() {
  kittens.pop()
  return kittens
}
