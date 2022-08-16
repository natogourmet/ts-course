"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    console.log(fullName('Tony', 'Stark'));
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        const fullName = `${firstName} ${lastName || ''}`;
        return (upper) ? fullName.toUpperCase() : fullName;
    };
    console.log(fullName('Tony', 'Stark'));
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    console.log(fullName('Tony', 'Stark'));
})();
(() => {
    const fullName = (firstName, ...restName) => {
        return `${firstName} ${restName.join(' ')}`;
    };
    const jojo = fullName('Jonathan', 'Joseph', 'Joestar');
    console.log(jojo);
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const destroyTheWorld = () => `World has been destroyed`;
    let myFunction;
    myFunction = addNumber;
    myFunction(1, 2);
})();
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
    let myCustomVar = 'Nato';
    myCustomVar = 44;
    myCustomVar = {
        name: 'Joseph',
        age: 52,
        powers: ['Hamon', 'Strategic']
    };
})();
(() => {
    let avenger = 123;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 44.44;
    console.log(avenger.toFixed(0));
});
(() => {
    const a = 10;
    let b;
    b = 'Hello';
    function sayHello(msg) {
        console.log(msg);
    }
})();
(() => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const villains = ['Octavius', 'Sandman', 'Rhino'];
    villains.forEach(v => console.log(v.toUpperCase()));
});
(() => {
    let isSpiderman = true;
    isSpiderman = true && false;
    console.log({ isSpiderman });
});
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["mid"] = 1] = "mid";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.mid;
});
(() => {
    const err = (msg) => {
        if (false)
            throw new Error(msg);
        return 1;
    };
    err('help');
});
(() => {
    let nothing = undefined;
});
(() => {
    let avengers;
    const villains = 20;
    avengers = Number('50');
    if (avengers < villains) {
        console.log('We good');
    }
    else {
        console.log('das no good');
    }
    console.log(avengers);
});
(() => {
    var _a;
    const spiderman = 'Spidey';
    const ironman = "Ironman";
    const drstraing = `Strange`;
    console.log(` And i... am... ${ironman}`);
    console.log(((_a = spiderman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase) || 'Not round');
    console.log(spiderman.toUpperCase);
});
(() => {
    const strange = ['Strange', 100];
    console.log(strange);
});
(() => {
    function callBatman() {
        return;
    }
    const callSpidey = () => {
        return;
    };
    callBatman();
});
//# sourceMappingURL=main.js.map