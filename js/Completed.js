var completed=JSON.parse(localStorage.getItem("MyOrders"))
console.log(completed);
var tableno = JSON.parse(localStorage.getItem("TableNo"));

completed.map(function (ele, index) {
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
    td4.innerText="Completed"
    td4.style.color="Green"
    
    row.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(row);
  });
  