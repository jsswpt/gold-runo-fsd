import { Product } from "@/pages";
import Head from "next/head";
import {} from "react";

// вытаскивать варианты ОПРЕДЕЛЁННОГО товара из бд
const Index = () => {
  return (
    <>
      <Head>
        <title>Майами | YORCOM</title>
      </Head>
      <Product />
    </>
  );
};

export default Index;
