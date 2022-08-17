(() => {

  interface Client {
    name: string;
    age?: number;
    address: Address;
  }

  interface Address {
    street: string;
    city: string;
    zip: number;
  }

  const client: Client = {
    name: 'Nato',
    age: 21,
    address: {
      street: 'Calle 1',
      zip: 12345,
      city: 'Mexico City'
    }
  }

  const client2: Client = {
    name: 'Cbas',
    age: 22,
    address: {
      street: 'Calle 3',
      zip: 54321,
      city: 'El Santuario'
    }
  }
  
})