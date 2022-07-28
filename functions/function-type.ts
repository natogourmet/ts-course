(()=> {

  const addNumber = ( a: number, b: number ) => a + b;
  const greet = ( name: string ) => `Hello ${ name }`;
  const destroyTheWorld = ( ) => `World has been destroyed`;

  let myFunction: ( x: number, y: number ) => number;

  // myFunction = 10;
  
  myFunction = addNumber;
  myFunction(1, 2)
  
})();