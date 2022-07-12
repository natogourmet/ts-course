(() => {

  let avenger: any = 123;

  avenger = 'Dr Strange';
  console.log( (avenger as string). charAt(0) );

  avenger = 44.44;
  console.log( (<number>avenger).toFixed(0) );
  
  
})