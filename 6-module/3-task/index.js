import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    for (let i in slides) {
      this.name = slides[i].name;
      this.price = "€" + slides[i].price.toFixed(2);
      this.image = "/assets/images/carousel/" + slides[i].image;
      this.id = slides[i].id;
      this.elem = document.createElement('div');
      this.elem.classList.add("carousel");
      let template = `
     
      <div class="carousel__slide" data-id=${this.id}>
        <img src=${this.image} class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">${this.price}</span>
          <div class="carousel__title">${this.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
   
    `;
      this.elem.innerHTML = template;
    }
  }
}
