$(document).ready(function() {
  $('.hamburger-menu').click(function() {
    $('.icons-header').slideToggle();
  });
});

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  var nombre = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var obraSocial = document.getElementById('obraSocial').value;
  var consulta = document.getElementById('query').value;

  var mensaje = '*Nombre:* ' + nombre + '%0A' +
                '*Email:* ' + email + '%0A' +
                '*Obra Social:* ' + obraSocial + '%0A' +
                '*Consulta:* ' + consulta;

  window.open('https://wa.me/543517651805?text=' + mensaje);
});

$(document).ready(function(){
  $('.obras-sociales').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true, 
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