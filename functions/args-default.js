"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        const fullName = `${firstName} ${lastName || ''}`;
        return (upper) ? fullName.toUpperCase() : fullName;
    };
    console.log(fullName('Tony', 'Stark'));
})();
//# sourceMappingURL=args-default.js.map