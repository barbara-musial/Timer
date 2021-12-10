"use strict";

const timersContainer = document.querySelector(".timers");
const addNewTimerFormButton = document.querySelector("#addTimerButton");

const idArr = [];
let count = 0;

// CLASS
class Timer {
  constructor(id) {
    this.id = id;

    // Call immediately (AFTER pressing SET button):
    this._setDOMElements()
      ._setDescription()
      ._displayTimersButtons()
      ._calcTimeInSec()
      ._setInterval();

    //Event handlers
    this.editDescButton.addEventListener(
      "click",
      this._editDescription.bind(this)
    );
    this.changeDescButton.addEventListener(
      "click",
      this._setDescription.bind(this)
    );
    this.pauseButton.addEventListener("click", this._pause.bind(this));
    this.resumeButton.addEventListener("click", this._resume.bind(this));
    this.deleteButton.addEventListener("click", this._delete.bind(this));
  }

  _setDOMElements() {
    //Container
    this.timerContainer = document.querySelector(`.t-${this.id}`);

    //Description elements
    this.descriptionInput = document.querySelector(`.dc-${this.id}`);
    this.descriptionLabel = document.querySelector(`.d-${this.id}`);
    this.changeDescButton = document.querySelector(`.dcb-${this.id}`);
    this.editDescButton = document.querySelector(`.edb-${this.id}`);

    // Timer's values
    this.hours = document.querySelector(`.h-${this.id}`);
    this.minutes = document.querySelector(`.m-${this.id}`);
    this.seconds = document.querySelector(`.s-${this.id}`);

    //Timer's buttons
    this.pauseButton = document.querySelector(`.pb-${this.id}`);
    this.resumeButton = document.querySelector(`.rb-${this.id}`);
    this.deleteButton = document.querySelector(`.db-${this.id}`);

    return this;
  }

  _setInterval() {
    this.interval = window.setInterval(this._interval.bind(this), 1000);

    this.hours.setAttribute("readonly", true);
    this.minutes.setAttribute("readonly", true);
    this.seconds.setAttribute("readonly", true);

    if (
      this.hours.value === "0" &&
      this.minutes.value === "0" &&
      this.seconds.value === "0"
    ) {
      window.clearInterval(this.interval);
    }
  }

  _interval() {
    if (this.time > 0) {
      console.log(this.time);
      this.time--;
      this.hours.value = Math.trunc(this.time / 3600);
      this.minutes.value = Math.trunc(
        this.time / (60 * (Number(this.hours.value) + 1))
      );
      this.seconds.value = this.time % 60;
    }
  }

  _setDescription() {
    this.descriptionLabel.textContent = this.descriptionInput.value;
    this.descriptionInput.value = "";

    this._toggleSetEditDesc();

    if (this.descriptionLabel.textContent) {
      this.editDescButton.classList.remove("hidden");
      this.changeDescButton.classList.add("hidden");
    }

    return this;
  }

  _editDescription() {
    this.descriptionInput.value = this.descriptionLabel.textContent;
    this.descriptionLabel.textContent = "";

    this._toggleSetEditDesc();
    this.editDescButton.classList.add("hidden");
    this.changeDescButton.classList.remove("hidden");
  }

  _toggleSetEditDesc() {
    this.descriptionInput.classList.toggle("hidden");
    this.descriptionLabel.classList.toggle("hidden");
  }

  _calcTimeInSec() {
    console.log(this.hours.value, this.minutes.value, this.seconds.value);
    this.time = +(
      Number(this.hours.value) * 60 * 60 +
      Number(this.minutes.value * 60) +
      Number(this.seconds.value)
    );

    return this;
  }

  _displayTimersButtons() {
    document.querySelector(`.sb-${this.id}`).classList.add("hidden");

    this.pauseButton.classList.remove("hidden");
    this.deleteButton.classList.remove("hidden");

    return this;
  }

  _togglePauseResume() {
    this.pauseButton.classList.toggle("hidden");
    this.resumeButton.classList.toggle("hidden");
  }

  _pause() {
    this._togglePauseResume();
    window.clearInterval(this.interval);
  }

  _resume() {
    this._togglePauseResume();
    this._setInterval();
  }

  _delete() {
    this.timerContainer.remove();
  }
}

// FUNCTIONS

function addNewTimer() {
  idArr.push(count);
  const id = idArr[count];

  const html = `
  <form class="timer t-${id}">
    <input type="text" placeholder="Set description (optional)" class="desc-change dc-${id}"/>
    <input type="button" value="✔" class="desc-change-button dcb-${id} hidden"/>
    <label class="description d-${id} hidden"></label>
    <input type="button" value="✍" class="edit-desc-button edb-${id} hidden" /><br />
    <input type="number" min="0" max="24" value="0" class="hours h-${id}" />
    <label> H </label>
    <input type="number" min="0" max="59" value="0" class="minutes m-${id}" />
    <label> M </label>
    <input type="number" min="0" max="59" value="0" class="seconds s-${id}" />
    <label> S </label><br />
    <input type="button" value="SET" class="set-button sb-${id}" />
    <input type="button" value="PAUSE" class="timerButton pb-${id} hidden" />
    <input type="button" value="RESUME" class="timerButton rb-${id} hidden" />
    <input type="button" value="DELETE" class="timerButton db-${id} hidden" />
  </form>`;

  timersContainer.insertAdjacentHTML("beforeend", html);

  document.querySelector(`.sb-${id}`).addEventListener("click", () => {
    new Timer(id);
  });

  count++;
}
addNewTimer();

// EVENT HANDLERS
addNewTimerFormButton.addEventListener("click", addNewTimer);
