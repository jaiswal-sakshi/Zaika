var Cart = JSON.parse(localStorage.getItem("Cart")) || [];

document.getElementById("total-item").innerText = Cart.length;

var totalPrice = Cart.reduce(function (sum, ele) {
  return sum + Number(ele.price);
}, 0);
document.getElementById("Total").innerText = totalPrice;

Cart.map(function (ele, index) {
  var row = document.createElement("tr");

  var td1 = document.createElement("td");
  var img = document.createElement("img");
  img.classList.add("cardsImg");
  img.src = ele.img;
  img.alt = ele.name;
  td1.append(img);

  var td2 = document.createElement("td");
  td2.innerText = ele.name;

  var td3 = document.createElement("td");
  td3.innerText = ele.price;

  var td4 = document.createElement("td");
  td4.innerText = 1;

  var td5 = document.createElement("td");
  var icon = document.createElement("i");
  icon.classList.add("fa", "fa-trash");
  icon.addEventListener("click", function () {
    removeItem(index);
  });
  td5.append(icon);

  row.append(td1, td2, td3, td4, td5);
  document.querySelector("tbody").append(row);
});

function addCart(ele) {
  Cart.push(ele);
  localStorage.setItem("Cart", JSON.stringify(Cart));
}

function removeItem(index) {
  Cart.splice(index, 1);
  localStorage.setItem("Cart", JSON.stringify(Cart));
  window.location.reload(); // Or re-render the cart dynamically
}

var paymentBtn = document.getElementById("payment");
paymentBtn.addEventListener("click", proceedToPay);

function proceedToPay() {
  console.log(Cart);
  localStorage.setItem("PaymentGateway", JSON.stringify(Cart));
  localStorage.removeItem("Cart");
}
