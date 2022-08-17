(() => {
  class Avenger {
    // private name: string;
    // public team: string;
    // public realName: string;
    static avgAge: number = 35;

    constructor(
      public name: string,
      public team: string,
      private realName: string
    ) {}
  }

  const antman: Avenger = new Avenger('Antman', 'Capi', 'Scott Lang');
})();
