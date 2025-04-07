var ItalianObj;
if (JSON.parse(localStorage.getItem("Cart")) == null) {
  var ItalianObj = [];
} else {
  var ItalianObj = JSON.parse(localStorage.getItem("Cart"));
}
ItalianData = [
  {
    name: "Chickpea Crepes",
    // reviews:,
    description:
      "Chickpea Crepes: Delicate & gluten-free, filled with savory delights. A blend of tradition & innovation, a feast for senses.",
    img: "../src/Italian/img1.jpg",
    price: "450",
  },
  {
    name: "Cooked Fish",
    // reviews:,
    description:
      "Cooked Fish: Tender flakes, seasoned to perfection. A sea-to-table symphony, simplicity that brims with flavor.",
    img: "../src/Italian/img2.jpg",
    price: "750",
  },
  {
    name: "Panzenella",
    // reviews:,
    description:
      "Panzenella: Tuscan artistry in a bowl. Vibrant veggies & crusty bread unite, soaked in zesty dressing.",
    img: "../src/Italian/img3.jpg",
    price: "375",
  },
  {
    name: "Sushi with Meat",
    // reviews:,
    description:
      "Sushi with Meat: East meets West in a roll. Sushi's grace with meaty embrace, fusion that tantalizes.",
    img: "../src/Italian/img4.jpg",
    price: "520",
  },
  {
    name: "Fried Shrimp",
    // reviews:,
    description:
      "Fried Shrimp: Crispy treasures from the sea. Juicy shrimp, golden coat, a bite-sized indulgence.",
    img: "../src/Italian/img5.jpg",
    price: "485",
  },
  {
    name: "Som Tam Salad",
    // reviews:,
    description:
      "Som Tam Salad: Thai flavor explosion. Spicy, sweet, sour, and crunchy unite in a papaya-based dance.",
    img: "../src/Italian/img6.jpg",
    price: "878",
  },
  {
    name: "Tandoori Prawns",
    // reviews:,
    description:
      "Tandoori Prawns: Indian tandoor magic on display. Spiced prawns, charred perfection, a royal treat.",
    img: "../src/Italian/img7.jpg",
    price: "564",
  },
  {
    name: "Creamy Sausage",
    // reviews:,
    description:
      "Creamy Sausage: Comfort in a dish. Rich sausage in velvety sauce, a hearty delight.",
    img: "../src/Italian/img8.jpg",
    price: "542",
  },
  {
    name: "Spatula Stev",
    // reviews:,
    description:
      "Spatula Stev: Culinary theatre, a sizzling show. Sizzling meats & veggies, aroma swirling, senses engaged.",
    img: "../src/Italian/img9.jpg",
    price: "254",
  },
  {
    name: " Grilled Cajun Shrimp",
    // reviews:,
    description:
      "Grilled Cajun Shrimp: Spice-dusted shrimp, kissed by flames. Cajun charm meets grill's smoky embrace.",
    img: "../src/Italian/img10.jpg",
    price: "491",
  },
  {
    name: "Grilled Chi-Kabab",
    // reviews:,
    description:
      "Grilled Chi-Kabab: Skewered perfection, flavor-packed. Marinated chicken, grill-seared for a mouthful of delight",
    img: "../src/Italian/img11.jpg",
    price: "765",
  },
  {
    name: "Cheesy Rice Balls",
    // reviews:,
    description:
      "Cheesy Rice Balls: Crispy shells, gooey core. Rice-bound cheese, fried to golden splendor.",
    img: "../src/Italian/img12.jpg",
    price: "554",
  },
  {
    name: "Thai Chicken",
    // reviews:,
    description:
      "Thai Chicken: Fragrant embrace of lemongrass & spices. A taste of Thailand's culinary poetry.",
    img: "../src/Italian/img13.jpg",
    price: "489",
  },
  {
    name: "Macher Chop",
    // reviews:,
    description:
      "Macher Chop: Bengal's delight, fish croquettes. Crispy exterior, savory fish within, a cultural treasure.",
    img: "../src/Italian/img14.jpg",
    price: "782",
  },
  {
    name: "Zucchini Mushrom",
    // reviews:,
    description:
      "Zucchini Mushrom: Earthy indulgence, sautéed harmony. Zucchini & mushrooms dance in flavors both gentle and rich.",
    img: "../src/Italian/img15.jpg",
    price: "445",
  },
];

ItalianData.map(function (ele) {
  var card = document.createElement("div");
  card.setAttribute("class", "Cards");

  var img = document.createElement("img");
  //   img.setAttribute = ("class", "cardsImg");
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
  ItalianObj.push(ele);
  localStorage.setItem("Cart", JSON.stringify(ItalianObj));
}
