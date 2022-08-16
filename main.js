"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel Jackson",
        ironman: "Robert Downey Jr",
        vision: "Paul Bettany",
        power: 1240.50,
        active: true,
    };
    const printAvengers = (_a) => {
        var { nick, ironman } = _a, rest = __rest(_a, ["nick", "ironman"]);
        console.log(nick, ironman, rest);
    };
    printAvengers(avengers);
    const avengersArr = ['Cap', 'Thor', 'Hulk', 'Ironman'];
    const [cap, thor, hulk, ironman] = avengersArr;
})();
(() => {
    var a = 10;
    let b = 20;
    console.log(20);
    const getName = () => {
        console.log('My Name');
    };
})();
//# sourceMappingURL=main.js.map