export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export function getDifferentRandomTwoNumbers(min: number, max: number) {
  let result = [];

  const firstNumber = getRandomIntInclusive(min, max);
  let secondNumber: number = 0;

  while (true) {
    secondNumber = getRandomIntInclusive(min, max);
    if (firstNumber !== secondNumber) {
      break;
    }
  }

  result.push(firstNumber, secondNumber);
  return result;
}
