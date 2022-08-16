(() => {

  type Avenger = {
    name: string,
    weapon: string
  }

  const ironman: Avenger = {
    name: "Tony Stark",
    weapon: "Mark 50"
  } 

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir"
  }

  const captainAmerica: Avenger = {
    name: "Steve Rogers",
    weapon: "Shield"
  }

  const avengers: Avenger[] = [ironman, thor, captainAmerica];

  for (const avenger of avengers) {
    console.log(avenger);
  }
    
  }
   
})()