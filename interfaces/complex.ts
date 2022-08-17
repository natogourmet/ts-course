() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
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
      city: 'Mexico City',
    },
    getFullAddress(id: string) {
      return `${id} - ${this.name} - ${this.address.street} - ${this.address.city}`;
    },
  };

  const client2: Client = {
    name: 'Cbas',
    age: 22,
    address: {
      street: 'Calle 3',
      zip: 54321,
      city: 'El Santuario',
    },
    getFullAddress(id: string) {
      return `${id} - ${this.name} - ${this.address.street} - ${this.address.city}`;
    }
  };
};
