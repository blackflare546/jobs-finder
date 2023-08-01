export interface ISigninState {
  email: string;
  password: string;
  updateEmail: (email: string) => void;
}
