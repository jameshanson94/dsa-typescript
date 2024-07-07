function binarySearch(arr: number[], target: number): boolean {
  if (!arr || arr.length == 0) {
    return false;
  }
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let middle_value = arr[mid];

    if (target === middle_value) {
      return true;
    }
    if (target < middle_value) {
      high = mid - 1;
    } else if (target > middle_value) {
      low = mid + 1;
    }
  }

  return false;
}

export default binarySearch;
