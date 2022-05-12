import { swap, graphMaker } from "./index.js";

let i = 0;
let j = i + 1;
let oneGone = true;
export function selectionSort(mainEl, graphElements, length) {
  if (j > 1) mainEl.children[j - 2].classList.remove("current");
  mainEl.children[i].classList.add("target");
  mainEl.children[j - 1].classList.add("current");

  if (i === graphElements.length) {
    console.log("stopped");
    return;
  }
  if (j == graphElements.length) {
    oneGone = false;
  }
  if (graphElements[i] > graphElements[j]) {
    swap(i, j, graphElements);
    graphMaker(mainEl, graphElements);
  }

  j++;
  if (oneGone)
    setTimeout(() => selectionSort(mainEl, graphElements, length), 10);
  else {
    oneGone = true;
    i++;
    j = i + 1;
    selectionSort(mainEl, graphElements, length);
  }
}
