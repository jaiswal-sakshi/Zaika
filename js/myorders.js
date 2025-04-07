var MyOrders = JSON.parse(localStorage.getItem("MyOrders"));

var tableno = JSON.parse(localStorage.getItem("TableNo"));

var popup = document.querySelector(".popup"); // Added this line
if (MyOrders.length != 0) {
  setTimeout(function () {
    popup.classList.add("open-slide");
    

    document.getElementById("main-container").style.display = "flex";
    document.getElementById("main-container1").style.display = "none";
  }, 3000);
}
var popup1 = document.getElementById("popup");
    popup1.addEventListener("click", CloseSlide);
    function CloseSlide() {
      popup1.classList.remove("open-slide");
    }

MyOrders.map(function (ele) {
  var card = document.createElement("div");
  card.setAttribute("class", "Cards");

  var img = document.createElement("img");
  //   img.setAttribute = ("class", "cardsImg");
  img.src = ele.img;

  var descDiv = document.createElement("div");
  descDiv.setAttribute("class", "description");

  var name = document.createElement("h2");
  name.innerHTML = ele.name;

  var priceRating = document.createElement("div");
  priceRating.setAttribute("class", "PriceRating");

  var descDiv = document.createElement("div");
  descDiv.setAttribute("class", "description");

  var name = document.createElement("h2");
  name.innerHTML = ele.name;

  var description = document.createElement("p");
  description.innerText = ele.description;

  descDiv.append(name, description);

  var hoverDiv = document.createElement("div");
  hoverDiv.setAttribute("class", "HoverDiv");

  var btn = document.createElement("button");
  btn.innerText = "Add cart";

  card.append(img, descDiv, hoverDiv);
  document.getElementById("main-container").append(card);

  btn.addEventListener("click", function () {
    addCart(ele);
  });
});
