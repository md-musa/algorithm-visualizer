import { selectionSort } from "./selection-sort.js";
import { bubbleSort } from "./bubble-sort.js";
import { insertionSort } from "./insertion-sort.js";
const mainEl = document.querySelector("#main-section");

const selectionBtn = document.getElementById("selection-sort");
const bubbleBtn = document.getElementById("bubble-sort");
const insertionBtn = document.getElementById("insertion-sort");

const startVisualizingBtn = document.getElementById("start-visualizing");

startVisualizingBtn.addEventListener("click", () => {
  if (selectionBtn.checked) selectionSort(mainEl, randomValue(50));
  else if (bubbleBtn.checked) bubbleSort(mainEl, randomValue(50));
  else if (insertionBtn.checked) insertionSort(mainEl, randomValue(50));
});

function randomValue(length) {
  const randomElements = new Uint8Array(length);
  crypto.getRandomValues(randomElements);
  return randomElements;
}

export const graphMaker = (element, graphElements) => {
  element.innerHTML = "";
  for (let j = 0; j < graphElements.length; j++) {
    const a = `<div class="data" style="height:${graphElements[j]}px"></div>`;
    element.insertAdjacentHTML("beforeend", a);
  }
};
graphMaker(mainEl, randomValue(50));

export function swap(a, b, arr) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
