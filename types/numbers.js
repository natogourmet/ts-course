"use strict";
(() => {
    let avengers;
    const villains = 20;
    avengers = Number('50'); // returns NaN which is a number but causes error
    if (avengers < villains) {
        console.log('We good');
    }
    else {
        console.log('das no good');
    }
    console.log(avengers);
});
