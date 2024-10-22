export type RootStackParamList = {
  UserList: undefined;
  UserDetail: { userId: number };
};

// Define the User type (based on the structure from the API)
type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  city: string;
  geo: Geo;
};

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address;
};
