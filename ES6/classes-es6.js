(() => {

  class Avenger {
    constructor(name, power) {
      this.name = name;
      this.power = power;
    }

  }

  class FlyingAvenger extends Avenger {
    constructor(name, power, flying) {
      super(name, power);
      this.flying = flying;
    }

  }

  const hulk = new Avenger('Hulk', 9001);
  const falcon = new FlyingAvenger('Hulk', 9001);
  console.log(hulk);
  console.log(falcon);
  
})()