var BeveragesObj;
if (JSON.parse(localStorage.getItem("Cart")) == null) {
  var BeveragesObj = [];
} else {
  var BeveragesObj = JSON.parse(localStorage.getItem("Cart"));
}
BeveragesData = [
  {
    name: "Broccoli Green Vitality Juice",
    // reviews:,
    description:
      "Experience a burst of health with our Broccoli Green Vitality Juice, packed with nutrient-rich broccoli and revitalizing greens. ",
    img: "../src/Beverages/img1.jpg",
    price: "150",
  },
  {
    name: "Pure Lemon Juice",
    // reviews:,
    description:
      "Refresh your senses with the tangy delight of Pure Lemon Juice, zesty and invigorating. Refresh your senses with the tangy delight of Pure Lemon Juice, zesty and invigorating",
    img: "../src/Beverages/img2.jpg",
    price: "80",
  },
  {
    name: "Blood Orange Mint Mocktail",
    // reviews:,
    description:
      "Indulge in the exquisite blend of flavors with our Blood Orange Mint Mocktail, a refreshing  of citrus and cool mint. ",
    img: "../src/Beverages/img3.jpg",
    price: "180",
  },
  {
    name: "Hot Latte Coffee",
    // reviews:,
    description:
      "Savor the comforting embrace of our Hot Latte Coffee, a perfect harmony of rich espresso and velvety steamed milk.",
    img: "../src/Beverages/img4.jpg",
    price: "120",
  },
  {
    name: "Aviation Cocktail",
    // reviews:,
    description:
      "Take off to new heights with our Aviation Cocktail, a balanced fusion of gin, maraschino liqueur, and lemon.",
    img: "../src/Beverages/img5.jpg",
    price: "250",
  },
  {
    name: "Chocolate Milkshake",
    // reviews:,
    description:
      "Indulge your sweet cravings with our luscious Chocolate Milkshake, a blend of creamy chocolate goodness.",
    img: "../src/Beverages/img6.jpg",
    price: "90",
  },
  {
    name: "Pomegranate Gin Cocktail",
    // reviews:,
    description:
      "Experience perfect harmony of tart and sweet with our Pomegranate Gin Cocktail",
    img: "../src/Beverages/img7.jpg",
    price: "220",
  },
  {
    name: "Lemon Tea",
    // reviews:,
    description:
      "Sip serenity with our soothing Lemon Tea, a delightful infusion of zesty lemon and fragrant tea leaves. delightful infusion of zesty lemon and fragrant tea leaves",
    img: "../src/Beverages/img8.jpg",
    price: "60",
  },
  {
    name: "Boba Coffee",
    // reviews:,
    description:
      "Discover a delightful texture and taste with our Boba Coffee, blending the richness of coffee with the fun of boba pearls.",
    img: "../src/Beverages/img9.jpg",
    price: "180",
  },
  {
    name: "Red Wine",
    // reviews:,
    description:
      "Unwind with the elegance of our Red Wine, boasting notes of fruit and oak for a refined taste. ",
    img: "../src/Beverages/img10.jpg",
    price: "320",
  },
  {
    name: "Orange Juice",
    // reviews:,
    description:
      "Experience pure refreshment with our Orange Juice, bursting with the natural goodness of ripe oranges.",
    img: "../src/Beverages/img11.jpg",
    price: "70",
  },
  {
    name: "Cappuccino Coffee",
    // reviews:,
    description:
      "Indulge in the velvety allure of our Cappuccino Coffee, expertly blending rich espresso and frothed milk.",
    img: "../src/Beverages/img12.jpg",
    price: "110",
  },
  {
    name: "Marshmallow Coffee",
    // reviews:,
    description:
      "Experience the cozy charm of our Marshmallow Coffee, where creamy coffee meets the sweetness of marshmallows.",
    img: "../src/Beverages/img13.jpg",
    price: "150",
  },
  {
    name: "Iced Black Coffee",
    // reviews:,
    description:
      "Chill out with the bold simplicity of our Iced Black Coffee, delivering a refreshing caffeine kick. delivering a refreshing caffeine kick.",
    img: "../src/Beverages/img14.jpg",
    price: "80",
  },
  {
    name: "Brew House Cooler",
    // reviews:,
    description:
      "Quench your thirst with our invigorating Brew House Cooler, a blend of assorted flavors capturing the essence of relaxation.",
    img: "../src/Beverages/img15.jpg",
    price: "160",
  }
];
BeveragesData.map(function (ele) {
  var card = document.createElement("div");
  card.setAttribute("class", "Cards");

  var img = document.createElement("img");
  img.src = ele.img; 

  var descDiv = document.createElement("div");
  descDiv.setAttribute("class", "description");

  var name = document.createElement("h2");
  name.innerHTML = ele.name;

  var description = document.createElement("p");
  description.innerText = ele.description;

  var priceRating = document.createElement("div");
  priceRating.setAttribute("class", "PriceRating");

  var price = document.createElement("h3");
  price.innerHTML = ele.price;

  var icon1 = document.createElement("i");
  icon1.classList.add("fa", "fa-star");

  var icon2 = document.createElement("i");
  icon2.classList.add("fa", "fa-star");

  var icon3 = document.createElement("i");
  icon3.classList.add("fa", "fa-star");

  var icon4 = document.createElement("i");
  icon4.classList.add("fa", "fa-star-half-stroke");

  var reviews = document.createElement("div");
  reviews.innerHtml = ele.reviews;
  reviews.append(icon1, icon2, icon3, icon4);


  priceRating.append(price, reviews);

  descDiv.append(name, description, priceRating);

  var hoverDiv = document.createElement("div");
  hoverDiv.setAttribute("class", "HoverDiv");

  var btn = document.createElement("button");
  btn.innerText = "Add cart";

  hoverDiv.append(btn);

  card.append(img, descDiv, hoverDiv);
  document.getElementById("main-container").append(card);

  btn.addEventListener("click", function () {
    addCart(ele);
  });
});

function addCart(ele) {
  BeveragesObj.push(ele);
  localStorage.setItem("Cart", JSON.stringify(BeveragesObj));
}
