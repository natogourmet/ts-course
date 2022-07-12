(() => {
  const a: number = 10;
  let b: string;

  b = 10; // error
  b = {}; // error
  b = []; // error
  b = 'Hello';

  function sayHello(msg: string) {
    console.log(msg);
  }
})();
