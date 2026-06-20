import { Category } from "./Category.js";

const phones = new Category(
  "Смартфоны",
  "../img/iphon-Photoroom.png",
  340,
  "Android и iPhone устройства",
  "/category/CategoryPhone.html"
);

const headphones = new Category(
  "Наушники",
  "../img/AirPods-Photoroom.png",
  340,
  "Наушники",
  "/category/CategoryHeadphones.html"
);

const smartwatch = new Category(
  "Умные часы",
  "../img/Apple Watch Series 9.png",
  340,
  "Умные часы",
  "/category/CategorySmartWatch.html"
);

const tablet = new Category(
  "Планшет",
  "../img/iPad Air.jpg",
  340,
  "Планшеты",
  "/category/CategoryTablet.html"
);

phones.render();
headphones.render();
smartwatch.render();
tablet.render();
