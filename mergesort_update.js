
function split(wholeArray) {

  const len = wholeArray.length
  let firstHalf=wholeArray.slice (0,Math.floor(len/2))
  let secondHalf=wholeArray.slice(Math.floor(len/2))

    return [firstHalf, secondHalf];
  }



function merge(array1, array2){

  const sortedArr = new Array(array1.length + array2.length);
  let k = 0;
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      sortedArr[k++] = array1[i++]
    } else {
      sortedArr[k++] = array2[j++];
    }
  }
  while (i < array1.length) {
    sortedArr[k++] = array1[i++];
  }
  while (j < array2.length) {
    sortedArr[k++] = array2[j++];
  }
  return sortedArr;
}



function mergeSort(array) {

  if (array.length <= 1){
    return array
  }
let [firstHalf, secondHalf] =split(array)
return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}
