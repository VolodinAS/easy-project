export type SignInData = {
  token: string;
  user: User;
}

type User = {
  id: string;
  login: string;
  email: string;
  fio: string;
}
