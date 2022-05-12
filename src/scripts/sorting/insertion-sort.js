import { swap, graphMaker } from "./index.js";

let i = 0;
let j = i - 1;
let oneGone = true;

export function insertionSort(mainEl, arr, setTimer) {
  if (i === arr.length) {
    console.log("stopped");
    return;
  }
  if (j >= 0 && arr[j + 1] < arr[j]) {
    swap(j + 1, j, arr);
    graphMaker(mainEl, arr);
    j--;
  } else oneGone = false;

  if (oneGone) setTimeout(() => insertionSort(mainEl, arr), 2);
  else {
    oneGone = true;
    i++;
    j = i - 1;
    insertionSort(mainEl, arr);
  }
}
