(() => {
  interface Xmen {
    mutantName: string;
    mutantPower(power: string): string;
  }

  interface Human {
    name: string;
    age: number;
  }

  class Mutant implements Xmen, Human {

    constructor(
      public mutantName: string,
      public name: string,
      public age: number
    ) {}

    mutantPower(power: string) {
      return `${this.mutantName} - ${power}`;
    }
  }
})();
