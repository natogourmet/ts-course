(()=> {

  type JoJos = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let jojo: JoJos = {
    name: 'Joseph',
    age: 21,
    powers: ['Hamon', 'Smart', 'Strong', 'Funny']
  }

  let jojo2: JoJos = {
    name: 'Jotaro',
    age: 17,
    powers: ['Stand', 'Smart', 'Strong']
  }

})()