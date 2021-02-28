const email = document.querySelector(".email");
const errorSign = document.querySelector(".error-sign");
const errorMessage = document.querySelector(".error-message");

email.addEventListener("invalid", (event) => {
  event.preventDefault();

  errorSign.classList.add("show-error");
  errorMessage.classList.add("show-error");
  email.classList.add("error-input");
});

email.addEventListener("keydown", () => {
  errorSign.classList.remove("show-error");
  errorMessage.classList.remove("show-error");
  email.classList.remove("error-input");
});
