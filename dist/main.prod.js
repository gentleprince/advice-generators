"use strict";var id=document.querySelector(".heading"),text=document.querySelector(".Advice_text"),button=document.querySelector(".button");document.addEventListener("DOMContentLoaded",function(){var t,n,r,c;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(fetch("https://api.adviceslip.com/advice",{method:"GET"}));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("HTTP error! status: ".concat(t.status));case 5:return e.next=7,regeneratorRuntime.awrap(t.json());case 7:n=e.sent,r=n.slip.id,c=n.slip.advice,id.innerHTML="Advice #".concat(r),text.innerHTML="<q> ".concat(c," </q>"),button.onclick=function(){var t,n,r,c;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(fetch("https://api.adviceslip.com/advice",{method:"GET"}));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("HTTP error! status: ".concat(t.status));case 5:return e.next=7,regeneratorRuntime.awrap(t.json());case 7:n=e.sent,r=n.slip.id,c=n.slip.advice,id.innerHTML="Advice #".concat(r),text.innerHTML="<q> ".concat(c," </q>");case 12:case"end":return e.stop()}})};case 13:case"end":return e.stop()}})});