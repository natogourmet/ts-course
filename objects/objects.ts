(()=> {

  let jojo: { name: string, age: number, powers: string[], getName?: () => string } = {
    name: 'Joseph',
    age: 21,
    powers: ['Hamon', 'Smart', 'Strong', 'Funny']
  }

  jojo = {
    name: 'Jotaro',
    age: 24,
    powers: ['Stand'],
    getName() {
      return this.name;
    }
  }

})()