export type PostTypes = {
  title: string;
  score: number;
  thumbnail: string;
  likes: number | null;
  author_fullname: string;
};

export enum Categories {
  TOP = 'top',
  NEW = 'new',
  HOT = 'hot',
  CONTROVERSIAL = 'controversial',
}
