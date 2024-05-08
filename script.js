const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm-password");

const passwordContainer = document.querySelector(".password > div");

confirmPasswordField.addEventListener("blur", () => {
  if (passwordField.value !== confirmPasswordField.value) {
    const errorStyle = "1px solid red";

    passwordField.style.outline = errorStyle;
    confirmPasswordField.style.outline = errorStyle;

    if (!document.querySelector(".password .error")) {
      const error = document.createElement("p");
      error.textContent = "*Passwords do not match";
      error.classList.add("error");

      passwordContainer.appendChild(error);
    }
  } else {
    passwordField.style.outline = "";
    confirmPasswordField.style.outline = "";

    const error = document.querySelector(".error");

    if (error) {
      passwordContainer.removeChild(error);
    }
  }
});
