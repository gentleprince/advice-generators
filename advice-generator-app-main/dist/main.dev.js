"use strict";

var id = document.querySelector('.heading');
var text = document.querySelector('.Advice_text');
var button = document.querySelector('.button'); // Best practice for advice quotes api
// onload

document.addEventListener('DOMContentLoaded', function random_advice() {
  var response, data, ids, advices;
  return regeneratorRuntime.async(function random_advice$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch('https://api.adviceslip.com/advice', {
            method: 'GET'
          }));

        case 2:
          response = _context2.sent;

          if (response.ok) {
            _context2.next = 5;
            break;
          }

          throw new Error("HTTP error! status: ".concat(response.status));

        case 5:
          _context2.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context2.sent;
          ids = data.slip.id;
          advices = data.slip.advice;
          id.innerHTML = "Advice #".concat(ids);
          text.innerHTML = "<q> ".concat(advices, " </q>"); // onclick

          button.onclick = function random_advice() {
            var response, data, ids, advices;
            return regeneratorRuntime.async(function random_advice$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(fetch('https://api.adviceslip.com/advice', {
                      method: 'GET'
                    }));

                  case 2:
                    response = _context.sent;

                    if (response.ok) {
                      _context.next = 5;
                      break;
                    }

                    throw new Error("HTTP error! status: ".concat(response.status));

                  case 5:
                    _context.next = 7;
                    return regeneratorRuntime.awrap(response.json());

                  case 7:
                    data = _context.sent;
                    ids = data.slip.id;
                    advices = data.slip.advice;
                    id.innerHTML = "Advice #".concat(ids);
                    text.innerHTML = "<q> ".concat(advices, " </q>");

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // advice quotes api allternative
// onload
// document.addEventListener('DOMContentLoaded', async function random_advice() {
// 	const response = await fetch(
// 		'https://api.adviceslip.com/advice', {
// 			method: 'GET'
// 		}
// 	);
// 	if (!response.ok) {
// 		throw new Error(`HTTP error! status: ${response.status}`);
// 	}
// 	const data = await response.json();
// 	console.log(data);
// 	const ids = data.slip.id;
// 	const advices = data.slip.advice;
// 	id.innerHTML = `Advice #${ids}`;
// 	text.innerHTML = `<q> ${advices} </q>`;
// });
// onclick
// button.addEventListener('click', async function random_advice() {
// 	const response = await fetch(
// 		'https://api.adviceslip.com/advice', {
// 			method: 'GET'
// 		}
// 	);
// 	if (!response.ok) {
// 		throw new Error(`HTTP error! status: ${response.status}`);
// 	}
// 	const data = await response.json();
// 	console.log(data);
// 	const ids = data.slip.id;
// 	const advices = data.slip.advice;
// 	id.innerHTML = `Advice #${ids}`;
// 	text.innerHTML = `<q> ${advices} </q>`;
// });