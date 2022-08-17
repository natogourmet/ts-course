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
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log('...... gogogo!!!');
    },
};
const guason = {
    reir: true,
    comer: true,
    llorar: false,
};
const reir = (guason) => {
    if (guason.reir) {
        console.log('JAJAJAJA');
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(name, age, gender, civilStatus) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.civilStatus = civilStatus;
    }
    printBio() {
        console.log(`${this.name} - ${this.age} - ${this.gender} - ${this.civilStatus}`);
    }
}
(() => {
    let addNumbers = (a, b) => a + b;
})();
//# sourceMappingURL=main.js.map