"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capi', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            console.log('Constructor called');
        }
        getFullName() {
            return `${this.name} is ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, team, realName, canFight) {
            super(name, team, realName);
            this.canFight = canFight;
            console.log('Xmen constructor');
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
})();
//# sourceMappingURL=main.js.map