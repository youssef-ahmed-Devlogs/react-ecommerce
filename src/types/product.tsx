export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
};
