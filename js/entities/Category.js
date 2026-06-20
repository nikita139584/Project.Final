// Category.js
export class Category {

  constructor(name, imageUrl, itemsCount, description, link) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.itemsCount = itemsCount;
    this.description = description;
    this.link = link;
  }

  render() {


    const card = document.createElement("div");
    card.classList.add("card");


    const title = document.createElement("h2");
    title.textContent = this.name;


    const imageEl = document.createElement("img");
    imageEl.src = this.imageUrl;
    imageEl.alt = this.name;


    const itemsEl = document.createElement("p");
    itemsEl.textContent = `Товаров: ${this.itemsCount}`;


    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = this.description;


    const linkEl = document.createElement("a");
    linkEl.textContent = "Открыть категорию";
    linkEl.href = this.link;

    card.append(
      title,
      imageEl,
      itemsEl,
      descriptionEl,
      linkEl
    );


    document.body.appendChild(card);
  }
}
