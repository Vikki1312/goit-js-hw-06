const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  refs.nameLabel.textContent = event.currentTarget.value;
  if (refs.nameLabel.textContent.length === 0) {
    refs.nameLabel.textContent = "Anonymous";
  }
});
