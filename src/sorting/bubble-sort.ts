function bubbleSort(numbers: number[]): void {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let tmp = numbers[j + 1];
        numbers[j + 1] = numbers[j];
        numbers[j] = tmp;
      }
    }
  }
}

export default bubbleSort;
