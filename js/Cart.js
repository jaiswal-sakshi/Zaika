var Cart = JSON.parse(localStorage.getItem("Cart"));

/* footer top showing total lenth */
var totalItem = Cart.length;
if (totalItem==null){
  document.getElementById("total-item").innerText = "0";
  // alert("no item in cart")
}
else{
  document.getElementById("total-item").innerText = totalItem;
}

var totalPrice = Cart.reduce(function (sum, ele, ind, arr) {
  return sum + Number(ele.price);
}, 0);
document.getElementById("Total").innerText = totalPrice;

// mapping a function

Cart.map(function (ele, index) {
  var row = document.createElement("tr");
  var td1 = document.createElement("td");

  var img = document.createElement("img");
  img.setAttribute = ("class", "cardsImg");
  img.src = ele.img;

  td1.append(img);

  var td2 = document.createElement("td");
  td2.innerHTML = ele.name;

  var td3 = document.createElement("td");
  td3.innerHTML = ele.price;

  var td4 = document.createElement("td");
  td4.innerHTML=1 

  var icon = document.createElement("i");
  icon.classList.add("fa", "fa-trash");
  icon.addEventListener("click", function () {
    removeItem(ele, index);
  });
  var td5 = document.createElement("td");
  td5.append(icon);

  row.append(td1, td2, td3, td4, td5);
  document.querySelector("tbody").append(row);
});

// function to add to Cart
function addCart(ele) {
  Cart.push(ele);
  localStorage.setItem("Cart", JSON.stringify(Cart));
}


// removing item from Cart

function removeItem(ele, index) {
  Cart.splice(index, 1);
  localStorage.setItem("Cart", JSON.stringify(Cart));
  window.location.reload();
}


var paymentBtn = document.getElementById("payment");
paymentBtn.addEventListener("click", proceedToPay);

var PaymentGateway = JSON.parse(localStorage.getItem("PaymentGateway"));
function proceedToPay() {
  localStorage.setItem("PaymentGateway", JSON.stringify(Cart));
  localStorage.removeItem("Cart");
  console.log(Cart);
}
