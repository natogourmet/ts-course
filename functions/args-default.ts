(()=> {

  const fullName = ( firstName: string, lastName?: string, upper: boolean = false): string => {
    const fullName: string = `${ firstName } ${ lastName || '' }`;
    return ( upper ) ? fullName.toUpperCase() : fullName;
  }

  console.log( fullName( 'Tony', 'Stark' ) );
  

})();