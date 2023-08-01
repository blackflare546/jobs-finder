export interface IProfileState {
  name: string;
  age: string;
  address: string;
  updateName: (name: string) => void;
  updateAge: (age: string) => void;
  updateAddress: (address: string) => void;
}
