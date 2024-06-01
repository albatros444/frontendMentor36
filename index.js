const darkModebutton = document.querySelector(".darkModebutton");
const buttonCheckBox = document.querySelector(".buttonCheckBox");
const body = document.querySelector("body");

////on loading//////
let isDarkMode = document.cookie
  .split(";")
  .map((cookie) => cookie.split("="))
  .find((el) => el[0] === "darkMode");
console.log(isDarkMode);
if (isDarkMode) {
  if (isDarkMode[1] === "true") {
    body.classList.add("darkMode");
    document.querySelector(".buttonCheckBox").checked = "true";
  }
}

darkModebutton.addEventListener("click", () => {
  if (buttonCheckBox.checked) {
    body.classList.add("darkMode");
    document.cookie = "darkMode=true; expires=Thu, 31 Dec 2099 23:59:59 GMT";
  } else {
    body.classList.remove("darkMode");
    document.cookie = "darkMode=false";
  }
});
