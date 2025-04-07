document.querySelector("form").addEventListener("submit", login);
var Logindata = JSON.parse(localStorage.getItem("SignInData"));
// console.log(Logindata);

function login() {
  event.preventDefault();

  var resultElement = document.getElementById("result");

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  for (var i = 0; i < Logindata.length; i++) {
    if (email == Logindata[i].email && password == Logindata[i].password) {
      validCredentials = true;
      window.location.href = "../index.html";
      break; // Exit the loop once valid credentials are found
    } else {
      var popup = document.querySelector(".popup"); // Added this line
      popup.classList.add("open-slide");
      resultElement.innerHTML = "Invalid Email or Password";
      return false;
    }
  }
}

var popup = document.getElementById("popup");
popup.addEventListener("click", CloseSlide);
function CloseSlide() {
  popup.classList.remove("open-slide");
}
