import { ProductT } from "..";

const products: ProductT[] = [
  {
    colors: null,
    description: "норм диван броу",
    id: 1,
    media: null,
    name: "Майами",
    oldPrice: 6000,
    price: 5000,
  },
  {
    colors: null,
    description: "ващзе шик диван броу",
    id: 2,
    media: null,
    name: "Бали",
    oldPrice: 8000,
    price: 1000,
  },
];

export const searchFurniture = async ({ query }: { query: string }) => {
  return new Promise<Array<ProductT>>((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 2000);
  });
};
