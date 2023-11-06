// cambiar background del header al hacer scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
if (window.scrollY > 500) {
  header.style.backgroundColor = '#2a3c5d';
} else {
  header.style.backgroundColor = 'transparent';
}
});

$(document).ready(function(){
  $('.obras-sociales').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true, // Añadir esta línea para hacer que el carrusel sea un bucle continuo
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});