// Fecha objetivo
const fechaObjetivo = new Date("2025-09-20T12:00:00").getTime();
const contador = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    contador.innerHTML = "¡El gran día ha llegado!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  contador.innerHTML = `${dias} días ${horas}h ${minutos}m ${segundos}s`;
}

actualizarContador();
setInterval(actualizarContador, 1000);

// Inicialización de Swiper
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".galeria-swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000, // Cambia cada 3 segundos
      disableOnInteraction: false, // Sigue avanzando aunque el usuario interactúe
    },
    loop: true, // Para que al final vuelva al inicio automáticamente
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

