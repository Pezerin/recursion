// Iterative fibonacci function
const fibs = (n) => {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
};

// Recursive fibonacci function
const fibsRec = (n) => {
  if (n < 2) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let arr = fibsRec(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};
