type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type CommentType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

type CommentPayload = {
  rating: number;
  comment: string;
  id: number;
}

export type {CommentType, CommentPayload};
