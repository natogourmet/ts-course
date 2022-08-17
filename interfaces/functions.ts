(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbers: addTwoNumbers = (a: number, b: number) => a + b;
})();
