export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  favorited: boolean;
  updatedAt?: number;
  lastFavoritedUpdate?: number;
}