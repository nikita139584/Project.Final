// Product.js

// Экспортируем класс Product,
// чтобы его можно было использовать в других файлах.
export class Product {

  // Конструктор вызывается при создании нового товара.
  // Например:
  // new Product("Телефон", "img.jpg", 500, 450, 4.8)
  constructor(name, imageUrl, price, discountedPrice, rating) {

    // Сохраняем полученные данные в свойства объекта.
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.discountedPrice = discountedPrice;
    this.rating = rating;
  }

  // Метод render отвечает за отображение товара на странице.
  render() {

    // ===== Создание карточки =====

    const card = document.createElement("div");

    // Добавляем CSS-класс card.
    // После этого к элементу можно применять стили из CSS.
    card.classList.add("card");



    // ===== Название товара =====

    const title = document.createElement("h2");

    // Берём название из текущего объекта.
    title.textContent = this.name;



    // ===== Изображение товара =====

    const imageEl = document.createElement("img");

    // Устанавливаем путь к картинке.
    imageEl.src = this.imageUrl;



    // ===== Рейтинг товара =====

    const ratingEl = document.createElement("p");

    // Выводим рейтинг со звездой.
    ratingEl.textContent = `⭐ ${this.rating}`;



    // ===== Цена со скидкой =====

    const priceEl = document.createElement("p");

    // Показываем актуальную цену.
    priceEl.textContent = `${this.discountedPrice}$`;



    // ===== Старая цена =====

    const oldPrice = document.createElement("p");

    // Показываем цену до скидки.
    oldPrice.textContent = `${this.price}$`;



    // ===== Кнопка корзины =====

    const button = document.createElement("button");



    // Получаем корзину из localStorage.
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];



    // Проверяем, есть ли уже этот товар в корзине.
    //
    // some() возвращает true,
    // если хотя бы один элемент удовлетворяет условию.
    const isInCart = cart.some(
      item => item.name === this.name
    );



    // Если товар уже есть в корзине,
    // показываем кнопку удаления.
    // Иначе кнопку добавления.
    button.textContent = isInCart
      ? "Удалить из корзины"
      : "Добавить в корзину";



    // ===== Обработка нажатия =====

    button.onclick = () => {

      // Снова получаем актуальную корзину.
      let cart =
        JSON.parse(localStorage.getItem("cart")) || [];



      // Ищем индекс товара в корзине.
      //
      // findIndex возвращает:
      // 0,1,2... если товар найден
      // -1 если товар не найден
      const index = cart.findIndex(
        item => item.name === this.name
      );



      // Если индекс = -1,
      // значит товара ещё нет в корзине.
      if (index === -1) {

        // Добавляем товар в массив корзины.
        cart.push({
          name: this.name,
          imageUrl: this.imageUrl,
          price: this.discountedPrice
        });



        // Меняем текст кнопки.
        button.textContent =
          "Удалить из корзины";

      } else {

        // Если товар найден,
        // удаляем его из массива.
        //
        // splice(индекс, количество)
        // удаляет элементы из массива.
        cart.splice(index, 1);



        // Меняем текст кнопки обратно.
        button.textContent =
          "Добавить в корзину";
      }



      // Сохраняем обновлённую корзину.
      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );
    };



    // ===== Сборка карточки =====

    // Добавляем все созданные элементы
    // внутрь карточки товара.
    card.append(
      title,
      imageEl,
      ratingEl,
      oldPrice,
      priceEl,
      button
    );



    // Добавляем карточку на страницу.
    document.body.appendChild(card);
  }
}
