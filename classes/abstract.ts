(() => {
  abstract class Mutant {
    constructor(public name: string, public realName: string) {}
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

  const printName = (mutant: Mutant) => {
    console.log(mutant.name);
  }

  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villain('Magneto', 'Erik');

  console.log(wolverine);
  console.log(magneto);
  


})();
