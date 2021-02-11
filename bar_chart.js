"use strict";

document.addEventListener("DOMContentLoaded", start);

// --------------------------------------------------------------------------------------------- //

const model = [];

// --------------------------------------------------------------------------------------------- //

function start() {

  const visits = getNumber();

  for (let i = 0; i < 40; i++) {
    model.push(visits);
  }

  display();
  loop();

};

// --------------------------------------------------------------------------------------------- //

// also known as getNumberOfCustomers function
function getNumber () {

  return Math.floor(Math.random()*32);

};

// --------------------------------------------------------------------------------------------- //

// loop it is nothing more
function loop() {

styleChange();

setTimeout(loop, 1000);

};

// --------------------------------------------------------------------------------------------- //

// modifys the model
function styleChange() {

  const visits = getNumber();

  model.shift();

  model.push(visits);
  
  display();

};

// --------------------------------------------------------------------------------------------- //

// displays the model in html
function display() {

  const chart = document.querySelectorAll(".bar");

  let num = 0;

  chart.forEach((bar) => {

    let thisAmount = model[num];

    bar.style.height = thisAmount + "ch";

    num++;

  });

};