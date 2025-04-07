document.querySelector("form").addEventListener("submit", SignIn);
var SignInData;

if (localStorage.getItem("SignInData") === null) {
  SignInData = [];
} else {
  SignInData = JSON.parse(localStorage.getItem("SignInData"));
}

function SignIn(event) {
  event.preventDefault();
  console.log("object");

  var Username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var CPassword = document.getElementById("CPassword").value;

  var resultElement = document.getElementById("result"); // Added this line

  if (Username === "") {
    resultElement.innerHTML = "Enter Username*";
    return false;
  } else if (email === "") { // Changed 'CPassword' to 'email'
    resultElement.innerHTML = "Enter your Email*";
    return false;
  } else if (password === "") {
    resultElement.innerHTML = "Enter your Password*";
    return false;
  } else if (password.length < 6) {
    resultElement.innerHTML = "Password must be at least six characters";
    return false;
  } else if (CPassword !== password) {
    resultElement.innerHTML = "Password Didn't match";
    return false;
  } else {
    // Removed redundant 'else if' condition
    var userObj = {
      name: Username,
      email: email,
      password: password,
    };
    localStorage.setItem("SignInData", JSON.stringify(SignInData));

    var popup = document.querySelector(".popup"); // Added this line
    popup.classList.add("open-slide");
    return false;
  }
}

var popup = document.getElementById("popup")
popup.addEventListener("click",CloseSlide);
function CloseSlide() {
  popup.classList.remove("open-slide");
}
