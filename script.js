'use strict';

let timers = ['Timer0'];
let timerNumber = 1;

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

  if (
    descChangeInput.style.display === 'inline' &&
    descChangeInput.value !== ''
  ) {
    const description = document.querySelector(`.dc-${tNumb}`).value;

    descLabel.textContent = description;
    descChangeInput.value = '';

    descChangeInput.style.display = descChangeButton.style.display = 'none';
    descLabel.style.display = editDescButton.style.display = 'inline';
  } else if (descLabel.style.display === 'inline') {
    const description = document.querySelector(`.d-${tNumb}`).textContent;

    descChangeInput.value = description;
    descLabel.textContent = '';

    descLabel.style.display = editDescButton.style.display = 'none';
    descChangeInput.style.display = descChangeButton.style.display = 'inline';
  }

  const hideDescriptionElements = function (tNumb) {
    const descChangeInput = document.querySelector(`.dc-${tNumb}`);
    const descChangeButton = document.querySelector(`.dcb-${tNumb}`);
    const descLabel = document.querySelector(`.d-${tNumb}`);
    const editDescButton = document.querySelector(`.edb-${tNumb}`);

    if (
      descChangeInput.value === '' &&
      descChangeButton.style.display === 'inline' &&
      descChangeInput.style.display === 'inline'
    ) {
      descLabel.style.display =
        editDescButton.style.display =
        descChangeInput.style.display =
        descChangeButton.style.display =
          'none';
    }
  };
}

hideDescriptionElements(0);
function setTimer(tNumb) {
  let hours = document.querySelector(`.h-${tNumb}`);
  let minutes = document.querySelector(`.m-${tNumb}`);
  let seconds = document.querySelector(`.s-${tNumb}`);

  if (seconds.value == 0 && minutes.value == 0 && hours.value == 0) {
    alert(`You didn't set any values`);
  } else {
    hideDescriptionElements(0);
    const timer = window.setInterval(() => {
      if (seconds.value == 0 && minutes.value == 0 && hours.value > 0) {
        seconds.value = 60;
        minutes.value = 59;
        hours.value--;
      }

      if (seconds.value == 0 && minutes.value > 0) {
        seconds.value = 60;
        minutes.value--;
      }

      seconds.value--;
      if (seconds.value == 0 && minutes.value == 0 && hours.value == 0) {
        window.clearInterval(timer);
      }
    }, 1000);
  }
  // if (seconds.value > 0) {
  //   const sec = window.setInterval(function () {
  //     seconds.value--;
  //     if (seconds.value == 0 && minutes.value == 0) {
  //       window.clearInterval(sec);
  //     }
  //     if (seconds.value == 0 && minutes.value > 0) {
  //       ;
  //       minutes.value--;
  //     }
  //   }, 1000);
  // }
}
