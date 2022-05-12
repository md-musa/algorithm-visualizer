export function getSelectedAlgorithm() {
  const linierSearchEl = document.getElementById("linier-search");
  const binarySearchEl = document.getElementById("binary-search");

  if (linierSearchEl.checked) return "LINIER";
  else return "BINARY";
}

export function randomItems(length) {
  const randomElements = new Uint8Array(length);
  crypto.getRandomValues(randomElements);
  return randomElements;
}
