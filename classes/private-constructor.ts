(() => {

  class Apocalipsis {

    static instance: Apocalipsis;

    private constructor( public name: string ) {

    }

    static callApocalipsis(): Apocalipsis {
      if ( !Apocalipsis.instance ) {
        Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis');
      }
      return Apocalipsis.instance;
    }

    static changeName( name: string ): void {
      Apocalipsis.instance.name = name;
    }
     
  }

  const apocalipsis = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  Apocalipsis.changeName('No Soy Apocalipsis');

  console.log(apocalipsis, apocalipsis2, apocalipsis3);
  
  
})()