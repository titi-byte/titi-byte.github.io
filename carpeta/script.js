document.addEventListener("DOMContentLoaded", function () {
  const flores = document.querySelectorAll(".flor");
  function girarFlores() {
    flores.forEach((flor) => {
      let rotation = 0;
      setInterval(() => {
        rotation += 1;
        flor.style.transform = `rotate(${rotation}deg)`;
      }, 10);
    });
  }
  girarFlores();
});
