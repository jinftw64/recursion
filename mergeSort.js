const mergeSort = (unsortedArray) => {
  if (unsortedArray.length > 1) {
    const midIndex = unsortedArray.length / 2; // find mid point of unsorted array
    const left = unsortedArray.slice(0, midIndex);
    const right = unsortedArray.slice(midIndex, unsortedArray.length);

    mergeSort(left);
    mergeSort(right);

    let i, j, k;
    i = j = k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        unsortedArray[k] = left[i];
        i++;
      } else {
        unsortedArray[k] = right[j];
        j++;
      }

      k++;
    }

    while (i < left.length) {
      unsortedArray[k] = left[i];
      i++;
      k++;
    }

    while (j < right.length) {
      unsortedArray[k] = right[j];
      j++;
      k++;
    }

    return unsortedArray;
  }
}

console.log(mergeSort([12, 11, 13, 5, 6, 7]))
