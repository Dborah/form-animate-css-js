const btnLogin = document.querySelector(".bt.-login");
const form = document.querySelector("form");

btnLogin  = addEventListener("click", event => {
    event.preventDefault();
    form.classList.add("form-hide");
});