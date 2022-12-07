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

type NewComment = {
  comment: string;
  rating: number;
  id: string | undefined;
}

export type {UserData, AuthData, UserError, NewComment};
