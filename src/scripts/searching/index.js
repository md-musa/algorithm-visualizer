import { linierSearch } from "./linierSearch.js";
import { binarySearch } from "./binarySearch.js";
import { getSelectedAlgorithm } from "./util.js";

function renderUi(arr) {
  const elContainer = document.getElementById("elements-container");
  for (let i = 0; i < arr.length; ++i) {
    const a = `<div class="boxBf">${arr[i]}</div>`;
    elContainer.insertAdjacentHTML("beforeEnd", a);
  }
}
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
renderUi(items);

const targetEl = document.getElementById("target");
const startEl = document.getElementById("start-visualizing");
const stepTimeEl = document.getElementById("step-time");
startEl.addEventListener("click", () => {
  const selectedAlgorithm = getSelectedAlgorithm();
  const searchItem = parseInt(targetEl.value);
  const stepTime = parseInt(stepTimeEl.value);

  if (selectedAlgorithm === "LINIER")
    linierSearch(items, searchItem, 0, stepTime);
  else if (selectedAlgorithm === "BINARY")
    binarySearch(items, searchItem, 0, items.length - 1, stepTime);
});
