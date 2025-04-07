var pendingOrders = JSON.parse(localStorage.getItem("pendingOrders"));
// console.log(pendingOrders);
var renderOrder;
if (JSON.parse(localStorage.getItem("ongoingOrder")) == null) {
  var renderOrder=[]
}
else{
  var renderOrder=JSON.parse(localStorage.getItem("ongoingOrder"));
}
// var ongoingOrder=JSON.parse
var tableno=JSON.parse(localStorage.getItem("TableNo"))
console.log(tableno);

pendingOrders.map(function (ele, index) {
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
  startBtn.innerText = "Start Order";

  btndiv.append(startBtn);
  td4.append(btndiv);

  startBtn.addEventListener("click", function () {
    renderData(ele,index);
  });


  row.append(td1, td2, td3, td4);
  document.querySelector("tbody").append(row);
});


function renderData(ele,index) {
  renderOrder.push(ele);
  localStorage.setItem("ongoingOrder", JSON.stringify(renderOrder));
  pendingOrders.splice(index,1)
  localStorage.setItem("pendingOrders", JSON.stringify(pendingOrders));
  window.location.reload()
}
