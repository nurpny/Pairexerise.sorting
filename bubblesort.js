function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      //if a swap needs to happen
      if (array[j] > array[j + 1]) {
        swap(array, j);
      }
    }
  }
  return array
}

function bubbleSortRecurse(array) {
  if (array.length <= 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i);
    }
  }
  return bubbleSort(array.slice(0, array.length - 1)).concat(array[array.length - 1])
}

function swap(anArr, j) {
  const oldJ = anArr[j]
  anArr[j] = anArr[j + 1]
  anArr[j + 1] = oldJ
}


