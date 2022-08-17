(() => {
  class Avenger {
    constructor(
      public name: string,
      public team: string,
      private realName: string
    ) {
      console.log('Constructor called');
    }
    protected getFullName() {
      return `${this.name} is ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      team: string,
      realName: string,
      public canFight: boolean
    ) {
      super(name, team, realName);
      console.log('Xmen constructor');
    }

    getFullNameFromXmen() {
      console.log(super.getFullName());
    }
  }
})();
