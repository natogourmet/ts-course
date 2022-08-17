// Crear interfaces

interface Batimovil {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}

interface Villain {
  reir: boolean;
  comer?: boolean;
  llorar?: boolean;
}

interface GetCitizenAmount {
  (ciudadanos: string[]): number;
}

interface Person {
  name: string;
  age: number;
  gender: string;
  civilStatus: string;
  printBio(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Batimovil): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
};

const batimovil: Batimovil = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log('...... gogogo!!!');
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const guason: Villain = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Villain): void => {
  if (guason.reir) {
    console.log('JAJAJAJA');
  }
};

// Cree una interfaz para la siguiente funcion

const ciudadGotica: GetCitizenAmount = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person {
  constructor(
    public name: string,
    public age: number,
    public gender: string,
    public civilStatus: string
  ) {}

  printBio() {
    console.log(
      `${this.name} - ${this.age} - ${this.gender} - ${this.civilStatus}`
    );
  }
}
