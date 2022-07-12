(() => {

  const spiderman: string = 'Spidey';
  const ironman: string = "Ironman";
  const drstraing: string = `Strange`;

  console.log(` And i... am... ${ ironman }`);
  
  console.log( spiderman[10]?.toUpperCase || 'Not round');
  
 
  console.log( spiderman.toUpperCase );
  
})