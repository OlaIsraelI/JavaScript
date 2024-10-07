function insertionSort (arr){
  for (let i=1; i < arr.length; i++){
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current){
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

let array = [9, 3, 6, 8, 4, 2, 7, 1, 0];
console.log("sorted array: ", insertionSort(array));