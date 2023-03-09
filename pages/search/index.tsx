import { Search } from "@/pages";
import Head from "next/head";
import { useRouter } from "next/router";
import {} from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Результаты поиска | YORCOM</title>
      </Head>
      <Search />
    </>
  );
};

export default Index;
