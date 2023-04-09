const likeButton = document.getElementById("like-button");
const likeCounter = document.getElementById("like-counter");

const likeButton2 = document.getElementById("like-button2");
const likeCounter2 = document.getElementById("like-counter2");


const likeButton3 = document.getElementById("like-button3");
const likeCounter3 = document.getElementById("like-counter3");

let likes1 = 100;
let likes2 = 11111;
let likes3 = 69;

likeButton.addEventListener("click", function(event) {
  event.preventDefault();
  likes1++;
  likeCounter.textContent = likes1;
  // Aquí puedes agregar una animación para el botón de "Me gusta"


});
likeButton2.addEventListener("click", function(event) {
    event.preventDefault();
    likes2++;
    likeCounter2.textContent = likes2;
    // Aquí puedes agregar una animación para el botón de "Me gusta"
  
  
  });
  likeButton3.addEventListener("click", function(event) {
    event.preventDefault();
    likes3++;
    likeCounter3.textContent = likes3;
    // Aquí puedes agregar una animación para el botón de "Me gusta"
  
  
  });



