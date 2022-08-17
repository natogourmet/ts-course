"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        saveWorld() {
            console.log(`${this.name} saves the world`);
        }
    }
    class Villain extends Mutant {
        destroyWorld() {
            console.log(`${this.name} destroys the world`);
        }
    }
    const printName = (mutant) => {
        console.log(mutant.name);
    };
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Erik');
    console.log(wolverine);
    console.log(magneto);
})();
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
        get fullName() {
            return super.getFullName();
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
})();
//# sourceMappingURL=main.js.map