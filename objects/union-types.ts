(() => {

  type JoJos = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let myCustomVar: string | number | JoJos = 'Nato';

  myCustomVar = 44;

  myCustomVar = {
    name: 'Joseph',
    age: 52,
    powers: ['Hamon', 'Strategic']
  }

})();