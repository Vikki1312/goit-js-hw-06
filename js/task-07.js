const fontSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

textSize.style.fontSize = fontSizeControl.value + "px";

fontSizeControl.addEventListener("input", (event) => {
  fontSizeControl.value === textSize;
  textSize.style.fontSize = event.currentTarget.value + "px";
});
