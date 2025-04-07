document.querySelector("form").addEventListener("submit", chieflogin);
function chieflogin() {
  event.preventDefault();
  var id = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var resultElement = document.getElementById("result");

  if (id == "Chieflogin@zaika.com" && password == "zaika@123") {
    window.location.href = "../html/Pendingorder.html";
  } else {
    var popup = document.querySelector(".popup"); // Added this line
    popup.classList.add("open-slide");
    resultElement.innerHTML = "Invalid Email or Password";
    return false;
  }
}

var popup = document.getElementById("popup");
popup.addEventListener("click", CloseSlide);
function CloseSlide() {
  popup.classList.remove("open-slide");
}
