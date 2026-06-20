// Добавляем HTML-форму на страницу
document.body.innerHTML += `
<form id="orderForm">

  <h2>Оформление заказа</h2>

  <!-- Поле для имени -->
  <input type="text" id="name" placeholder="Ваше имя" required>

  <!-- Поле для телефона -->
  <input type="tel" id="phone" placeholder="Телефон" required>

  <!-- Поле для адреса доставки -->
  <input type="text" id="address" placeholder="Адрес доставки">

  <p>Способ доставки:</p>

  <!-- Выбор доставки курьером -->
  <label>
    <input type="radio" name="delivery" value="Курьер" required>
    Курьер
  </label>

  <!-- Выбор самовывоза -->
  <label>
    <input type="radio" name="delivery" value="Самовывоз">
    Самовывоз
  </label>

  <!-- Выбор способа оплаты -->
  <select id="payment" required>
    <option value="">Выберите оплату</option>
    <option value="Карта">Карта</option>
    <option value="Наличные">Наличные</option>
  </select>

  <!-- Блок для данных карты (по умолчанию скрыт) -->
  <div id="cardFields" style="display:none;">

    <input
      type="text"
      id="cardNumber"
      placeholder="Номер карты"
      maxlength="19"
    >

    <input
      type="text"
      id="cardDate"
      placeholder="MM/YY"
      maxlength="5"
    >

    <input
      type="password"
      id="cardCVV"
      placeholder="CVV"
      maxlength="3"
    >

  </div>

  <!-- Согласие с условиями -->
  <label>
    <input type="checkbox" id="agree" required>
    Согласен с условиями
  </label>

  <!-- Кнопка отправки формы -->
  <button type="submit">
    Оформить заказ
  </button>

</form>
`;

// Получаем элементы формы
const form = document.getElementById("orderForm");
const paymentSelect = document.getElementById("payment");
const cardFields = document.getElementById("cardFields");

// Отслеживаем изменение способа оплаты
paymentSelect.addEventListener("change", () => {

  // Если выбрана оплата картой — показываем поля карты
  if (paymentSelect.value === "Карта") {
    cardFields.style.display = "block";
  } else {
    // Иначе скрываем
    cardFields.style.display = "none";
  }

});

// Обработка отправки формы
form.addEventListener("submit", function(event) {

  // Отменяем стандартную отправку формы
  event.preventDefault();

  // Получаем введённые данные
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  const payment = document.getElementById("payment").value;

  // Проверяем состояние чекбокса согласия
  const agree = document.getElementById("agree").checked;

  // Получаем выбранный способ доставки
  const delivery = document.querySelector(
    'input[name="delivery"]:checked'
  )?.value;

  // Получаем данные карты
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const cardDate = document.getElementById("cardDate").value.trim();
  const cardCVV = document.getElementById("cardCVV").value.trim();

  // Удаляем пробелы из номера карты
  const cleanCard = cardNumber.replace(/\s/g, "");

  // Проверка номера карты (16 цифр)
  if (!/^\d{16}$/.test(cleanCard)) {
    alert("Введите корректный номер карты");
    return;
  }

  // Проверка имени
  if (name.length < 2) {
    alert("Введите имя");
    return;
  }

  // Проверка телефона
  if (phone.length < 10) {
    alert("Введите корректный телефон");
    return;
  }

  // Проверка выбора доставки
  if (!delivery) {
    alert("Выберите доставку");
    return;
  }

  // Если доставка курьером — адрес обязателен
  if (delivery === "Курьер" && address.length < 5) {
    alert("Введите адрес доставки");
    return;
  }

  // Проверка выбора оплаты
  if (!payment) {
    alert("Выберите оплату");
    return;
  }

  // Дополнительные проверки для оплаты картой
  if (payment === "Карта") {

    // Проверка номера карты
    if (cardNumber.length < 16) {
      alert("Введите номер карты");
      return;
    }

    // Проверка срока действия
    if (!cardDate) {
      alert("Введите срок действия карты");
      return;
    }

    // Проверка CVV
    if (cardCVV.length < 3) {
      alert("Введите CVV");
      return;
    }

  }

  // Проверка согласия с условиями
  if (!agree) {
    alert("Подтвердите согласие");
    return;
  }

  // Создаём объект заказа
  const orderData = {
    name,
    phone,
    address,
    delivery,
    payment
  };

  // Если оплата картой — добавляем данные карты
  if (payment === "Карта") {

    orderData.card = {
      number: cardNumber,
      date: cardDate,
      cvv: cardCVV
    };

  }

  console.log(orderData);


  alert("Заказ оформлен!");


  form.reset();


  cardFields.style.display = "none";

});
