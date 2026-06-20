export class Menu {

  menurender() {

    const order = document.createElement("button");
    order.textContent = "Корзина";
    order.onclick = () => {
      window.location.href = "/html/Cart.html";
    };

    const profile = document.createElement("button");
    profile.textContent = "Оформление заказа";
    profile.onclick = () => {
      window.location.href = "/html/Order.html";
    };

    const category = document.createElement("button");
    category.textContent = "Категории";
    category.onclick = () => {
      window.location.href = "/html/category.html";
    };

    const mainscreen = document.createElement("button");
    mainscreen.textContent = "Главный экран";
    mainscreen.onclick = () => {
      window.location.href = "/index.html";
    };

    const wrapper = document.createElement("div");
    wrapper.classList.add("top-menu-wrapper");

    const menu = document.createElement("div");
    menu.classList.add("top-menu");

    menu.append(
      order,
      profile,
      category,
      mainscreen
    );

    wrapper.appendChild(menu);

    document.body.prepend(wrapper);
  }
}
