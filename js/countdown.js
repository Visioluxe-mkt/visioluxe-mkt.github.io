// var input = document.getElementById('archivoJSON');
// input.addEventListener('change', function (event) {
//   var file = event.target.files[0];
//   var reader = new FileReader();

//   reader.onload = function (e) {
//     var contents = e.target.result;
//     var jsonData = JSON.parse(contents);

//     console.log(jsonData.intro);
//   };

//   reader.readAsText(file);
// });

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     var data = JSON.parse(xhr.responseText);
//     var datosDiv = document.getElementById('texts');
//     datosDiv.innerHTML = `
//       <h1 class="text">${data.intro}</h1>
//     `;
//   }
// };
// xhr.open('GET', '../text/texts.json', true);
// xhr.send();

window.addEventListener('DOMContentLoaded', (event) => {
  // Definir la fecha y hora objetivo del countdown
  const targetDate = new Date('2023-08-20T23:59:59').getTime();

  // Actualizar el contador cada segundo
  setInterval(() => {
    // Obtener la fecha y hora actual
    const currentDate = new Date().getTime();

    // Calcular la diferencia entre la fecha y hora objetivo y la actual
    const difference = targetDate - currentDate;

    // Calcular los días, horas, minutos y segundos restantes
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Formatear la salida del contador
    const formattedCountdown = `${String(days).padStart(2, '0')} DIAS ${String(
      hours
    ).padStart(2, '0')} HORAS ${String(minutes).padStart(2, '0')} MINUTOS`;

    //${String(seconds).padStart(2, '0')} SEGUNDOS

    // Actualizar el contenido del elemento con el contador
    document.querySelector('.countdown').textContent = formattedCountdown;
    formattedCountdownexternal = formattedCountdown;

    const countdown = document.querySelector('.countdown');
    const text = ' FIN DE PROMO EN ' + countdown.innerHTML; // Note I am being lazy here and assuming the string has no unwanted whitespace
    countdown.innerHTML = '';
    countdown.style.setProperty('--numchs', text.length);
    for (let i = 0; i < text.length; i++) {
      countdown.innerHTML =
        countdown.innerHTML +
        '<div class="char" style="--char-index: ' +
        i +
        ';">' +
        text.charAt(i) +
        '</div>';
    }
  }, 1000);
});
