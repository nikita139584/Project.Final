
import { Product } from "../js/entities/Product.js";

export class CategorySmartWatch {
  generate(CategorySmartWatch) {

    for (let i = 0; i < CategorySmartWatch; i++) {

      const appleWatchSeries9 = new Product(
        "Apple Watch Series 9",
        "../img/Apple Watch Series 9.png",
        499,
        449,
        5
      );

      const samsungGalaxyWatch6 = new Product(
        "Samsung Galaxy Watch 6",
        "../img/Samsung Galaxy Watch 6.webp",
        399,
        349,
        4
      );
      appleWatchSeries9.render();
      samsungGalaxyWatch6.render();
    }
  }
}

