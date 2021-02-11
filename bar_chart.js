"use strict";

document.addEventListener("DOMContentLoaded", start);


const model = []

const visits = getNumber();

function start() {

  //add item in the beginning with unshift
  array.unshift(numbers);

  numbers++;

  //can not be longer than 9
  if (numbers > 9) {
    array.pop(array);
  }

  setTimeout(start, 1000);

  console.log(array);

};

function getNumber () {

  return Math.floor(Math.random()*32);

}