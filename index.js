const numbers = [1, 2, 3, 4, 5, 6];
// the `for..of` loop is iterating through the values rather than the indices
for (const num of numbers) {
  console.log(`Number at index ${num} is ${numbers[num]}`);
}

// the `forEach()` os iterating through the indices of the array
numbers.forEach((num, index) => {
  console.log(`Number at index ${index} is ${num}`);
});

// for cycle terates over array items using an incrementing index variable.
for (let index = 0; index < numbers.length; index++) {
  const num = numbers[index];
  console.log(`Number at index ${index} is ${num}`);
}
