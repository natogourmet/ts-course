(() => {

  const err = (msg: string): never|number => {

    if (false) throw new Error(msg);
    return 1;

  }

  err('help');

})