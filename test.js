function qs(arr, lo, hi) {
  if (lo >= hi) {
    return;
  }
  const pivotidx = partition(arr, lo, hi);

  qs(arr, lo, pivotidx - 1);
  qs(arr, pivotidx + 1, hi);
}

function partition(arr, lo, hi) {
  const pivot = arr[hi];
  let idx = lo - 1;
  for (let i = lo; i < hi; i++) {
    if (arr[i] < pivot) {
      idx++;
      const temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;
  return idx;
}

function quicksort(arr) {
  qs(arr, 0, arr.length - 1);
  return arr;
}

console.log(quicksort([1, 3, 2]));
