"use strict";

// CONTAINERS
const timersContainer = document.querySelector(".timers");

// BUTTONS
const addNewTimerFormButton = document.querySelector("#addTimerButton");

// TIMERS BUTTONS
const pauseButton = document.querySelector(".pause-button");
const resumeButton = document.querySelector(".resume-button");
const deleteButton = document.querySelector(".delete-button");

let id = 1;

// CLASS
class Timer {
  constructor(id) {
    this.id = id;
    this.timerContainer = document.querySelector(`.t-${this.id}`);

    // Timers values
    this.hours = this.timerContainer.querySelector(".hours");
    this.minutes = this.timerContainer.querySelector(".minutes");
    this.seconds = timersContainer.querySelector(".seconds");

    // Description elements
    this.descriptionInput = this.timerContainer.querySelector(".desc-change");
    this.descriptionLabel = this.timerContainer.querySelector(".desc-change");
    this.editDescriptionButton =
      this.timerContainer.querySelector(".edit-desc-button");

    // Action buttons
    this.pauseButton = this.timerContainer.querySelector(".pause-button");
    this.resumeButton = this.timerContainer.querySelector(".resume-button");
    this.deleteButton = this.timerContainer.querySelector(".delete-button");

    // Call immediately:
    this._setDescription()._setInterval();
  }

  _calcTimeInSec() {
    return +(
      this.hours.value * 60 * 60 +
      this.minutes.value * 60 +
      this.seconds.value
    );
  }

  _setInterval() {
    console.log(this.descriptionInput);
    this.time = this._calcTimeInSec();
    console.log(this.time);
  }

  _displayTimersButtons() {}

  _togglePauseResume() {}

  _setDescription() {
    this.descriptionInput.value = this.descriptionLabel.value;
    console.log(this.descriptionLabel.value);
    this.descriptionInput.style.display = "none";
    this.descriptionLabel.style.display = "inline";
    return this;
  }

  _editDescription() {}

  pause(e) {}

  resume(e) {}

  delete(e) {}
}

// FUNCTIONS

function addNewTimer() {
  const html = `
  <form class="timer t-${id}">
    <input type="text" placeholder="Set description (optional)" style="display: inline" class="desc-change"/>
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
  document
    .querySelector(`.t-${id}`)
    .querySelector(".set-button")
    .addEventListener("click", () => {
      new Timer(id);
      id++;
    });
}

// EVENT HANDLERS
addNewTimerFormButton.addEventListener("click", addNewTimer);
