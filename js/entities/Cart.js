// Cart.js

// Получаем корзину из localStorage.
// localStorage хранит данные только в виде строк,
// поэтому используем JSON.parse для преобразования строки обратно в массив.
//
// Если корзины нет (получим null),
// то создаём пустой массив [].
const cart = JSON.parse(localStorage.getItem("cart")) || [];


// Создаём основной контейнер,
// в который будем добавлять все товары корзины.
const container = document.createElement("div");


// Проверяем, есть ли товары в корзине.
if (cart.length === 0) {

  // Создаём заголовок.
  const empty = document.createElement("h2");

  // Текст заголовка.
  empty.textContent = "Корзина пуста";

  // Добавляем заголовок в контейнер.
  container.appendChild(empty);

} else {

  // Если корзина не пустая,
  // перебираем все товары по одному.
  cart.forEach(product => {

    // Создаём карточку товара.
    const card = document.createElement("div");



    // ===== Название товара =====

    const title = document.createElement("h3");

    // Берём название из объекта товара.
    title.textContent = product.name;



    // ===== Изображение товара =====

    const image = document.createElement("img");

    // Устанавливаем путь к изображению.
    image.src = product.imageUrl;

    // Устанавливаем ширину картинки.
    image.width = 150;



    // ===== Цена товара =====

    const price = document.createElement("p");

    // Выводим цену.
    // Шаблонная строка позволяет вставлять переменные через ${}
    price.textContent = `${product.price}$`;



    // ===== Кнопка удаления =====

    const removeButton = document.createElement("button");

    // Текст кнопки.
    removeButton.textContent = "Удалить";



    // Событие нажатия на кнопку.
    removeButton.onclick = () => {

      // Создаём новую корзину.
      // filter оставляет только те элементы,
      // которые удовлетворяют условию.
      //
      // Здесь удаляется товар,
      // у которого имя совпадает с текущим.
      const updatedCart = cart.filter(
        item => item.name !== product.name
      );



      // Сохраняем новую корзину обратно в localStorage.
      //
      // JSON.stringify превращает массив в строку,
      // потому что localStorage умеет хранить только строки.
      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );



      // Перезагружаем страницу,
      // чтобы корзина сразу обновилась.
      location.reload();
    };



    // Добавляем все элементы в карточку товара.
    card.append(
      title,
      image,
      price,
      removeButton
    );



    // Добавляем карточку в основной контейнер.
    container.appendChild(card);
  });



  // ===== Подсчёт общей стоимости =====

  // reduce проходит по всем товарам
  // и суммирует их цену.
  const total = cart.reduce(

    // sum - текущая сумма
    // item - текущий товар
    (sum, item) => sum + Number(item.price),

    // Начальное значение суммы
    0
  );



  // Создаём элемент для отображения общей суммы.
  const totalElement = document.createElement("h2");

  // Выводим результат.
  totalElement.textContent = `Итого: ${total}$`;

  // Добавляем сумму в контейнер.
  container.appendChild(totalElement);
}


// Добавляем весь контейнер на страницу.
// После этого все элементы становятся видимыми.
document.body.appendChild(container);
