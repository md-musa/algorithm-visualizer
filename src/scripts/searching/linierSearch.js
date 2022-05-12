const elContainer = document.getElementById("elements-container");

export function linierSearch(arr, target, index) {
  console.log(elContainer);
  if (index > 0)
    elContainer.children[index - 1].classList.remove("box", "border-mark");
  elContainer.children[index].classList.add("box", "border-mark");

  if (target === arr[index]) {
    elContainer.children[index].classList.add("border-target");
    console.log("matched");
    return;
  } else {
    setTimeout(() => linierSearch(arr, target, index + 1), 2000);
  }
}
