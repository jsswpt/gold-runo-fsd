import { ProductPreview } from "@/pages";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import {} from "react";

type Product = {
  id: number;
  name: string;
  categoryName: string;
};

const Index = (props: { product: Product }) => {
  return (
    <>
      <Head>
        <title>
          {props.product.categoryName} {props.product.name} | YORCOM
        </title>
      </Head>
      <ProductPreview />
    </>
  );
};

const products: Product[] = [
  { id: 1, name: "Майами", categoryName: "Диван" },
  { id: 2, name: "Бали", categoryName: "Диван" },
  { id: 3, name: "Финка", categoryName: "Диван" },
  { id: 4, name: "Атланта", categoryName: "Диван" },
];

export const getStaticProps: GetStaticProps = (arg) => {
  const product = products.find(
    (item) => item.id === +(arg.params!.productId as string)
  );
  return { props: { product } };
};

export const getStaticPaths: GetStaticPaths = (context) => {
  const paths = products.map((item) => ({
    params: { productId: String(item.id) },
  }));

  return {
    fallback: false,
    paths,
  };
};

export default Index;
