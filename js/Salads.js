var SaladObj;
if (JSON.parse(localStorage.getItem("Cart")) == null) {
  var SaladObj = [];
} else {
  var SaladObj = JSON.parse(localStorage.getItem("Cart"));
}
SaladData = [
  {
    name: "Tomato Salad",
    // reviews:,
    description:
      "Bursting with ripe flavors, vibrant tomatoes mingle with greens, drizzled in tangy dressing for a fresh garden delight.",
    img: "../src/Salads/img1.jpg",
    price: "450",
  },
  {
    name: "Fattoush",
    // reviews:,
    description:
      "Middle Eastern magic in every bite, crispy pita and veggies dance with herbs, an aromatic journey of textures and tastes.",
    img: "../src/Salads/img2.jpg",
    price: "750",
  },
  {
    name: "Romaine",
    // reviews:,
    description:
      "Crisp green canvas, perfect for culinary creativity. Versatile leaves elevate salads with crunch and refreshing simplicity.",
    img: "../src/Salads/img3.jpg",
    price: "375",
  },
  {
    name: "Pear Salad",
    // reviews:,
    description:
      "Sweet meets savory, juicy pears nestled in greens, topped with nuts and cheese for a balanced symphony of flavors.",
    img: "../src/Salads/img4.jpg",
    price: "520",
  },
  {
    name: "Arugula Salad",
    // reviews:,
    description:
      "Peppery perfection, arugula forms a zesty base. Innovative pairings create a bold, textured dance on the palate.",
    img: "../src/Salads/img5.jpg",
    price: "485",
  },
  {
    name: "Summer Bliss Salad",
    // reviews:,
    description:
      "A rainbow on your plate, textures and hues blend for a refreshing summer medley that's a pure joy to savor.",
    img: "../src/Salads/img6.jpg",
    price: "485",
  },
  {
    name: "Strawberry Almond",
    // reviews:,
    description:
      "A harmony of contrasts, juicy strawberries partner with crunchy almonds, yielding a blend of sweetness and richness.",
    img: "../src/Salads/img7.jpg",
    price: "165",
  },
  {
    name: "Healthy Food Plate",
    // reviews:,
    description:
      "Wholesome balance beckons. A nourishing ensemble of veggies, proteins, and grains for a guilt-free feast.",
    img: "../src/Salads/img8.jpg",
    price: "725",
  },
  {
    name: "Palio Salad",
    // reviews:,
    description:
      "Mediterranean allure captured. Fresh elements unite, honoring ancient flavors with a modern culinary twist.",
    img: "../src/Salads/img9.jpg",
    price: "789",
  },
  {
    name: "Berry Burst Salad",
    // reviews:,
    description:
      "Nature's candy delights. Berries steal the show, mingling with greens in a vibrant burst of taste and color.",
    img: "../src/Salads/img10.jpg",
    price: "467",
  },
  {
    name: "Mahalo Poke Bowl",
    // reviews:,
    description:
      "Tropical dreams on a plate. Fresh fish, rice, and veggies create a Hawaiian-inspired melody of flavors and textures.",
    img: "../src/Salads/img11.jpg",
    price: "445",
  },
  {
    name: "Fruity Fiesta ",
    // reviews:,
    description:
      "A jubilant celebration of fruits' sweetness. Every bite a burst of happiness, a colorful party for the taste buds.",
    img: "../src/Salads/img12.jpg",
    price: "645",
  },
  {
    name: "Kivi Berry Salad",
    // reviews:,
    description:
      "Kiwi and berries unite in a tangy-sweet embrace. A symphony of exotic and familiar, dancing with deliciousness.",
    img: "../src/Salads/img13.jpg",
    price: "597",
  },
  {
    name: "Legumes Salad",
    // reviews:,
    description:
      "Nutrient-rich blend of beans, a hearty medley. Wholesome and satisfying, a tribute to plant-based goodness.",
    img: "../src/Salads/img14.jpg",
    price: "485",
  },
  {
    name: "Verdant Fusion",
    // reviews:,
    description:
      "Shades of green harmonize, a garden's melody. Textures and flavors unite in a bowl of fresh, verdant delight.",
    img: "../src/Salads/img15.jpg",
    price: "454",
  }
];

SaladData.map(function (ele) {
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
  SaladObj.push(ele);
  localStorage.setItem("Cart", JSON.stringify(SaladObj));
}
