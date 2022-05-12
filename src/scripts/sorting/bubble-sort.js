import { swap, graphMaker } from "./index.js";

let i = 0;
let j = i + 1;
let oneGone = true;
export function bubbleSort(mainEl, graphElements, length, setTime) {
  if (i === graphElements.length) {
    console.log("stopped");
    return;
  }
  if (j == graphElements.length - i) {
    oneGone = false;
  }
  if (graphElements[j] > graphElements[j + 1]) {
    swap(j, j + 1, graphElements);
    graphMaker(mainEl, graphElements);
  }
  j++;
  if (oneGone) setTimeout(() => bubbleSort(mainEl, graphElements, length), 10);
  else {
    oneGone = true;
    i++;
    j = 0;
    bubbleSort(mainEl, graphElements, length);
  }
}
