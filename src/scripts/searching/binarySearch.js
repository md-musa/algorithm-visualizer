const elContainer = document.getElementById("elements-container");

export function binarySearch(arr, target, low, high) {
  for (let i = 0; i < arr.length; ++i) {
    elContainer.children[i].classList.remove(
      "box",
      "border-mark",
      "border-target"
    );
  }
  if (low > high) return;
  let mid = parseInt((low + high) / 2);
  elContainer.children[low].classList.add("box", "border-mark");
  elContainer.children[high].classList.add("box", "border-mark");
  elContainer.children[mid].classList.add("border-target");

  if (target === arr[mid]) {
    console.log(`index = ${mid}, element = ${arr[mid]}`);
    console.log("stopped");
    return;
  }
  if (target < arr[mid]) {
    setTimeout(() => binarySearch(arr, target, low, mid - 1), 2000);
  } else {
    setTimeout(() => binarySearch(arr, target, mid + 1, high), 2000);
  }
}
