$(document).ready(function() {
  $.ajax({
    url: 'https://rickandmortyapi.com/api/character/',
    method: 'GET',
    success: function(data) {
      let counter = 0;
      data.results.forEach(function(character) {
        if (counter < 9) {
          $('.gallery').append(`<img src="${character.image}" alt="${character.name}">`);
          counter++;
        }
      });

      // Agregar evento de clic a las imágenes
      $('.gallery img').click(function() {
        const index = $('.gallery img').index(this);
        const character = data.results[index];
        $('#modal-name').text(character.name);
        $('.modal-image').html(`<img src="${character.image}" alt="${character.name}">`);
        $('#modal-status').text(character.status);
        $('#modal-species').text(character.species);
        $('#modal-gender').text(character.gender);
        $('#modal-origin').text(character.origin.name);
        $('.modal').fadeIn();
      });

      // Agregar evento de clic al botón Cerrar del modal
      $('.close').click(function() {
        $('.modal').fadeOut();
      });
    }
  });
});
