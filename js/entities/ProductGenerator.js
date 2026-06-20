// ProductGenerator.js
import { Product } from "./Product.js";

export class ProductGenerator {
  generate(productsCount) {

    for (let i = 0; i < productsCount; i++) {

      const iPhone15 = new Product(
        "iPhone 15",
        "../img/iphon-Photoroom.png",
        999,
        899,
        5
      );
      const SamsungS24 = new Product(
        "Samsung S24",
        "../img/Samsung S24-Photoroom.png",
        999,
        899,
        5
      );
      const GooglePixel8 = new Product(
        "Google Pixel 8",
        "../img/Google Pixel 8.png",
        999,
        899,
        5
      );
      const SonyWH1000XM5 = new Product(
        "Sony WH-1000XM5",
        "../img/Sony WH-1000XM5.png",
        999,
        899,
        5
      );
      const JBLTune520BT = new Product(
        "JBL Tune 520BT",
        "../img/JBL Tune 520BT.png",
        999,
        899,
        5
      );
      const AppleWatchSeries9 = new Product(
        "Apple Watch Series 9",
        "../img/Apple Watch Series 9.png",
        999,
        899,
        5
      );
      const SamsungGalaxyWatch6 = new Product(
        "AirPods",
        "../img/Samsung Galaxy Watch 6.webp",
        999,
        899,
        5
      );
      const AirPods  = new Product(
        "AirPods",
        "../img/AirPods-Photoroom.png",
        999,
        899,
        5
      );
      const iPadAir  = new Product(
        "iPad Air",
        "../img/iPad Air.jpg",
        999,
        899,
        5
      );

      iPhone15.render();
      AppleWatchSeries9.render();
      AirPods.render();
      iPadAir.render();
    }
  }
}

