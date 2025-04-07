var payment = JSON.parse(localStorage.getItem("PaymentGateway"));

// confirming order
function ConfirmPayment() {
  localStorage.setItem("pendingOrders", JSON.stringify(payment));
  localStorage.removeItem("PaymentGateway");
}

//validation of all payment  LOGIC HE
function validateUPI() {
  const upiId = document.getElementById("upiId").value;
  const upiError = document.getElementById("upiError");

  function isValid_UPI_ID(upi_Id) {
    let regex = /^[a-zA-Z0-9.-]{2,256}@[a-zA-Z][a-zA-Z]{2,64}$/;
    return regex.test(upi_Id);
  }

  if (isValid_UPI_ID(upiId)) {
    upiError.textContent = "";
    alert("Payment successful via UPI!");
  } else {
    upiError.textContent = "Invalid UPI ID format";
  }
}

// card ka logic
function validateCard() {
  const cardNumber = document.getElementById("dcardNumber").value;
  const cvv = document.getElementById("cvv").value;
  const cardName = document.getElementById("cardName").value;
  const cardError = document.getElementById("cardError");

  const cardNumberRegex = /^\d{16}$/;
  const cvvRegex = /^\d{3}$/;

  if (cardName.trim() !== "") {
    cardError.textContent = "";
    alert("Payment done via Credit Card");
  } else {
    cardError.textContent = "Invalid Card details";
  }
}

// cash on counter
function validateCounter() {
  const orderId = document.getElementById("orderId").value;
  var tableno
  if(JSON.parse(localStorage.getItem("TableNo"))==null){
    var tableno=null
  }
  else{
    var tableno=JSON.parse(localStorage.getItem("TableNo"))

  }
  const counterError = document.getElementById("counterError");
  localStorage.setItem("pendingOrders", JSON.stringify(payment));
  localStorage.removeItem("PaymentGateway");
  if (tableno == null) {
    alert("Please first book table");
  } else if (tableno != orderId) {
    alert("Table no. did not match");
  } else {
    window.location.href = "../html/myorders.html";
  }
}

//validation for card
function formatCardNumber(input) {
  const cardNumber = input.value.replace(/\s/g, "");
  const numericInput = cardNumber.replace(/\D/g, ""); //only int
  const formattedCardNumber = cardNumber.replace(/\d{4}(?=\d)/g, "$& "); // spaces every 4 digits

  if (formattedCardNumber.length <= 19) {
    input.value = formattedCardNumber.substr(0, 19); // 19 ki limit (16+3 spc)
  } else if (
    formattedCardNumber.length > 19 &&
    input.selectionStart === input.selectionEnd
  ) {
    input.value = formattedCardNumber.substr(0, 19); // 19 se jyada nahi jayga
  }
}
// on click ke liye
const paymentMethods = document.querySelectorAll(".category label");
const paymentDetails = document.querySelectorAll(".payment-details > div");

paymentMethods.forEach((method) => {
  method.addEventListener("click", () => {
    paymentDetails.forEach((detail) => {
      detail.style.display = "none";
    });

    const selectedMethod = method.getAttribute("for");
    const selectedDetail = document.querySelector(`.${selectedMethod}-details`);
    if (selectedDetail) {
      selectedDetail.style.display = "block";
    }
  });
});
//net bnking wala

function validateNetBanking() {
  //html se elemen lega jisse kam karna he
  const bankSelect = document.getElementById("bankSelect");
  const accountNumber = document.getElementById("accountNumber");
  const bankError = document.getElementById("bankError");
  //check karega ki koi error mssg he kya
  bankError.textContent = "";
  //check karega is bank select kiya he kya
  if (bankSelect.value === "") {
    bankError.textContent = "Please select your bank.";
  } else if (accountNumber.value === "") {
    bankError.textContent = "Please enter your account number.";
  } else {
    // alert("Payment successful through net banking!");
  }
}
