"use strict";

let i = 1;

function changeDescription(tNumb) {
  const descChangeInput = document.querySelector(`.dc-${tNumb}`);
  const descChangeButton = document.querySelector(`.dcb-${tNumb}`);
  const descLabel = document.querySelector(`.d-${tNumb}`);
  const editDescButton = document.querySelector(`.edb-${tNumb}`);

  if (
    descChangeInput.style.display === "inline" &&
    descChangeInput.value !== ""
  ) {
    const description = document.querySelector(`.dc-${tNumb}`).value;

    descLabel.textContent = description;
    descChangeInput.value = "";

    descChangeInput.style.display = descChangeButton.style.display = "none";
    descLabel.style.display = editDescButton.style.display = "inline";
  } else if (descLabel.style.display === "inline") {
    const description = document.querySelector(`.d-${tNumb}`).textContent;

    descChangeInput.value = description;
    descLabel.textContent = "";

    descLabel.style.display = editDescButton.style.display = "none";
    descChangeInput.style.display = descChangeButton.style.display = "inline";
  }
}

function timerInterval(tNumb) {
  const descChangeInput = document.querySelector(`.dc-${tNumb}`);
  const descChangeButton = document.querySelector(`.dcb-${tNumb}`);
  const editDescButton = document.querySelector(`.edb-${tNumb}`);
  const setButton = document.querySelector(`.sb-${tNumb}`);
  const deleteButton = document.querySelector(`.db-${tNumb}`);
  const pauseButton = document.querySelector(`.pb-${tNumb}`);
  let hours = document.querySelector(`.h-${tNumb}`);
  let minutes = document.querySelector(`.m-${tNumb}`);
  let seconds = document.querySelector(`.s-${tNumb}`);

  if (seconds.value == 0 && minutes.value == 0 && hours.value == 0) {
    alert(`You didn't set any values`);
  } else {
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

    hours.setAttribute("readonly", true);
    minutes.setAttribute("readonly", true);
    seconds.setAttribute("readonly", true);

    setButton.style.display =
      descChangeInput.style.display =
      descChangeButton.style.display =
      editDescButton.style.display =
        "none";
    pauseButton.style.display = deleteButton.style.display = "inline";

    return timer;
  }
}

function setTimer(tNumb) {
  const pauseButton = document.querySelector(`.pb-${tNumb}`);
  const resumeButton = document.querySelector(`.rb-${tNumb}`);

  const timer = timerInterval(tNumb);

  document.querySelector(`.pb-${tNumb}`).addEventListener("click", () => {
    pauseButton.style.display = "none";
    resumeButton.style.display = "inline";

    window.clearInterval(timer);
  });

  document.querySelector(`.rb-${tNumb}`).addEventListener("click", () => {
    resumeButton.style.display = "none";
    pauseButton.style.display = "inline";
    timerInterval(tNumb);
  });
}

function deleteTimer(tNumb) {
  const timer = document.querySelector(`.t-${tNumb}`);
  document.body.removeChild(timer);
}

document
  .querySelector(`#addTimerButton`)
  .addEventListener("click", function () {
    const addTimerButton = document.querySelector(`#addTimerButton`);
    const html = `
    <form class="timer t-${i}">
      <input
        type="text"
        placeholder="Set description (optional)"
        style="display: inline"
        class="desc-change dc-${i}"
      />
      <input
        type="button"
        value="✔"
        onclick="changeDescription(${i})"
        style="display: inline"
        class="desc-change-button dcb-${i}"
      />
      <label style="display: none" class="description d-${i}"></label>
      <input
        type="button"
        value="✍"
        onclick="changeDescription(${i})"
        style="display: none"
        class="edit-desc-button edb-${i}"
      /><br />
      <input type="number" min="0" max="24" value="0" class="h-${i}" />
      <label> H </label>
      <input type="number" min="0" max="59" value="0" class="m-${i}" />
      <label> M </label>
      <input type="number" min="0" max="59" value="0" class="s-${i}" />
      <label> S </label><br />
      <input
        type="button"
        value="SET"
        onclick="setTimer(${i})"
        style="display: inline"
        class="set-button sb-${i}"
      />
      <input
        type="button"
        value="PAUSE"
        style="display: none"
        class="act-buttons pb-${i}"
      />
      <input
        type="button"
        value="RESUME"
        style="display: none"
        class="act-buttons rb-${i}"
      />
      <input
        type="button"
        value="DELETE"
        onclick="deleteTimer(${i})"
        style="display: none"
        class="act-buttons db-${i}"
      />
    </form>
    <br />`;

    i++;
    addTimerButton.insertAdjacentHTML("beforebegin", html);
  });
