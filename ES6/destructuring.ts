(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    power: number;
    active: boolean;
  }

  const avengers: Avengers = {
    nick: "Samuel Jackson",
    ironman: "Robert Downey Jr",
    vision: "Paul Bettany",
    power: 1240.50,
    active: true,
  }

  const printAvengers = ({ nick, ironman, ...rest }: Avengers) => {
    console.log(nick, ironman, rest);
  }

  printAvengers(avengers);
  
})()