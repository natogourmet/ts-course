"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    console.log(fullName('Tony', 'Stark'));
})();
