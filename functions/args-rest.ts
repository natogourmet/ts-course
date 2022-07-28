(() => {

  const fullName = ( firstName: string, ...restName: string[] ): string => {
    return `${ firstName } ${ restName.join(' ') }`;
  }

  const jojo = fullName( 'Jonathan', 'Joseph', 'Joestar' );

  console.log(jojo);
  

})();