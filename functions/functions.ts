(()=> {

  const hero: string = "Flash";

  function returnHero(): string {
    return hero;
  }

  const callBatman = (): string => {
    return 'Batsignal activated!'
  }

  console.log(typeof callBatman);
  
})