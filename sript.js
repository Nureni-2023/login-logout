const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");
const container = document.getElementById("container");

signinBtn.addEventListener("click", function () {
  container.classList.remove("right-panel-active");
});

signupBtn.addEventListener("click", function () {
  container.classList.add("right-panel-active");
});
