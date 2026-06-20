
import { Product } from "../js/entities/Product.js";

export class CategoryTablet {
  generate(CategoryTablet) {

    for (let i = 0; i < CategoryTablet; i++) {

      const iPadAir = new Product(
        "iPad Air",
        "../img/iPad Air.jpg",
        799,
        749,
        5
      );

      iPadAir.render();
    }
  }
}

