//code from: https://codemyui.com/scroll-up-to-reveal-header-and-scroll-down-to-hide/

ScrollOut({
  cssProps: true,
  threshold: 0.2
});
//code from: https://cssanimation.rocks/scroll-animations/

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


/*   
https://www.w3schools.com/jquery/default.asp
https://learn.jquery.com/
https://www.codecademy.com/learn/learn-jquery
https://www.khanacademy.org/computing/computer-programming/html-js-jquery
https://teams.microsoft.com/l/message/19:05b7fe3b91964bfdb67044fd43966f32@thread.tacv2/1605900319938?tenantId=06e469d1-2d2a-468f-ae9b-7df0968eb6d7&amp;groupId=c67013bd-e613-4ed1-b26f-db76dca41e9a&amp;parentMessageId=1605629010084&amp;teamName=Team_INDS 4010 (X/I) 003 FRIDAYS 11:50&amp;channelName=General&amp;createdTime=1605900319938>
*/