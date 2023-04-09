// Código JavaScript para cambiar el tamaño del contenedor de video según la ventana del navegador
window.onresize = function() {
    var videoContainer = document.getElementById("video-container");
    videoContainer.style.maxWidth = window.innerWidth + "px";
  };
  