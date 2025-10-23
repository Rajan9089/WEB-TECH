// BOM


// window
// console.log(window);


// screen
// console.log(screen);
// console.log(screen.height);
// console.log(screen.width);
// console.log(screen.orientation);

// console.log(history);
// console.log(history.go(2));
// console.log(history.go(-2));


// console.log(navigator);     
// console.log(navigator.language);
// console.log(navigator.onLine);


// open('https://www.amazon.com/');
// open('https://www.mesho.com/');
// open('https://www.flipcart.com/');
// open('https://www.pintrest.com/');
// close();



//! setTimeout(callback , delay);
// console.log('Start');

// setTimeout(() => {
//   console.log("Runs after 2 seconds");
// }, 2000);

// console.log('end');
/*

Start
end
Runs after 2 seconds
 */
//! clearTimeout(SetTimeoutID);
// console.log('Start');

// let timer = setTimeout(() => console.log("Will not run"), 1000);
// clearTimeout(timer);

// console.log('end');
/*

Start
end
Runs after 2 seconds
 */
//! setInterval(callback, delay)
// setInterval(() => {
//   console.log("Runs every 1 second");
// }, 1000);


let interval = setInterval(() => console.log("Tick"), 1000);
clearInterval(interval); // stops it



