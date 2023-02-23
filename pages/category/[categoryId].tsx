import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const categoriesList = [
  { name: "Диваны", id: 1 },
  { name: "Кресла", id: 2 },
  { name: "Пуфики", id: 3 },
  { name: "Матрасы", id: 4 },
];

const products = [
  { categoryId: 1, id: 1, name: "Диван майами", price: 50000 },
  { categoryId: 1, id: 2, name: "Диван бали", price: 30000 },
  { categoryId: 1, id: 3, name: "Диван боли", price: 40000 },
  { categoryId: 3, id: 4, name: "Пуф майами", price: 10000 },
  { categoryId: 3, id: 5, name: "Пуф бали", price: 5000 },
  { categoryId: 3, id: 6, name: "Пуф боли", price: 50000 },
  { categoryId: 4, id: 7, name: "Матрас майами", price: 3000 },
  { categoryId: 4, id: 8, name: "Матрас бали", price: 8000 },
  { categoryId: 4, id: 9, name: "Матрас боли", price: 5000 },
];

const findProducts = (
  minPrice: number,
  maxPrice: number,
  categoryId: number
) => {
  console.log(minPrice, maxPrice, categoryId);
  const findedProducts = products.filter((item) => {
    if (
      item.price > minPrice &&
      item.price < maxPrice &&
      item.categoryId === categoryId
    )
      return item;
  });

  return findedProducts;
};

// пример работы
const Index = (props: any) => {
  const [products, setProducts] = useState<any>([]);
  const router = useRouter();

  const categoryId = router.query.categoryId as string;
  const minPrice = router.query.minPrice as string;
  const maxPrice = router.query.maxPrice as string;

  useEffect(() => {
    const list = findProducts(+minPrice, +maxPrice, +categoryId);

    setProducts(list);
  }, [router]);

  return (
    <>
      <Head>
        <title>Диваны | YORCOM</title>
      </Head>
      <>{JSON.stringify(products)}</>
    </>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const id = context.params!.categoryId as string;

  return {
    props: { category: categoriesList.find((item) => item.id === +id)! },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = categoriesList.map((item) => ({
    params: { categoryId: String(item.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Index;
