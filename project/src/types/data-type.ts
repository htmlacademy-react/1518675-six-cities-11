type UserData = {
  id: number;
  email: string;
  token: string;
};

type AuthData = {
  login: string;
  password: string;
};

type UserError = {
  error: string | null;
}

export type {UserData, AuthData, UserError};
