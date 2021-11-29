function threeLargestNumbers(array) {
  let arrayMax = [];
  for (let i = 0; i < 3; i++) {
    let max = Math.max(...array);
    arrayMax.push(max);
    array.splice(array.indexOf(max), 1);
  }
  arrayMax.sort((a, b) => a - b);
  return arrayMax;
}

console.log(threeLargestNumbers(array));
exports.threeLargestNumbers = threeLargestNumbers;
