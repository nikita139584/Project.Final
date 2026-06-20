
import { Product } from "../js/entities/Product.js";

export class CategoryHeadphones {
  generate(CategoryHeadphones) {

    for (let i = 0; i < CategoryHeadphones; i++) {

      const SonyWH1000XM5 = new Product(
        "Sony WH-1000XM5",
        "../img/Sony WH-1000XM5.png",
        399,
        349,
        5
      );

      const JBLTune520BT = new Product(
        "JBL Tune 520BT",
        "../img/JBL Tune 520BT.png",
        89,
        69,
        4
      );
      SonyWH1000XM5.render();
      JBLTune520BT.render();
    }
  }
}

