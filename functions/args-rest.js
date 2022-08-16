"use strict";
(() => {
    const fullName = (firstName, ...restName) => {
        return `${firstName} ${restName.join(' ')}`;
    };
    const jojo = fullName('Jonathan', 'Joseph', 'Joestar');
    console.log(jojo);
})();
//# sourceMappingURL=args-rest.js.map