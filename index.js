// Write your solution here!
const pets = ['Milo', 'Otis', 'Garfield']

//1
const append = pets
append.push('Odie')
console.log(append)
//push method literally means to "append" or add to the end of the array

//2
const prepend = pets
prepend.unshift('Odie')
//unshift adds element to the beginning of the array. Literally prepends array.

//3
const removeLast = pets
removeLast.pop()
//.pop() removes last element of the array. "pops off"
