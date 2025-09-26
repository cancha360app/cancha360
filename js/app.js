// Cancha360 - lógica inicial

console.log("🚀 Bienvenido a Cancha360: la app de fútbol con tus amigos!");

// Ejemplo: mostrar alerta al hacer clic en un botón con clase .btn-cancha
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn-cancha");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      alert("⚽ Próximamente podrás crear tus partidos aquí en Cancha360!");
    });
  });
});

