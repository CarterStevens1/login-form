const btnlogin = document.querySelector(".loginbtn");
const loginError = document.querySelector(".login-error-msg");
const login = document.querySelector(".login-form");
const closeModal = document.querySelector(".close");
const modal = document.querySelector(".modal");
const openlogin = document.querySelector(".login");
const background = document.querySelector("body");

btnlogin.addEventListener("click", (e) => {
  e.preventDefault();
  const email = login.email.value;
  const password = login.password.value;

  if (email === "user" && password === "web") {
    alert("you have succesffuly logged in");
    location.reload();
  } else {
    loginError.style.opacity = 1;
    modal.style.paddingTop = "3rem";
  }
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  loginError.style.opacity = 0;
  modal.style.paddingTop = "0rem";
  login.email.value = "";
  login.password.value = "";
  background.classList.remove("blur");
});

openlogin.addEventListener("click", () => {
  modal.classList.remove("hidden");
  background.classList.add("blur");
});
