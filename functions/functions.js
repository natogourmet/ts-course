"use strict";
(() => {
    const hero = "Flash";
    function returnHero() {
        return hero;
    }
    const callBatman = () => {
        return 'Batsignal activated!';
    };
    console.log(typeof callBatman);
});
