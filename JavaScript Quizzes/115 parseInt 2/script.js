console.log(parseInt(' 1')) // 1
console.log(parseInt(' 00001')) // parseInt will skip 0s and display 1
console.log(parseInt(' 0100')) // parseInt will skip the first 0, buy count the zeros after one to display 100
console.log(parseInt(' 1e2 ')) // 1
