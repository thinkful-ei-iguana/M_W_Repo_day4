'use strict'

function fizzBuzzReturn() {

  $('#number-chooser').submit( e => {

    e.preventDefault();
    $(".js-results").empty();

    const numInput = $(e.currentTarget).find('input').val();

    
    
    const fullCount = [];

    for (let i = 1; i <= numInput; i++){
      if (i % 15 === 0) {
        fullCount.push(
          $('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));
      }
      else if (i % 5 === 0) {
        fullCount.push(
          $('<div class="fizz-buzz-item buzz"><span>buzz</span></div>')); 
      }
      else if (i % 3 === 0) {
        fullCount.push(
          $('<div class="fizz-buzz-item fizz"><span>fizz</span></div>')); 
      }
      else {
        fullCount.push(
          $(`<div class="fizz-buzz-item"><span>${i}</span></div>`)); 
      }
    }
    $(".js-results").append(fullCount);

  });
}

$(fizzBuzzReturn());