var ongoingOrder = JSON.parse(localStorage.getItem("ongoingOrder"));
console.log(ongoingOrder);
var completedOrder;

if (JSON.parse(localStorage.getItem("MyOrders")) == null) {
  var completedOrder = [];
} else {
  var completedOrder = JSON.parse(localStorage.getItem("MyOrders"));
}

var tableno = JSON.parse(localStorage.getItem("TableNo"));

ongoingOrder.map(function (ele, index) {
  var row = document.createElement("tr");
  var td1 = document.createElement("td");

  var img = document.createElement("img");
  img.setAttribute = ("class", "cardsImg");
  img.src = ele.img;

  td1.append(img);

  var td2 = document.createElement("td");
  td2.innerHTML = ele.name;

  var td3 = document.createElement("td");
  td3.innerHTML = tableno;

  var td4 = document.createElement("td");

  var btndiv = document.createElement("div")
  btndiv.setAttribute("class","NUB")
  
  var startBtn = document.createElement("button");
  startBtn.setAttribute("id", "startOrder");
  startBtn.innerText = "Complete";


  btndiv.append(startBtn);
  td4.append(btndiv);

  startBtn.addEventListener("click", function () {
    CompleteOrder(ele,index);
  });


  row.append(td1, td2, td3, td4);
  document.querySelector("tbody").append(row);
});

function CompleteOrder(ele, index) {
  completedOrder.push(ele);
  console.log("Rendering is working");
  console.log(completedOrder);
  localStorage.setItem("MyOrders", JSON.stringify(completedOrder));
  ongoingOrder.splice(index, 1);
  localStorage.setItem("ongoingOrder", JSON.stringify(ongoingOrder));
  window.location.reload();
}
