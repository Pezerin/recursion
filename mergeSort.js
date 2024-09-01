const mergeSort = (arr) => {
  // If array length reduced to one return array
  if (arr.length <= 1) {
    return arr;
  }

  // Recursively reduce array to individual parts
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  let i = 0;
  let j = 0;
  const sorted = [];

  // Merge individual arrays, put lowest value first
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  // Merge remaining values
  while (i < left.length) {
    sorted.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sorted.push(right[j]);
    j++;
  }

  return sorted;
};
