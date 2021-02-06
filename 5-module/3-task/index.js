function initCarousel() {
      //класс с каруселью
      let carousel = document.querySelector('.carousel__inner');
      //размер слайда
      let widthCarousel = carousel.offsetWidth + 'px';
      
    
    let next = document.querySelector('.carousel__arrow carousel__arrow_right');
    let prev = document.querySelector('.carousel__arrow carousel__arrow_left');
    prev.oneClick = function () {
      carousel.style.transform = 'translateX(-widthCarousel)';
    }
      
}
