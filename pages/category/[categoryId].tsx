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
  minPrice: number | null,
  maxPrice: number | null,
  categoryId: number | null
) => {
  const modifiedMinPrice = minPrice || 0;
  const modifiedMaxPrice = maxPrice || 100000000;

  const findedProducts = products.filter((item) => {
    if (
      item.price > modifiedMinPrice &&
      item.price < modifiedMaxPrice &&
      item.categoryId === categoryId
    )
      return item;
  });

  return findedProducts;
};

// пример работы
const Index = (props: any) => {
  const [color, setColor] = useState<"yellow" | "red" | "blue" | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const [isFetched, setIsFetched] = useState(false);

  const [products, setProducts] = useState<any>([]);
  const router = useRouter();

  console.log(props);

  useEffect(() => {
    const list = findProducts(minPrice, maxPrice, props.category.id);
    console.log("Otrabotal", list);
    setProducts(list);
    setIsFetched(true);
  }, [router]);

  return (
    <>
      <Head>
        <title>Диваны | YORCOM</title>
      </Head>
      <div>
        <p>minPrice - {minPrice}</p>
        <p>maxPrice - {maxPrice}</p>
        <p>color - {color}</p>
      </div>
      <div>
        <h1>Фильтры</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push({
              query: {
                minPrice,
                maxPrice,
                color,
                categoryId: props.category.id,
              },
            });
          }}
        >
          <input
            placeholder="Минимальная цена"
            type="number"
            value={minPrice || undefined}
            onChange={(e) => setMinPrice(+e.currentTarget.value)}
          />
          <input
            placeholder="Максимальная цена"
            type="number"
            value={maxPrice || undefined}
            onChange={(e) => setMaxPrice(+e.currentTarget.value)}
          />
          <select
            defaultValue={"default"}
            onChange={(e) =>
              setColor(e.currentTarget.value as "yellow" | "blue" | "red")
            }
          >
            <option value="default" disabled>
              Выбор цвета
            </option>
            <option value="red">Красный</option>
            <option value="yellow">Жёлтый</option>
            <option value="blue">Синий</option>
          </select>
          <button type="submit">Найти</button>
        </form>
      </div>
      <>
        {isFetched ? JSON.stringify(products) : JSON.stringify(props.baseList)}
      </>
    </>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const id = context.params!.categoryId as string;

  return {
    props: {
      category: categoriesList.find((item) => item.id === +id)!,
      baseList: products.filter((item) => item.categoryId === +id),
    },
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
