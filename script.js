'use strict';

let timers = ['Timer0', 'Timer1'];
let timerNumber = 2;

document
  .getElementById('addTimerButton')
  .addEventListener('click', function () {
    timers.push(`Timer${timerNumber}`);
    console.log(timers);
    timerNumber++;
  });

function changeDescription(tNumb) {
  const descChangeInput = document.querySelector(`.dc-${tNumb}`);
  const descChangeButton = document.querySelector(`.dcb-${tNumb}`);
  const descLabel = document.querySelector(`.d-${tNumb}`);
  const editDescButton = document.querySelector(`.edb-${tNumb}`);

  if (descChangeInput.style.display === 'inline') {
    const description = document.querySelector(`.dc-${tNumb}`).value;

    descLabel.textContent = description;
    descChangeInput.value = '';

    descChangeInput.style.display = descChangeButton.style.display = 'none';
    descLabel.style.display = editDescButton.style.display = 'inline';
  } else {
    const description = document.querySelector(`.d-${tNumb}`).textContent;

    descChangeInput.value = description;
    descLabel.textContent = '';

    descLabel.style.display = editDescButton.style.display = 'none';
    descChangeInput.style.display = descChangeButton.style.display = 'inline';
  }
}
