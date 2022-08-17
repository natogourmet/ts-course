"use strict";
(() => {
    let jojo = {
        name: 'Joseph',
        age: 21,
        powers: ['Hamon', 'Smart', 'Strong', 'Funny']
    };
    let jojo2 = {
        name: 'Jotaro',
        age: 17,
        powers: ['Stand', 'Smart', 'Strong']
    };
})();
(() => {
    class Mutant {
        constructor(mutantName, name, age) {
            this.mutantName = mutantName;
            this.name = name;
            this.age = age;
        }
        mutantPower(power) {
            return `${this.mutantName} - ${power}`;
        }
    }
})();
() => {
    const client = {
        name: 'Nato',
        age: 21,
        address: {
            street: 'Calle 1',
            zip: 12345,
            city: 'Mexico City',
        },
        getFullAddress(id) {
            return `${id} - ${this.name} - ${this.address.street} - ${this.address.city}`;
        },
    };
    const client2 = {
        name: 'Cbas',
        age: 22,
        address: {
            street: 'Calle 3',
            zip: 54321,
            city: 'El Santuario',
        },
        getFullAddress(id) {
            return `${id} - ${this.name} - ${this.address.street} - ${this.address.city}`;
        }
    };
};
//# sourceMappingURL=main.js.map