var ChineseObj;
if (JSON.parse(localStorage.getItem("Cart")) == null) {
  var ChineseObj = [];
} else {
  var ChineseObj = JSON.parse(localStorage.getItem("Cart"));
}
ChineseData = [
  {
    name: "Crispy pork noodles",
    description:
      "Savor the irresistible harmony of tender pork and crispy textures in a delightful noodle dish, boasting a perfect balance of flavors and textures.",
    img: "../src/Chinese/image1.jpg",
    price: "356",
  },
  {
    name: "Pork Donburi",
    description:
      "Experience the rich umami of succulent pork nestled atop a bed of steaming rice, Pork Donburi bowl comfort and satisfaction in every mouthful.",
    img: "../src/Chinese/image2.jpg",
    price: "750",
  },
  {
    name: "Sweet Chili Vegan Meatballs",
    description:
      "Indulge in the contrast of sweet and spicy as you savor these delectable",
    img: "../src/Chinese/image3.jpg",
    price: "375",
  },
  {
    name: "Salmon Fillet",
    description:
      "Relish the elegance of a perfectly cooked salmon fillet, its tender flesh offering a delicate blend of flavors that capture the essence of the ocean.",
    img: "../src/Chinese/image4.jpg",
    price: "878",
  },
  {
    name: "Scones",
    description:
      "Enjoy the timeless delight of freshly baked scones crumbly and soft, clotted cream and jam for a classic British afternoon tea experience.",
    img: "../src/Chinese/image5.jpg",
    price: "435",
  },
  {
    name: "Brown Slice Eggplants",
    description:
      "Delight in the earthy and robust  of brown-sliced eggplants, savory, experience.",
    img: "../src/Chinese/image6.jpg",
    price: "754",
  },
  {
    name: "Oatmeal and Carrot Patties",
    description:
      "Savor the wholesome goodness of oatmeal and carrot patties, a nutritious into savory patties that offer a satisfying combination of textures and flavors.",
    img: "../src/Chinese/image7.jpg",
    price: "856",
  },
  {
    name: "Shushi",
    description:
      "Embark on a journey of culinary artistry with abc delicate and exquisite Japanese dish featuring expertly crafted vinegared rice, fresh seafood, and other delectable ingredients, beautifully presented for a delightful gastronomic experience.",
    img: "../src/Chinese/image8.jpg",
    price: "566",
  },
  {
    name: "Simiti Sarayi",
    description:
      "Transport your taste buds to the rich 'Simiti Sarayi,' likely referring to a ing in 'simit,' a popular circular sesame-crusted bread, accompanied by a range of Turkish treats and teas, creating a warm and inviting culinary haven.",
    img: "../src/Chinese/image9.jpg",
    price: "367",
  },
  {
    name: "Roasted tomato soup with soudough bun",
    description:
      "Indulge in comfort witn, a pairing that promises atoes and the hearty satisfaction of freshly baked bread.",
    img: "../src/Chinese/image10.jpg",
    price: "485",
  },
  {
    name: "Cooked Crepe",
    description:
      "Experience the delicate delight of a cooked crepe, its thin and tender texture serving as a versatile canvas for both sweet and savory fillings, providing a delightful culinary treat abc efg hij klm nopcgtf .",
    img: "../src/Chinese/image11.jpg",
    price: "900",
  },
  {
    name: "Chinese Plates",
    description:
      "Embark on a journey through Chinese cuisine with a selection of diverse and flavorful dishes served on Chinese plates, showcasing the rich culinary heritage and intricate flavors of this cultural gastronomy.",
    img: "../src/Chinese/image12.jpg",
    price: "843",
  },
  {
    name: "Delicious vegetarian sandwich with red onions and sun dried tomatoes",
    description:
      "Indulge in a delectable vegetarian sandwich that combines onions, enures that's sure to satisfy.",
    img: "../src/Chinese/image13.jpg",
    price: "437",
  },
  {
    name: "Satay Tofu Noodle Soup",
    description:
      "Savor the fusion of Southeast Asian flavors in a Satay Tofu Noodle Soup, where tender tofu and noodles swim in a fragrant abc and savory broth infused with the aromatic essence of satay, creating a comforting and hearty dish.",
    img: "../src/Chinese/image14.jpg",
    price: "285",
  },
  {
    name: "Burrito",
    description:
      "Experience a handheld delight with a burrito, a flavorful and hearty wrap typically a combination of seasoned meats, beans, rice, vegetables, and sauces, offering a satisfying culinary adventure in every bite abc efg hij klm asfhgyuh jhagtsde jhgdj djhgb jkhsu asdsad.",
    img: "../src/Chinese/image15.jpg",
    price: "650",
  }
];


ChineseData.map(function (ele) {
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
  ChineseObj.push(ele);
  localStorage.setItem("Cart", JSON.stringify(ChineseObj));
}
