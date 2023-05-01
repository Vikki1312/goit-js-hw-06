const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const formEmail = formElements.email.value;

  const formPassword = formElements.password.value;

  if (!formEmail || !formPassword) {
    alert("Все поля должны быть заполнены");
  }
  console.log({ formEmail, formPassword });
  form.reset();
}
