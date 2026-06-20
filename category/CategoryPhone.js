
import { Product } from "../js/entities/Product.js";

export class CategoryPhone {
  generate(CategoryPhone) {

    for (let i = 0; i < CategoryPhone; i++) {

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

      iPhone15.render();
      SamsungS24.render();
      GooglePixel8.render();
    }
  }
}

