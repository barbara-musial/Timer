"use strict";

// CONTAINERS
const timersContainer = document.querySelector(".timers");
const timerContainer = document.querySelector(".timer");

// SETTING TIMER
const addNewTimerForm = document.querySelector("#addTimerButton");
const setButton = document.querySelectorAll(".set-button");
// Timers values
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
// Description buttons
const setDescriptionButton = document.querySelector(".desc-change-button");
const editDescriptionButton = document.querySelector(".edit-desc-button");
// Description storage elements
const changeDescriptionInput = document.querySelector(".desc-change");
const descriptionLabel = document.querySelector(".descrption");

// TIMERS BUTTONS
const pauseButton = document.querySelector(".pause-button");
const resumeButton = document.querySelector(".resume-button");
const deleteButton = document.querySelector(".delete-button");

class App {
  constructor() {
    addNewTimerForm.addEventListener("click", this._addNewTimerForm);
    setButton.forEach((sb) =>
      sb.addEventListener("click", this._createNewTimer)
    );
  }

  _createNewTimer() {
    const h = hours.value;
    const m = minutes.value;
    const s = seconds.value;
    const timer = new Timer(h, m, s);
    console.log(timer);
  }

  _addNewTimerForm() {
    const html = `
    <form class="timer">
      <input type="text" placeholder="Set description (optional)" style="display: inline" class="desc-change"/>
      <input type="button" value="✔" style="display: inline" class="desc-change-button"/>
      <label style="display: none" class="description"></label>
      <input type="button" value="✍" style="display: none" class="edit-desc-button"/><br/>
      <input type="number" min="0" max="24" value="0" class="hours"/>
      <label> H </label>
      <input type="number" min="0" max="59" value="0" class="minutes"/>
      <label> M </label>
      <input type="number" min="0" max="59" value="0" class="seconds"/>
      <label> S </label><br/>
      <input type="button" value="SET" style="display: inline" class="set-button"/>
      <input type="button" value="PAUSE" style="display: none" class="pause-button"/>
      <input type="button" value="RESUME" style="display: none" class="resume-button"/>
      <input type="button" value="DELETE" style="display: none" class="delete-button"/>
    </form>`;

    timersContainer.insertAdjacentHTML("beforeend", html);
  }
}
const app = new App();

class Timer {
  #id = `${Date.now()}`.slice(-10);
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    this._setInterval();
  }

  _getId() {
    return this.#id;
  }

  _calcTimeInSec() {
    return (this.time =
      this.hours * 60 * 60 + this.minutes * 60 + this.seconds);
  }

  _setInterval() {
    this.time = this._calcTimeInSec();
    console.log(this.time);
  }

  _displayTimersButtons() {}

  _togglePauseResume() {}

  pause(e) {}

  resume(e) {}

  delete(e) {}
}
