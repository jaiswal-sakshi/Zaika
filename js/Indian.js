var IndianObj;
if (JSON.parse(localStorage.getItem("Cart")) == null) {
  var IndianObj = [];
} else {
  var IndianObj = JSON.parse(localStorage.getItem("Cart"));
}
IndianData = [
  {
    name: "Kulcha Thali",
    // reviews:,
    description:
      "Kulcha Thali: A splendid North Indian feast. Soft, aromatic kulchas, an array of curries, chutneys & sweets. India's flavors.",
    img: "../src/Indian/image1.jpg",
    price: "450",
  },
  {
    name: "Beyti Kebab",
    // reviews:,
    description:
      "Beyti Kebab: Tender grilled kebab wrapped in soft flatbread, harmonizing juicy meat with aromatic spices.",
    img: "../src/Indian/image2.jpg",
    price: "750",
  },
  {
    name: "Chickpea Stir Fry",
    // reviews:,
    description:
      "Chickpea Stir Fry: Nutrient-packed chickpeas wok-fried with vibrant veggies, a wholesome and flavorful medley.",
    img: "../src/Indian/image3.jpg",
    price: "375",
  },
  {
    name: "Spicy Chicken Curry",
    // reviews:,
    description:
      "Spicy Chicken Curry: Succulent chicken immersed in rich, fiery curry, an indulgent explosion of taste and heat.",
    img: "../src/Indian/image4.jpg",
    price: "520",
  },
  {
    name: " Mutter Kulcha",
    // reviews:,
    description:
      "Mutter Kulcha: Soft kulcha bread beside peas simmered in fragrant spices, a classic combo of soft and spiced.",
    img: "../src/Indian/image5.jpg",
    price: "485",
  },
  {
    name: " Hot Chicken Wings",
    // reviews:,
    description:
      "Hot Chicken Wings: Crispy wings coated in a tantalizing hot sauce, a fiery delight for the taste buds.",
    img: "../src/Indian/image6.jpg",
    price: "485",
  },
  {
    name: " Turmeric Chicken",
    // reviews:,
    description:
      "Turmeric Chicken: Grilled chicken marinated in golden turmeric and herbs, a radiant fusion of flavor and wellness.",
    img: "../src/Indian/image7.jpg",
    price: "485",
  },
  {
    name: " Mendu Vada ",
    // reviews:,
    description:
      "Mendu Vada: Crispy South Indian fritters with a fluffy inside, a savory treat with a delightful crunch.",
    img: "../src/Indian/image8.jpg",
    price: "150",
  },
  {
    name: "  Special Samosa",
    // reviews:,
    description:
      "Special Samosa: Triangular parcels of spiced filling encased in crisp pastry, a special blend of textures and spices.",
    img: "../src/Indian/image9.jpg",
    price: "150",
  },
  {
    name: "Khachapuri Megruli",
    // reviews:,
    description:
      "Khachapuri Megruli: Georgian cheese bread, a decadent masterpiece where gooey cheese meets heavenly dough.",
    img: "../src/Indian/image10.jpg",
    price: "485",
  },
  {
    name: " Tangy Prawns",
    // reviews:,
    description:
      "Tangy Prawns: Plump prawns bathed in zesty marinade, a tantalizing symphony of tanginess and seafood richness.",
    img: "../src/Indian/image11.jpg",
    price: "485",
  },
  {
    name: "Birayani Thali",
    // reviews:,
    description:
      "Birayani Thali: Fragrant rice, aromatic spices, and succulent meat in a grand feast of flavors on a single platter.",
    img: "../src/Indian/image12.jpg",
    price: "485",
  },
  {
    name: "Vada Pav",
    // reviews:,
    description:
      "Vada Pav: Spiced potato fritter in a soft bun, an iconic Indian street food that's both satisfying and spicy.",
    img: "../src/Indian/image13.jpg",
    price: "120",
  },
  {
    name: "Pilau Rice",
    // reviews:,
    description:
      "Pilau Rice: Aromatic rice cooked with fragrant spices, a splendid side that elevates any main dish.",
    img: "../src/Indian/image14.jpg",
    price: "750",
  },
  {
    name: "Butternut Squash",
    // reviews:,
    description:
      "Butternut Squash: Velvety butternut squash, roasted to perfection, a sweet and savory delight that melts in the mouth.",
    img: "../src/Indian/image15.jpg",
    price: "750",
  }
];


IndianData.map(function (ele) {
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
  reviews.append(icon1,icon2,icon3,icon4)

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
  IndianObj.push(ele);
  localStorage.setItem("Cart", JSON.stringify(IndianObj));
}
