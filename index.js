const darkModebutton = document.querySelector(".darkModebutton");
const buttonCheckBox = document.querySelector(".buttonCheckBox");
const body = document.querySelector("body");

darkModebutton.addEventListener("click", () => {
  if (buttonCheckBox.checked) {
    body.classList.add("darkMode");
  } else {
    body.classList.remove("darkMode");
  }
});
